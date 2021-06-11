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
const Ora = require("ora");




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
            // Share Your profile Card
            {
                name: `Share Your ${chalk.cyanBright.bold("Profile Card")} and Tell Others: `,
                value: () => {
                    open(`https://twitter.com/intent/tweet?text=I created my Profile Card. Run npx ${npx_card_handle} to view. Make Your own at: https://github.com/viditvarshney/CLI_ProfileCard Love this Project by @_imvv` );
                    console.log("\nRedirecting You...\n");
                },
            },
            // Send an email
            {
                name: `Say 👋, on my ${chalk.green.bold("Email")}?`,
                value: () => {
                    open(`mailto:${user_email}`);
                    console.log("\nOpening your Email application. See you at my Inbox\n");
                },
            },
            
            // Here you can add your Projects, Games or any showcase Project

            // Reaction Timer Game
            {
                name: `Play ${chalk.yellow.bold("Reaction Timer")}?`,
                value: () => {
                    open(`https://viditvarshney.github.io/Reaction-Timer.github.io/`);
                    console.log("\nLoading the Game...\n");
                },
            },
            //// Quit
            {
                name: "Quit.",
                value: () => {
                    console.log(" Have a nice Day. Although You can support the project by giving a Star ⭐.\n");
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
function CardPrinter() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(console.log(me));
      }, 12000);
    });
}

// Animation 

function Loaded() {

    const spinner = Ora('Welcome in Cli World').start();

    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.green('Support Project by giving a Star ⭐ ')}`;
    }, 2000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.yellow('Card sent to Press...')}`; 
    }, 4000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.magentaBright('Card is Ready for Printing...')}`; 
    }, 6000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = 'Your Card is About to Ready...'; 
    }, 8000);
    
    setTimeout(() => {
        spinner.indent = 30;
        spinner.spinner = 'soccerHeader';
        spinner.text = `${chalk.blueBright('Printing Done, Here We go:')}`; 
    }, 10000);
    
    setTimeout(() => {
        spinner.succeed(`${chalk.greenBright('Congratulations, Now you have a Identity in CLI World.😄')}`);
    }, 12000);
    
    

};



async function Card() {
    Loaded();
    const card = await CardPrinter();
    prompt(questions).then(answer => answer.action());
}
Card();
