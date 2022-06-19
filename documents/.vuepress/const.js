const fs = require('fs');
const _ = require('lodash');
const sourceDir = './documents';

let total = 0;
function getFiles(name) {
  const files = fs.readdirSync(`${sourceDir}/${name}`);
  return _.without(
    _.map(files, (f) => {
      if (f !== 'images' && !f.includes('.temp')) {
        total++;
        return `${name}/${f}`;
      }
    }),
    undefined
  );
}

function getCategory() {
  return fs
    .readdirSync(sourceDir, {withFileTypes: true})
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((key) => key !== '.vuepress');
}

function makeSideBar() {
  const list = getCategory();
  return list.map((name) => {
    return {
      title: name,
      children: getFiles(name),
    };
  });
}

exports.total = total;
exports.sideBarList = makeSideBar();
