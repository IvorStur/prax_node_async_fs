async function f() {
  const fsPromises = require('fs').promises;
  const data = await fsPromises
    .readFile('data.json')
    .catch((err) => console.error('Failed to read file', err));

  return JSON.parse(data.toString());
}

f()
  .then((d) => console.log(d))
  .catch((err) => console.error('f() failed', err));


  
async function f2() {
  const fsPromises = require('fs').promises;
  const data = await fsPromises.readFile('data.json');

  console.log(JSON.parse(data.toString()));
}

f2();

