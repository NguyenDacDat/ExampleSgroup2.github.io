const total = [1, 2, 3, 4, 5];
const getTotal = (item) => {
  let sum = 0;
  item.forEach((acc) => {
    sum += acc;
  });
  return sum;
};
console.log(getTotal(total));
