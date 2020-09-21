export default function find00OldPerson(collection) {
  let res;
  collection.forEach(person => {
    if (person.age > 10 && person.age < 20) res = person.name;
  });
  return res;
}
