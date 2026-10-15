export const activteToggler = <T extends { isActive?: boolean }>(
  index: number,
  initState: T[],
  setState: (value: T[]) => void
) => {
  const stateCopy = initState.map((data, i) => {
    if (i === index) {
      return { ...data, isActive: !data?.isActive };
    } else {
      return { ...data, isActive: false };
    }
  });

  setState(stateCopy);
};
