const core = require('@actions/core');

try {
  const semanticVersion = core.getInput('semantic-version');
  const versionType = core.getInput('version-type').toUpperCase();

  let majorNumber = semanticVersion.toString().split(".")[0];
  let minorNumber = semanticVersion.toString().split(".")[1];
  let patchNumber = semanticVersion.toString().split(".")[2];

  let newSemanticVersion = '';

  switch(versionType) {
    case 'MAJOR':
      majorNumber = parseInt(majorNumber, 10) + 1;
      newSemanticVersion = majorNumber + ".0.0";
      break;
    case 'MINOR':
      minorNumber = parseInt(minorNumber, 10) + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + ".0"
      break;
    case 'PATCH':
      patchNumber = parseInt(patchNumber, 10) + 1;
      newSemanticVersion = majorNumber + "." + minorNumber + "." + patchNumber;

      break;
    default:
      core.setFailed("Could not process the version type. Make sure your string is either 'MAJOR', 'MINOR', or 'PATCH'.");
  }

  core.setOutput("bumped-semantic-version", newSemanticVersion);
  console.log('\x1b[32m%s\x1b[0m', `Bumped Semantic Version: ${newSemanticVersion}`);
} catch (error) {
  core.setFailed(error.message);
}