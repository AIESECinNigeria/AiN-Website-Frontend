export default async function requestHandler({
  method,
  url,
  headers,
  data,
  isMultipart,
}) {
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
            ? data
            : JSON.stringify(data)
          : undefined,
    })
      .then(async (response) => {
        let responseData = null;
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
}) {
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
            ? data
            : JSON.stringify(data)
          : undefined,
    });

    let responseData = null;
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
      setState({ data: null, error: null, isLoading: false });
    }, 7000);
  } catch (err) {
    console.log(err, 'Error');
    if (setState) {
      setState({
        isLoading: false,
        data: null,
        error: err?.response?.data
          ? JSON.stringify(err?.response?.data)
          : err.response?.data?.error
          ? err.response?.data?.error?.responseMessage
          : !err.response?.data?.error
          ? err.response?.data?.responseMessage?.toString()
          : err.message,
      });
    }
    if (errorFunction) {
      errorFunction();
    }
  }
}
