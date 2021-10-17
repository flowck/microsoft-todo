module.exports = function (on, config) {
  require("@cypress/code-coverage/task")(on, config);

  return config;
};
