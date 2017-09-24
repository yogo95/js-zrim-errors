const BaseTypeError = require("./base-type-error").BaseTypeError,
  BaseError = require('./base-error').BaseError;

/**
 * @description Indicate the argument is invalid
 * @constructor
 */
function IllegalArgumentError() {
  return IllegalArgumentError.prototype._construct.apply(this, arguments);
}

BaseTypeError.extend(IllegalArgumentError);
exports.IllegalArgumentError = module.exports.IllegalArgumentError = IllegalArgumentError;

/**
 * @description A conflict has been detected
 * @constructor
 */
function ConflictDetectedError() {
  return ConflictDetectedError.prototype._construct.apply(this, arguments);
}

BaseError.extend(ConflictDetectedError);
exports.ConflictDetectedError = module.exports.ConflictDetectedError = ConflictDetectedError;

/**
 * @description Tells you the current state is invalid for this request
 * @constructor
 */
function IllegalStateError() {
  return IllegalStateError.prototype._construct.apply(this, arguments);
}

BaseError.extend(IllegalStateError);
exports.IllegalStateError = module.exports.IllegalStateError = IllegalStateError;

/**
 * @description Tells the action cannot be performed because the state is not ready
 * @constructor
 */
function NotReadyError() {
  return NotReadyError.prototype._construct.apply(this, arguments);
}

IllegalStateError.extend(NotReadyError);
exports.NotReadyError = module.exports.NotReadyError = NotReadyError;

/**
 * @description Tells when something is not found
 * @constructor
 */
function NotFoundError() {
  return NotFoundError.prototype._construct.apply(this, arguments);
}

BaseError.extend(NotFoundError);
exports.NotFoundError = module.exports.NotFoundError = NotFoundError;

/**
 * @description Tells you there is not implementation do handle the action
 * @constructor
 */
function NotImplementedError() {
  return NotImplementedError.prototype._construct.apply(this, arguments);
}

BaseError.extend(NotImplementedError);
exports.NotImplementedError = module.exports.NotImplementedError = NotImplementedError;

/**
 * @description Tells the operation is not permitted
 * @constructor
 */
function OperationNotPermittedError() {
  return OperationNotPermittedError.prototype._construct.apply(this, arguments);
}

BaseError.extend(OperationNotPermittedError);
exports.OperationNotPermittedError = module.exports.OperationNotPermittedError = OperationNotPermittedError;

/**
 * @description Requirements not found or invalid
 * @constructor
 */
function RequirementsNotSatisfiedError() {
  return RequirementsNotSatisfiedError.prototype._construct.apply(this, arguments);
}

NotFoundError.extend(RequirementsNotSatisfiedError);
exports.RequirementsNotSatisfiedError = module.exports.RequirementsNotSatisfiedError = RequirementsNotSatisfiedError;

/**
 * @description The time is out.
 * @constructor
 */
function TimedOutError() {
  return TimedOutError.prototype._construct.apply(this, arguments);
}

BaseError.extend(TimedOutError);
exports.TimedOutError = module.exports.TimedOutError = TimedOutError;

