const GenericBaseErrorTemplate = require('./generic-base-error-template').GenericBaseErrorTemplate,
  util = require('util');

/**
 * Generic base error. Has more information than the default Javascript Error
 * @implements {GenericBaseErrorTpl}
 * @constructor
 */
function BaseError() {
  return BaseError.prototype._construct.apply(this, arguments);
}

util.inherits(BaseError, Error);
GenericBaseErrorTemplate.makeGenericError(BaseError);

exports.BaseError = module.exports.BaseError = BaseError;
