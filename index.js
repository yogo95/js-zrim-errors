
exports.BaseError = module.exports.BaseError = require("./lib/index").BaseError;
exports.BaseTypeError = module.exports.BaseTypeError = require("./lib/index").BaseTypeError;
exports.GenericBaseErrorTemplate = module.exports.GenericBaseErrorTemplate = require("./lib/index").GenericBaseErrorTemplate;

exports.common = module.exports.common = require('./lib/common-errors');
exports.security = module.exports.security = require('./lib/security-errors');
exports.remote = module.exports.remote = require('./lib/remote-errors');
