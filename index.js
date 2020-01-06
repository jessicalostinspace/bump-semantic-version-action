const core = require('@actions/core');

try {
  // `who-to-greet` input defined in action metadata file
  const semanticVersion = core.getInput('semantic-version');
  const versionType = core.getInput('version-type');
  console.log("semanticVer: ", semanticVersion);
  console.log("version Type: ", versionType);

  //   core.setOutput("time", time); 
} catch (error) {
  core.setFailed(error.message);
}