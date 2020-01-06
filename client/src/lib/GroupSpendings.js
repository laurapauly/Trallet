export default function GroupSpendings(spendings) {
  const result = {};
  spendings.map(spending => {
    if (typeof result[spending.date] === 'undefined') {
      result[spending.date] = [spending];
      return null;
    }

    result[spending.date].push(spending);
    return null;
  });
  return result;
}
