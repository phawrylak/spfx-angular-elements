const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/spfx-angular-elements/runtime.js',
    './dist/spfx-angular-elements/polyfills.js',
    './dist/spfx-angular-elements/scripts.js',
    './dist/spfx-angular-elements/main.js',
  ];
  await fs.ensureDir('elements');
  await concat(files, 'elements/spfx-angular-elements.js');
  if (await fs.pathExists('./dist/spfx-angular-elements/styles.css')) {
    await fs.copyFile('./dist/spfx-angular-elements/styles.css', 'elements/styles.css');
  }
  if (await fs.pathExists('./dist/spfx-angular-elements/assets/')) {
    await fs.copy('./dist/spfx-angular-elements/assets/', 'elements/assets/');
  }
})()
