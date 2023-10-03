const fs = require('fs');

fs.readFile('data.json', (err, fileData) => {
  if (err != null) {
    console.error(err);
    return;
  }

  const data = JSON.parse(fileData.toString());
  console.log(data);
});
