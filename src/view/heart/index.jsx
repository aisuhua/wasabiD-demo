import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  render() {
    return (
        <div className="heart">
          <div className="left"></div>
          <div className="right"></div>
        </div>
    );
  }
}

ReactDOM.render(<Heart />, document.getElementById('root'));
