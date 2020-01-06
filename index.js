const core = require('@actions/core');

try {
  // `who-to-greet` input defined in action metadata file
  const semanticVersion = core.getInput('semantic-version');
  const versionType = core.getInput('version-type');
  console.log("semanticVer: ", semanticVersion);
  console.log("version Type: ", versionType);

  const majorNumber = semanticVersion.toString().split(".")[0];
  const minorNumber = semanticVersion.toString().split(".")[1];
  const patchNumber = semanticVersion.toString().split(".")[2];

  switch(versionType) {
    case 'MAJOR':
      // semanticVersion = ;
      break;
    case 'MINOR':
      // semanticVersion = ;
      console.log(minorNumber)
      break;
    case 'PATCH':
      break;
    default:
      console.log('went to default')
      // semanticVersion = ;
  }

  //   core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}