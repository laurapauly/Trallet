export function getAvailableBudget(sum, budget) {
  const newBudget = parseInt(budget, 10);
  return newBudget - sum;
}
