const core = require('@actions/core');

try {
  // `who-to-greet` input defined in action metadata file
  const semanticVersion = core.getInput('semantic-version');
  const versionType = core.getInput('version-type');
  console.log("semanticVer: ", semanticVersion);
  console.log("version Type: ", versionType);

  switch(versionType) {
    case 'MAJOR':
      let re = /(?<![\.\d])\d+/;
      const majorNumber = semanticVersion.match(re);
      console.log(majorNumber);
      // semanticVersion = ;
      break;
    case 'MINOR':
      // semanticVersion = ;
      break;
    case 'PATCH':
      break;
    default:
      // semanticVersion = ;
  }

  //   core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}