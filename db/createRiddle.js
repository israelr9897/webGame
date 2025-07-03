import { create } from "domain";
import fs from "fs";

function readFile(puth){
    return new Promise((res,rej) => {
        fs.readFile(puth, "utf-8", (err, data) =>{
            if(err){
                rej("read file error massege: " + err.message)
            }
            res(JSON.parse(data))
        })
    })
}

async function CreateRiddle(puth, riddle) {
    let riddels = await readFile(puth).then(data => data).catch(p => console.log(p));
    console.log(riddels);
    riddels.push(riddle);
    return new Promise((res, rej) => {
    fs.writeFile(puth, JSON.stringify(riddels), "utf-8", (err) => {
      if (err) {
        rej("CreateRiddle error massege: " + err);
      }
      res("added riddle");
    });
  });
}

CreateRiddle("./riddles.txt", "erf")
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });
