import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


class Index extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  componentDidMount(){
    console.log("Index")
  }

  render() {
    return (
      <div className="global">
          
       </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));