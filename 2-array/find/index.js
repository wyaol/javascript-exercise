export default function find00OldPerson(collection) {
  const res = collection.find(item => item.age < 20 && item.age > 10);
  return res.name;
}
