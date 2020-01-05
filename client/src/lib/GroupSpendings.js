export default function GroupSpendings(spendings) {
  const result = {};
  spendings.map(spending => {
    if (typeof result[spending.date] === 'undefined') {
      result[spending.date] = [spending];
      return;
    }

    result[spending.date].push(spending);
  });
  return result;
}
