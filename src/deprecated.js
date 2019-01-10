/**
 * @author palashg7563
 */
const { CLIEngine } = require('eslint');

const cli = new CLIEngine({
  envs: ['node'],
  useEslintrc: true,
});

/**
 * filter the rules which are deprecated
 */
function depecated() {
  return [...cli.getRules()]
    .filter(e => e[1].meta.deprecated === true)
    .map(e => e[0]);
}

module.exports = depecated;
