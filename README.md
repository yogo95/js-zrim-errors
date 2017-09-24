# JavaScript Zrim Errors

## Introduction

Contains some errors.

## Template

The class provide a template to extend a base error. 
The template is used to make the inheritance from the default javascript error.

After applying the template to your error function, your class will have the following 
properties and methods:
- Properties:
  - name :  The function name
  - errorNumber : The error number
  - cause : The cause error (Like in Java)
- Methods:
  - getMessage() : Returns the error message
  - getDefaultMessage() : Returns the default error message, returned in case the message is not defined
  - getCause() : Returns the cause
  - _initFromConstructor(options) : Called by the constructor to initialize you error
  - extend(cls) [static] : Extends the error

## BaseError

Extends the javascript base error **Error**.

## BaseTypeError

Extends the javascript base error **TypeError**.

## Common errors

Available from:
```javascript
require('js-zrim-errors').common;
```

Error available:
- IllegalArgumentError : Inform a given argument is invalid
- ConflictDetectedError : A conflict has been detected
- IllegalStateError : The current state do not permit to do an action
- NotReadyError : Inherits from IllegalStateError and inform the state is not ready
- NotFoundError : Element not found
- NotImplementedError : There is no implementation for the action
- OperationNotPermittedError : The operation is not permitted
- RequirementsNotSatisfiedError : Requirements are not satisfied
- TimedOutError : Action timed out

## Remote errors

Available from:
```javascript
require('js-zrim-errors').remote;
```

Error available:
- RemoteError : Main error for remote error
- RemoteServiceError : The remote service is not available
- RemoteServiceError : The remote service returned error

## Security errors

Available from:
```javascript
require('js-zrim-errors').security;
```

Error available:
- SecurityError : Main security error
- AuthorizationExpiredError : The authorization expired
- AuthenticationRequiredError : An authentication is required
- AccessForbiddenError : The access is forbidden
