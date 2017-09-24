const BaseError = require("./base-error").BaseError;

/**
 * @description Tells when something is related to a security issue
 * @constructor
 */
function SecurityError() {
  return SecurityError.prototype._construct.apply(this, arguments);
}

BaseError.extend(SecurityError);
exports.SecurityError = module.exports.SecurityError = SecurityError;

/**
 * @description The authorization previously given expired
 * @constructor
 */
function AuthorizationExpiredError() {
  return AuthorizationExpiredError.prototype._construct.apply(this, arguments);
}

SecurityError.extend(AuthorizationExpiredError);
exports.AuthorizationExpiredError = module.exports.AuthorizationExpiredError = AuthorizationExpiredError;

/**
 * @description Authentication required
 * @constructor
 */
function AuthenticationRequiredError() {
  return AuthenticationRequiredError.prototype._construct.apply(this, arguments);
}

SecurityError.extend(AuthenticationRequiredError);
exports.AuthenticationRequiredError = module.exports.AuthenticationRequiredError = AuthenticationRequiredError;

/**
 * @description Access forbidden
 * @constructor
 */
function AccessForbiddenError() {
  return AccessForbiddenError.prototype._construct.apply(this, arguments);
}

SecurityError.extend(AccessForbiddenError);
exports.AccessForbiddenError = module.exports.AccessForbiddenError = AccessForbiddenError;
