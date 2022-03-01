const fetch = require("node-fetch");
const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  //const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");

  core.info("Info message");

  const randomPos = Math.round(Math.random() * 1000);
  console.log("randomPos: ", randomPos);

  const url = `https://sonarcloud.io/api/issues/search?componentKeys=IyotakeTatanka_devsecops`;

  const response = await fetch(url);

  const data = await response.json();

  core.startGroup("Logging sonar response");
  console.log(data);
  core.endGroup();

  let i;
  for (i = 0; i < 12; i++) {
    console.log("i: ", i++);
  }

  core.warning("Warning message");
}

run();
