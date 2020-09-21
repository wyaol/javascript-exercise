export default function countTypesNumber(source) {
  return Object.values(source).reduce((sum, value) => sum + Number(value), 0);
}
