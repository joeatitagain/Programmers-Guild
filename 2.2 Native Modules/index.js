const fs = require("fs")

// n

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // displays the contents of message.txt on the terminal
});