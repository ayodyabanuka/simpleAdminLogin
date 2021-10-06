import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Admin
import LoginAdminPage from '../pages/LoginAdminPage/LoginAdminPage';
class index extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* Admin routes */}
          <Route path='/adminlogin' exact component={LoginAdminPage} />
        </Router>
      </div>
    );
  }
}

export default index;
