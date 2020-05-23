import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./count.css";


class Count extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="count">
          <p className="count-gray">您选择了 <em className="orange">{this.props.choose.chooseBeforeNumbers}</em> 个前区号码， <em className="purple">{this.props.choose.chooseAfterNumbers}</em> 个后区号码，共 <em className="red">{this.props.choose.count}</em> 注，共 <em className="red">{this.props.choose.count==0?'0.00':this.numFormat(this.props.choose.count*2)}</em> 元</p>
       </div>
    );
  }

  numFormat(num) {
    let f = Number(num).toFixed(2)
    var c = (f.toString().indexOf ('.') !== -1) ? f.toLocaleString() : f.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return c;
  }
}

export default Count;