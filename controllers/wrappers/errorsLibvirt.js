
let virErrorNumber = [
    {"message": "OK?", "httpCode" : 200},
    {"message" : "internal error", "httpCode": 500},
    {"message" : "memory allocation failure", "httpCode": 500},
    {"message" : "no support for this function", "httpCode": 500},
    {"message" : "could not resolve hostname", "httpCode": 500},
    {"message" : "can't connect to hypervisor", "httpCode": 500},
    {"message" : "invalid connection object", "httpCode": 500},
    {"message" : "invalid domain object", "httpCode": 500},
    {"message" : "invalid function argument", "httpCode": 500},
    {"message" : "a command to hypervisor failed", "httpCode": 500},  //duplicated domain??
    {"message" : "a HTTP GET command to failed", "httpCode": 500},
    {"message" : "a HTTP POST command to failed", "httpCode": 500},
    {"message" : "unexpected HTTP error code", "httpCode": 500},
    {"message" : "failure to serialize an S-Expr", "httpCode": 500},
    {"message" : "could not open Xen hypervisor control", "httpCode": 500},
    {"message" : "failure doing an hypervisor call", "httpCode": 500},
    {"message" : "unknown OS type", "httpCode": 500},
    {"message" : "missing kernel information", "httpCode": 500},
    {"message" : "missing root device information", "httpCode": 500},
    {"message" : "missing source device information", "httpCode": 500},
    {"message" : "missing target device information", "httpCode": 500},
    {"message" : "missing domain name information", "httpCode": 500},
    {"message" : "missing domain OS information", "httpCode": 500},
    {"message" : "missing domain devices information", "httpCode": 500},
    {"message" : "could not open Xen Store control", "httpCode": 500},
    {"message" : "too many drivers registered", "httpCode": 500},
    {"message" : "not supported by the drivers (DEPRECATED)", "httpCode": 500},
    {"message" : "an XML description is not well formed or broken", "httpCode": 400},
    {"message" : "the domain already exist", "httpCode": 409},
    {"message" : "operation forbidden on read-only connections", "httpCode": 500},
    {"message" : "failed to open a conf file", "httpCode": 500},
    {"message" : "failed to read a conf file", "httpCode": 500},
    {"message" : "failed to parse a conf file", "httpCode": 500},
    {"message" : "failed to parse the syntax of a conf file", "httpCode": 500},
    {"message" : "failed to write a conf file", "httpCode": 500},
    {"message" : "detail of an XML error", "httpCode": 500},
    {"message" : "invalid network object", "httpCode": 500},
    {"message" : "the network already exist", "httpCode": 409},
    {"message" : "general system call failure", "httpCode": 500},
    {"message" : "some sort of RPC error", "httpCode": 500},
    {"message" : "error from a GNUTLS call", "httpCode": 500},
    {"message" : "failed to start network", "httpCode": 500},
    {"message" : "domain not found or unexpectedly disappeared", "httpCode": 404},
    {"message" : "network not found", "httpCode": 404},
    {"message" : "invalid MAC address", "httpCode": 500},
    {"message" : "authentication failed", "httpCode": 500},
    {"message" : "invalid storage pool object", "httpCode": 500},
    {"message" : "invalid storage vol object", "httpCode": 500},
    {"message" : "failed to start storage", "httpCode": 500},
    {"message" : "storage pool not found", "httpCode": 404},
    {"message" : "storage volume not found", "httpCode": 404},
    {"message" : "failed to start node driver", "httpCode": 500},
    {"message" : "invalid node device object", "httpCode": 500},
    {"message" : "node device not found", "httpCode": 404},
    {"message" : "security model not found", "httpCode": 404},
    {"message" : "operation is not applicable at this time", "httpCode": 500},
    {"message" : "failed to start interface driver", "httpCode": 500},
    {"message" : "interface driver not running", "httpCode": 500},
    {"message" : "invalid interface object", "httpCode": 500},
    {"message" : "more than one matching interface found", "httpCode": 500},
    {"message" : "failed to start nwfilter driver", "httpCode": 500},
    {"message" : "invalid nwfilter object", "httpCode": 500},
    {"message" : "nw filter pool not found", "httpCode": 404},
    {"message" : "nw filter pool not found", "httpCode": 404},
    {"message" : "failed to start secret storage", "httpCode": 500},
    {"message" : "invalid secret", "httpCode": 500},
    {"message" : "secret not found", "httpCode": 404},
    {"message" : "unsupported configuration construct", "httpCode": 500},
    {"message" : "timeout occurred during operation", "httpCode": 500},
    {"message" : "a migration worked, but making the VM persist on the dest host failed", "httpCode": 500},
    {"message" : "a synchronous hook script failed", "httpCode": 500},
    {"message" : "invalid domain snapshot", "httpCode": 500},
    {"message" : "domain snapshot not found", "httpCode": 404},
    {"message" : "stream pointer not valid", "httpCode": 500},
    {"message" : "valid API use but unsupported by the given driver", "httpCode": 500},
    {"message" : "storage pool probe failed", "httpCode": 500},
    {"message" : "storage pool already built", "httpCode": 500},
    {"message" : "force was not requested for a risky domain snapshot revert", "httpCode": 500},
    {"message" : "operation on a domain was canceled/aborted by user", "httpCode": 500},
    {"message" : "authentication cancelled", "httpCode": 500},
    {"message" : "The metadata is not present", "httpCode": 500},
    {"message" : "Migration is not safe", "httpCode": 500},
    {"message" : "integer overflow", "httpCode": 500},
    {"message" : "action prevented by block copy job", "httpCode": 500},
    {"message" : "The requested operation is not supported", "httpCode": 500},
    {"message" : "error in ssh transport driver", "httpCode": 500},
    {"message" : "guest agent is unresponsive, not running or not usable", "httpCode": 500},
    {"message" : "resource is already in use", "httpCode": 500},
    {"message" : "operation on the object/resource was denied", "httpCode": 500},
    {"message" : "error from a dbus service", "httpCode": 500},
    {"message" : "the storage vol already exists", "httpCode": 409},
    {"message" : "given CPU is incompatible with host CP", "httpCode": 500},
    {"message" : "XML document doesn't validate against schema", "httpCode": 500},
    {"message" : "Finish API succeeded but it is expected to return NULL", "httpCode": 500},
    {"message" : "authentication unavailable", "httpCode": 500},
    {"message" : "Server was not found", "httpCode": 404},
    {"message" : "Client was not found", "httpCode": 404},
    {"message" : "guest agent replies with wrong id to guest-sync command (DEPRECATED", "httpCode": 500},
    {"message" : "error in libssh transport driver", "httpCode": 500},
    {"message" : "fail to find the desired device", "httpCode": 500}

];

function parseError(err){
    let error = virErrorNumber[err.code];
    return {
        "code": error.httpCode,
        "message": error.message.charAt(0).toUpperCase() + error.message.slice(1)
    };
}

function setErrorRes(res, err) {
    res.status(err.code).send({"message" : err.message});
}

function setError(code, message) {
    return {
        "code": code,
        "message": message
    };
}

module.exports = {
    parseError,
    setErrorRes,
    setError
};