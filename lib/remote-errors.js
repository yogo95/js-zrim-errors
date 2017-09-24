const BaseError = require("./base-error").BaseError;

/**
 * @description Tells when something is related to a remote issue
 * @constructor
 */
function RemoteError() {
  return RemoteError.prototype._construct.apply(this, arguments);
}

BaseError.extend(RemoteError);
exports.RemoteError = module.exports.RemoteError = RemoteError;

/**
 * @description Tells when something is related to a remote service issue
 * @constructor
 */
function RemoteServiceError() {
  return RemoteServiceError.prototype._construct.apply(this, arguments);
}

RemoteError.extend(RemoteServiceError);
exports.RemoteServiceError = module.exports.RemoteServiceError = RemoteServiceError;

/**
 * @description Sued to indicate that the remote service is unavailable
 * @constructor
 */
function UnavailableRemoteServiceError() {
  return UnavailableRemoteServiceError.prototype._construct.apply(this, arguments);
}

RemoteServiceError.extend(UnavailableRemoteServiceError);
exports.UnavailableRemoteServiceError = module.exports.UnavailableRemoteServiceError = UnavailableRemoteServiceError;
