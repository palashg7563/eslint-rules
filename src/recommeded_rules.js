/**
 * @author palashg7563
 */
const { Linter } = require('eslint');
const { getRules } = require('./rules');

/**
 * @returns the array eslintlint config rules
 */
const configRules = function config() {
  const linter = new Linter();
  return [...linter.getRules().keys()];
};

/**
 * @returns the array of recommeded rules
 */
const rules = async function rules() {
  try {
    const res = await getRules();
    const rule = JSON.parse(res);
    return Object.keys(rule.rules);
  } catch (error) {
    return 'Fail to parse the rule';
  }
};

/**
 * @returns the array of the missing rules in project
 */
module.exports.recommendedRules = async function recommendedRules() {
  try {
    const config = await configRules();
    const rule = await rules();
    return rule.filter(e => config.indexOf(e) === -1);
  } catch (error) {
    return 'Fail to get the uncommon rule';
  }
};
