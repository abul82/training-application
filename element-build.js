const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        'dist/training-application/runtime.js',
        'dist/training-application/polyfills.js',
        'dist/training-application/main.js',
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/framework-vote.js');

    await fs.copyFile('dist/training-application/styles.css', 'elements/styles.css')

    // await fs.copy('dist/training-application/assets/', 'elements/assets/' )
})()