export default function collectCarNumberCount(collection) {
  const res = collection.reduce((sum, curValue) => {
    if (curValue.substr(0, 2) === '粤A') return sum + 1;
    return sum;
  }, 0);
  return res;
}
