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
const { gray } = require("chalk");
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
    blog_username,
    npx_card_handle,
    job_title,
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
                name: `Say 👋, on my ${chalk.green.bold("Email")}?`,
                value: () => {
                    open(`mailto:${user_email}`);
                    console.log("\nOpening you Email application. See you at my Inbox\n");
                },
            },
            
            //// Quit
            {
                name: "Quit.",
                value: () => {
                    console.log("🥺 Have a nice Day. Although You can support thr project by giving a ⭐.\n");
                },
            },
        ],
    },
];

const data = {
    name: chalk.bold.green(`                  ${user_name} / ${npx_card_handle}`),
    // You can Style the Job titile if You can, As I did.
    // You can also keep it simple by replacing the Line 65 by:
    // work: `${chalk.white(`{job_title}`)}`
    work:  `${chalk.white("Project Engineer at")} ${chalk.bold.hex("#2b82b2").bold("Wipro Ltd")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.yellowBright(`${twitter_username}`),
    github: chalk.gray("https://github.com/") + chalk.green(`${github_username}`),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blueBright(`${linkedin_username}`),
    Blogs: chalk.gray("https://medium.com/@") + chalk.redBright(`${blog_username}`),
    npx: chalk.green("npx") + " " + chalk.white(`${npx_card_handle}`),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelBlogs: chalk.white.bold("      Blogs:"),
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
        `${data.labelBlogs}  ${data.Blogs}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("Hey! I'm Vidit, I am working with Wipro Ltd as a Project Engineer")}`,
        `${chalk.italic("I love to connect with new people, Say 'Hii' via Social Media or E-mail")}`,
    ].join("\n"),
    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "singleDouble",
        borderColor: "blue",
        align:"left",
        backgroundColor: "#660033",
        

        
    }
);

console.log(me);

prompt(questions).then(answer => answer.action());