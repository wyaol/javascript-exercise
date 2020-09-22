export default function collectCarNumberCount(collection) {
  const res = collection.reduce((sum, curValue) => {
    if (curValue.startsWith('粤A')) return sum + 1;
    return sum;
  }, 0);
  return res;
}
