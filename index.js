/* eslint-disable no-console */
const deperecated = require('./src/deprecated');
const { recommendedRules } = require('./src/recommeded_rules');

console.log(deperecated());

recommendedRules()
  .then(e => console.log(e))
  .catch(e => console.log(e));
