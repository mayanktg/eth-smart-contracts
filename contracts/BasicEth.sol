pragma solidity ^0.4.4;

contract BasicEth {
  // details of the caller
  bytes32 public  caller;
  // Address of all the callers
  mapping(address => bytes32)  addresses;
  // Event invoked when InvokeName() is called.
  event InvokeNameEvent(bytes32 indexed name);

  function BasicEth() {
    // Initialize caller with null (noob, didn't know how to init with null)
    caller = 'null';
  }

  // Adds the address to the mapping -> Sets last caller
  function InvokeName(bytes32 name) {
    addresses[msg.sender] = name;
    caller = name;
    InvokeNameEvent(name);
  }

  // Takes last caller and current caller name as arg and returns last caller
  // and caller name if present.
  function getCallers() constant returns ( bytes32 lastCaller,
                                           bytes32 callerName ) {
    lastCaller = caller;
    callerName = addresses[msg.sender];
    return (lastCaller, callerName);
  }
}
