const BasicEth = artifacts.require('./BasicEth.sol');

// converting the bytes32 to string
// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3toascii
// Name still contained `\0` so explicitly removed.
function byte32ToString(name) {
  return web3.toAscii(name).replace(/\0/g, '');
}

contract('BasicEth', function (accounts) {
  it('should assert true', function () {
    // Reference to the instance
    let basicEth;

    return BasicEth.deployed().then(function (instance) {
        basicEth = instance;
        return basicEth.InvokeName('Mayank Kumar');
      })
      .then(function (contractEvent) {
        console.log(contractEvent);
        assert.equal(contractEvent.logs[0].event, 'InvokeNameEvent', 'Invalid Event name');
        // sends last caller name.
        return basicEth.caller.call();
      })
      .then(function (name) {
        console.log(name);
        console.log(byte32ToString(name));
        // Name is in byte32 format, need to convert it to string.
        assert.equal(byte32ToString(name), 'Mayank Kumar', 'Invalid name');

        // New data
        return basicEth.InvokeName('Maya', { from: accounts[1] });
      })
      .then(function () {
        // send last callers and addresses details.
        return basicEth.getCallers.call();
      })
      .then(function (result) {
        console.log(result);
        const lastCaller = byte32ToString(result[0]);
        const caller = byte32ToString(result[1]);
        assert.equal(lastCaller, 'Maya', 'Incorrect last name');
        assert.equal(caller, 'Mayank Kumar', 'Incorrect name');
      });
  });
});
