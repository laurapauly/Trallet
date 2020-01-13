export function getAveragePerDay(totalSpendings, days) {
  const average = totalSpendings / days;
  return average.toFixed(2);
}
