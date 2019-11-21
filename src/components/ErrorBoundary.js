import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>
                UPS! Something went wrong :(
                We are working on it 
            </h2>
          </div>
        );
      }
      return this.props.children;
    }  
  }

export default ErrorBoundary;