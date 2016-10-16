var shell = require('shelljs');
var publishUtils = require('./utils');
var path = require('path');
var packageJson = require(path.resolve('./package.json'));

var OUTPUT_DIR = 'sb-build';

// get GIT url
console.log('=> Getting the git remote URL');
var GIT_URL = publishUtils.exec('git config --get remote.origin.url');
if (!GIT_URL) {
  console.log('This project is not configured with a remote git repo');
  process.exit(-1);
}

// clear and re-create the out directory
shell.rm('-rf', OUTPUT_DIR);
shell.mkdir(OUTPUT_DIR);

// run our compile script
console.log('=> Building SB');
publishUtils.exec('npm run sb-build');


// go to the out directory and create a *new* Git repo
shell.cd(OUTPUT_DIR);
publishUtils.exec('git init');

// inside this git repo we'll pretend to be a new user
publishUtils.exec('git config user.name "GH Pages Bot"');
publishUtils.exec('git config user.email "hello@ghbot.com"');

// The first and only commit to this new Git repo contains all the
// files present with the commit message "Deploy to GitHub Pages".
publishUtils.exec('git add .');
publishUtils.exec('git commit -m "Deploy SB to GitHub Pages"');

// Force push from the current repo's master branch to the remote
// repo's gh-pages branch. (All previous history on the gh-pages branch
// will be lost, since we are overwriting it.) We redirect any output to
// /dev/null to hide any sensitive credential data that might otherwise be exposed.
console.log('=> Deploying SB...');
publishUtils.exec('git push --force --quiet ' + GIT_URL + ' master:gh-pages')
shell.cd('..');
shell.rm('-rf', OUTPUT_DIR);

console.log();
console.log('=> SB deployed to: ' + publishUtils.getGHPagesUrl(GIT_URL));