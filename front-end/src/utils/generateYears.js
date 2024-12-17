export const generateYears = (start, end) => {
  const years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
};
