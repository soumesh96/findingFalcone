import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <h2>Some Error Spotted here!</h2>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
};

export default ErrorBoundary;
