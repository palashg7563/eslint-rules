/**
 * @author palashg7563
 */
const { exec } = require('child_process');

module.exports.getRules = function getRules() {
  return new Promise((resolve, reject) => {
    exec('eslint --print-config srcFolder', (err, stdout) => {
      if (err) {
        reject(err);
      }
      resolve(stdout);
    });
  });
};
