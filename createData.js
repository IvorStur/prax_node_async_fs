const fs = require('fs/promises');
const { faker } = require('@faker-js/faker');

async function f2() {
  console.log('Data gen');

  const data = [];
  for (let i = 0; i <= 10; i++) {
    const name = faker.commerce.productName();
    const description = faker.commerce.productDescription();

    data.push({ name: name, description: description });
  }
  var json = JSON.stringify(data, null, 4);

  await fs.writeFile('data2.json', json, 'utf8');
}

f2();
