export const activteToggler = (index, initState, setState) => {
  const stateCopy = initState.map((data, i) => {
    if (i === index) {
      return { ...data, isActive: !data?.isActive };
    } else {
      return { ...data, isActive: false };
    }
  });

  setState(stateCopy);
};
