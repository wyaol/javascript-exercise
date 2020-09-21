export default function numberMapToWord(collection) {
  return collection.map(value => String.fromCharCode(value + 96));
}
