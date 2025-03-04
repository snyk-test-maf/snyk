const abbrev = require('abbrev');

// Wrapper for Commonjs compatibility
async function callModule(mod, args) {
  const resolvedModule = await mod;
  return (resolvedModule.default || resolvedModule)(...args);
}

const commands = {
  auth: async (...args) => callModule(import('./auth'), args),
  config: async (...args) => callModule(import('./config'), args),
  help: async (...args) => callModule(import('./help'), args),
  ignore: async (...args) => callModule(import('./ignore'), args),
  monitor: async (...args) => callModule(import('./monitor'), args),
  fix: async (...args) => callModule(import('./fix'), args),
  policy: async (...args) => callModule(import('./policy'), args),
  protect: async (...args) => callModule(import('./protect'), args),
  test: async (...args) => callModule(import('./test'), args),
  version: async (...args) => callModule(import('./version'), args),
  wizard: async (...args) => callModule(import('./protect/wizard'), args),
  woof: async (...args) => callModule(import('./woof'), args),
  log4shell: async (...args) => callModule(import('./log4shell'), args),
};

commands.aliases = abbrev(Object.keys(commands));
commands.aliases.t = 'test';

module.exports = commands;
