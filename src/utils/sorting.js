
export const sortSelectOptions = (a, b) => {
  const keyA = a.label,
    keyB = b.label;

  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  
  return 0;
}
