export const FormatTime = (time: number) => {
  const timestamp = time;
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString();
  return formattedDate;
};
