import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const inputChangeHandler = <T extends Record<string, unknown>>(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  setState: Dispatch<SetStateAction<T>>
) => {
  setState((prevState) => {
    return { ...prevState, [e.target.name]: e.target.value } as T;
  });
};
