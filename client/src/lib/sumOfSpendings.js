function ungroupSpendingList(groups) {
  const result = [];
  Object.keys(groups).forEach(key => {
    result.push(...groups[key]);
  });

  return result;
}

export function sumOfSpendings(groups) {
  const reducer = (accumulator, item) => {
    const amount = parseInt(item.amount, 10);
    return accumulator + amount;
  };
  return ungroupSpendingList(groups).reduce(reducer, 0);
}
