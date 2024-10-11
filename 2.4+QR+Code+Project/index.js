
import inquirer from "inquirer" 
import QRCode from 'qrcode'
import fs from "fs"



if (typeof QRCode === 'undefined') {
  console.error('qr object is undefined!');
} else {
  inquirer
    .prompt([
      {
        message: "Please enter your link to generate a QR code:",
        name: "URL",
      },
    ])
    .then((answers) => {
      const url = answers.URL;
      QRCode.toDataURL(url, { type: "png" })
        .then(qr_image => {
          const base64Image = qr_image.split(';base64,').pop();
          const binaryImage = Buffer.from(base64Image, 'base64');
          fs.writeFile("qr_img.png", binaryImage, (err) => {
            if (err) throw err;
            console.log("The QR code image has been saved!");
          });
        })
        .catch((error) => {
          console.error("An error occurred while generating the QR code:", error);
        });
            fs.writeFile("URL.txt", url, (err) => {
              if (err) throw err;
              console.log("The file has been saved!");
            });
          })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  console.log('it works fine')
}


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
