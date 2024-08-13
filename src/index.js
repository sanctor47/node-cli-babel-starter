#!/usr/bin/env node

import inquirer from "inquirer";
import { runBasicExample } from "./commands/basic-example";

// const runBasicExample = () => console.log("Basic Example");
const runChalkExample = () => console.log("Chalk Example");
const runFigletExample = () => console.log("Figlet Example");
const runInquirerExample = () => console.log("Inquirer Example");
const runInquirerConfirmExample = () => console.log("Inquirer Confirm Example");
const runInquirerListExample = () => console.log("Inquirer List Example");
const runOraExample = () => console.log("Ora Example");

const examples = {
  "Basic Example": runBasicExample,
  "Chalk Example": runChalkExample,
  "Figlet Example": runFigletExample,
  "Inquirer Example": runInquirerExample,
  "Inquirer Confirm Example": runInquirerConfirmExample,
  "Inquirer List Example": runInquirerListExample,
  "Ora Example": runOraExample,
};

inquirer
  .prompt([
    {
      type: "list",
      name: "selectedExample",
      message: "Choose an example to run:",
      choices: Object.keys(examples),
    },
  ])
  .then((answers) => {
    const exampleFunction = examples[answers.selectedExample];
    if (exampleFunction) {
      exampleFunction();
    } else {
      console.error("Invalid selection");
    }
  }).catch((error) => {
    // console.error(error);
    return;
  });

 

// On CTRL+C
process.on("SIGINT", () => {
  console.log("\nBye bye!");
  process.exit();
});

// On uncaught exception
process.on("uncaughtException", (err) => {
  console.error(err);
  process.exit(1);
});