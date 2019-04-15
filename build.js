const Bundler = require('parcel-bundler');
const { remove } = require('fs-extra');
const { name } = require('./package.json');

const dirName = name;

// Bundler options
const options = {
  cache: false,
  detailedReport: false,
  hmr: false,
  minify: true,
  outDir: `./dist/${dirName}`,
  publicUrl: `./includes/${dirName}`,
  sourceMaps: false,
  watch: false,
};

async function runBundler() {
  const bundler = new Bundler('./src/*.html', options);
  await bundler.bundle();
}

async function build() {
  await remove('./dist');
  await runBundler();
  process.exit();
}

build();
