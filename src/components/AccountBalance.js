// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div style={{marginLeft: 190}}>
        Balance: {this.props.accountBalance}
      </div>
    );
  }
}

export default AccountBalance;