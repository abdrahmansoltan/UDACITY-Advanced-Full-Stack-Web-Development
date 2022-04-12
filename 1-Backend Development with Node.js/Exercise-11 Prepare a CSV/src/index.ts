import express from "express";
import csv from "csvtojson";
import { promises as fsPromises } from "fs";

const app = express();
const port = 3000;

const inputFile = "./users.csv";
const outputFile = "users.json";

//define a route handler for the dafault home page
app.get("/convert", async (req, res) => {
  res.send("conversion in progress!");

  // from documentation at https://www.npmjs.com/package/csvtojson
  const jsonArray = await csv().fromFile(inputFile);
  console.log(jsonArray);

  let newData = jsonArray.map(
    (item: { first_name: string; last_name: string; phone: string }) => {
      let firstName = item.first_name;
      let lastName = item.last_name;
      let phone = item.phone || "missing data";

      return { firstName, lastName, phone };
    }
  );

  console.log("converted: " + JSON.stringify(newData));
  fsPromises.writeFile(outputFile, JSON.stringify(newData));

  // csv()
  //   .fromFile(inputFile)
  //   .then((data) => {
  //     console.log(data);
  //     let newData = data.map(
  //       (item: { first_name: string; last_name: string; phone: string }) => {
  //         let first = item.first_name;
  //         let last = item.last_name;
  //         let phone = item.phone;
  //         if (item.phone === "") {
  //           phone = "missing data";
  //         }
  //         // return a new object
  //         return { first, last, phone };
  //       }
  //     );
  //     console.log("converted: " + JSON.stringify(newData));
  //     fsPromises.writeFile(outputFile, JSON.stringify(newData));
  //   });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
