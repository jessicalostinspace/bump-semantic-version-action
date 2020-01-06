const core = require('@actions/core');

try {
  // `who-to-greet` input defined in action metadata file
  const semanticVersion = core.getInput('semantic-version');
  const versionType = core.getInput('version-type').toUpperCase();
  console.log("semanticVer: ", semanticVersion);
  console.log("version Type: ", versionType);

  let majorNumber = semanticVersion.toString().split(".")[0];
  let minorNumber = semanticVersion.toString().split(".")[1];
  let patchNumber = semanticVersion.toString().split(".")[2];

  let newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
  switch(versionType) {
    case 'MAJOR':
      majorNumber = majorNumber + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
      core.setOutput("bumped-semantic-version", newSemanticVersion);
      break;
    case 'MINOR':
      minorNumber = minorNumber + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
      core.setOutput("bumped-semantic-version", newSemanticVersion);
      console.log("newSemVer: ", newSemanticVersion)
      break;
    case 'PATCH':
      patchNumber = patchNumber + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;
      core.setOutput("bumped-semantic-version", newSemanticVersion);
      break;
    default:
      core.setFailed("Could not process the version type. Make sure your string is either 'MAJOR', 'MINOR', or 'PATCH'.");
  }
} catch (error) {
  core.setFailed(error.message);
}