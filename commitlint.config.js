/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // El historial de este repo usa asuntos algo más largos que el default de 72.
    'header-max-length': [2, 'always', 100],
  },
};
