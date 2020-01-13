export function calculateDifferenceInDays(startDate, endDate) {
  const differenceInTime = endDate.getTime() - startDate.getTime();
  return differenceInTime / (1000 * 3600 * 24);
}
