const fs = require('fs');
const _ = require('lodash');
function getFiles(name) {
  const files = fs.readdirSync(`./documents/${name}`);
  return _.without(
    _.map(files, (f) => {
      if (f !== 'images' && !f.includes('.temp')) return `${name}/${f}`;
    }),
    undefined
  );
}

exports.GeneralList = getFiles('General');
exports.MSAList = getFiles('MSA');
exports.ETCList = getFiles('ETC');
exports.vscodeList = getFiles('vscode');
exports.PTList = getFiles('PT');
exports.PlatformList = getFiles('Platform');
exports.TheoryList = getFiles('Theory');
