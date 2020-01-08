export default function groupSpendings(spendings) {
  const result = {};
  spendings.forEach(spending => {
    if (typeof result[spending.date] === 'undefined') {
      result[spending.date] = [spending];
      return null;
    }

    result[spending.date].push(spending);
    return null;
  });
  return result;
}

// function groupSpendings(spendings) {
//   const result = spendings.reduce((groups, spending) => {
//     const group = groups[spending.date] || [];
//     group.push(spending);
//     return { ...groups, [spending.date]: group };
//   }, {});

//   return result;
// }
