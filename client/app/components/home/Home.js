import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    const { isAuthenticated } = this.props;

    return (
        <div>
          {!isAuthenticated &&
          <div>Welcome to our user management platform</div>
          }

          {isAuthenticated &&
          <div>Welcome (insert name here)  to our user management platform</div>
          }
        </div>
    )
  }
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {

  const { authenticate } = state;
  const { isAuthenticated } = authenticate;

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Home)