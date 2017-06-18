'use strict';

Feature('Basic eth ');

Scenario('if page loads', (I) => {
  I.amOnPage('https://wallet.ethereum.org');
  I.seeElement('.dapp-container');
  I.see('Accounts Overview');
  // I.click('Contracts');
  I.amOnPage('https://wallet.ethereum.org/contracts');
  I.see('BASIC ETH 2FCB');
  I.click('BASIC ETH 2FCB');
  I.see('Pick A Function');
  I.selectOption('InvokeName', 'Invoke Name');
  I.click('Invoke Name');
  I.fillField('elements_input_bytes', '0x5d0fd27052ceda738061a077af2944f363718f0a000000000000000000000000');
  I.click('EXECUTE');
  I.see('Enter password to confirm the transaction');
  I.fillField('elements_input_password', 'test123');

  I.see('READ FROM CONTRACT');
  I.see('Get callers');
  I.see('Last caller');
  I.see('0x5d0fd27052ceda738061a077af2944f363718f0a000000000000000000000000');
});
