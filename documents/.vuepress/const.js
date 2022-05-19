const fs = require('fs');
const _ = require('lodash');
function getFiles(name) {
  const files = fs.readdirSync(`./documents/${name}`);
  return _.without(
    _.map(files, (f) => {
      if (f !== 'images') return `${name}/${f}`;
    }),
    undefined
  );
}

exports.MSAList = getFiles('MSA');
exports.ETCList = getFiles('ETC');
exports.vscodeList = getFiles('vscode');
