# eth-smart-contracts
It is a codebase where sample Ethereum smart contracts will be maintained.
Please read [this article](https://medium.com/zeppelin-blog/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05) before writing smart contracts.

### Installation
```
$ npm i -g ethereumjs-testrpc
$ testrpc
```

Now in new terminal run

```
$ npm i -g truffle
$ git clone https://github.com/mayanktg/eth-smart-contracts.git
$ cd eth-smart-contracts
$ truffle compile
$ truffle migrate
$ truffle test
```

For acceptance testing
```
$ npm i -g codeceptjs-webdriverio
$ npm i -g nightmare nightmare-upload
$ codeceptjs run --steps
```
