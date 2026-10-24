const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoName = process.argv[2] || '';
const baseHref = repoName ? `/${repoName}/` : '/';

console.log(`Building portfolio for GitHub Pages with base-href: ${baseHref}...`);

execSync(`npx ng build --base-href ${baseHref}`, { stdio: 'inherit' });

const browserDir = path.join(__dirname, '..', 'dist', 'portfolio', 'browser');
const indexPath = path.join(browserDir, 'index.html');
const notFoundPath = path.join(browserDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log(`Successfully generated 404.html for GitHub Pages SPA routing.`);
  // Also create .nojekyll to prevent GitHub Pages from ignoring files starting with underscore
  fs.writeFileSync(path.join(browserDir, '.nojekyll'), '');
  console.log(`Generated .nojekyll in build output.`);
} else {
  console.error(`Error: index.html not found in ${browserDir}`);
  process.exit(1);
}

console.log('GitHub Pages preparation complete!');

