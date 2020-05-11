import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  render() {
  
    return (
      <div className={'row ' + this.props.className}>
          {this.props.children}
       </div>
    );
  }
}

export default Row;