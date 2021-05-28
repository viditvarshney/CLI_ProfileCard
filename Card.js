#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
// const request = require("request");
const path = require("path");
// const ora = require("ora");
// const cliSpinners = require("cli-spinners");

clear();

//! importing User Data from data.json
const res = fs.readFileSync(path.resolve(__dirname, "data.json"));
const user_data = JSON.parse(res);
const {
    user_name,
    user_email,
    twitter_username,
    linkedin_username,
    github_username,
    // personal_site,
    npx_card_handle,
    job_title,
    // resume_url,
} = user_data;

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            //// Send an email
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open(`mailto:${user_email}`);
                    console.log("\nDone, see you soon at inbox.\n");
                },
            },
            
            //// Quit
            {
                name: "Quit.",
                value: () => {
                    console.log("🥺 Have a nice Day.\n");
                },
            },
        ],
    },
];

const data = {
    name: chalk.bold.green(`                  ${user_name}+"/"+ ${npx_card_handle}`),
    // work: `${chalk.white("Software Engineer at")} ${chalk.hex("#2b82b2").bold("ClearTax")}`,
    work: `${chalk.white(`${job_title}`)}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan(`${twitter_username}`),
    github: chalk.gray("https://github.com/") + chalk.green(`${github_username}`),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue(`${linkedin_username}`),
    npx: chalk.red("npx") + " " + chalk.white(`${npx_card_handle}`),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("Hey! I'm Vidit, I am working with Wipro Ltd as a Project Engineer")}`,
        `${chalk.italic("I love to connect with new people, Say 'Hii' Social Media or E-mail")}`,
    ].join("\n"),
    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "single",
        borderColor: "green",
    }
);

console.log(me);

prompt(questions).then(answer => answer.action());