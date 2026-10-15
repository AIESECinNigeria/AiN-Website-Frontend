export const inputChangeHandler = (e, setState) => {
  setState((prevState) => {
    return { ...prevState, [e.target.name]: e.target.value };
  });
};
