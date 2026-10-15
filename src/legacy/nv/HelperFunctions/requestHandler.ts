interface RequestParams {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  data?: unknown;
  isMultipart?: boolean;
}

interface RequestResult {
  data: unknown;
  status: number;
  statusText: string;
  headers: Headers;
}

export default async function requestHandler({
  method,
  url,
  headers,
  data,
  isMultipart,
}: RequestParams): Promise<RequestResult> {
  return new Promise((resolve, reject) => {
    // Context
    const userToken = localStorage.getItem('iseTutorAccessToken');

    fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': !isMultipart
          ? 'application/json'
          : 'multipart/form-data',
        ...headers,
      },
      body:
        data !== undefined && data !== null
          ? isMultipart
            ? (data as BodyInit)
            : JSON.stringify(data)
          : undefined,
    })
      .then(async (response) => {
        let responseData: unknown = null;
        try {
          responseData = await response.json();
        } catch (e) {
          responseData = null;
        }

        if (!response.ok) {
          return reject({
            response: { data: responseData, status: response.status },
            message: `Request failed with status code ${response.status}`,
          });
        }

        resolve({
          data: responseData,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      })
      .catch((err) => reject(err));
  });
}

interface SubmitState {
  isLoading: boolean;
  data: unknown;
  error: unknown;
}

interface RequestHandler2Params {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  data?: unknown;
  isMultipart?: boolean;
  setState?: (value: SubmitState) => void;
  successFunction?: () => void;
  errorFunction?: () => void;
  load?: boolean;
}

interface RequestError {
  response?: {
    data?: {
      error?: { responseMessage?: string };
      responseMessage?: { toString(): string };
    };
    status?: number;
  };
  message?: string;
}

export async function requestHandler2({
  method,
  url,
  headers,
  data,
  isMultipart,
  setState,
  successFunction,
  errorFunction,
  load,
}: RequestHandler2Params) {
  const userToken = localStorage.getItem('iseTutorAccessToken');
  if ((setState && load === true) || (setState && load === undefined)) {
    setState({ data: null, error: null, isLoading: true });
  } else if (setState && load === false) {
    setState({ data: null, error: null, isLoading: false });
  }
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-Type': !isMultipart
          ? 'application/json'
          : 'multipart/form-data',
        ...headers,
      },
      body:
        data !== undefined && data !== null
          ? isMultipart
            ? (data as BodyInit)
            : JSON.stringify(data)
          : undefined,
    });

    let responseData: unknown = null;
    try {
      responseData = await response.json();
    } catch (e) {
      responseData = null;
    }

    if (!response.ok) {
      throw {
        response: { data: responseData, status: response.status },
        message: `Request failed with status code ${response.status}`,
      };
    }

    if (setState) {
      setState({
        isLoading: false,
        data: responseData,
        error: null,
      });
    }
    if (successFunction) {
      successFunction();
    }

    setTimeout(() => {
      setState!({ data: null, error: null, isLoading: false });
    }, 7000);
  } catch (err) {
    console.log(err, 'Error');
    const e = err as RequestError;
    if (setState) {
      setState({
        isLoading: false,
        data: null,
        error: e?.response?.data
          ? JSON.stringify(e?.response?.data)
          : e.response?.data?.error
          ? e.response?.data?.error?.responseMessage
          : !e.response?.data?.error
          ? e.response?.data?.responseMessage?.toString()
          : e.message,
      });
    }
    if (errorFunction) {
      errorFunction();
    }
  }
}
