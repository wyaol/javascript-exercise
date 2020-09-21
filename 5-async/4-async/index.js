async function fetchData(url) {
  // <-- start
  const response = await fetch(url);
  const data = await response.json();
  return data;
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
