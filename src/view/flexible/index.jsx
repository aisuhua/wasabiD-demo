import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

class Flexible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    
  }

  render() {
    return (
        <div className="box-wrapper">
            <div className="title">
              下次项目发布：2016.11.31 13:00
            </div>

            <div className="box">
              <div className="row row1">
                <div className="item item1">
                  月月赚: 16112331
                </div>
                <div className="item item2">剩余可投：<span className="money">248,000</span>元</div>
              </div>
              <div className="row row2">
                <div className="item item1">
                  <div className="inner-row inner-row1">
                    <div className="inner-item inner-item1"><span className="money">14.2%</span></div>
                    <div className="inner-item inner-item2">12个月</div>
                  </div>
                  <div className="inner-row inner-row2">
                    <div className="inner-item inner-item1">往期年化收益率</div>
                    <div className="inner-item inner-item2">期限</div>
                  </div>
                </div>
                <div className="item item2">
                  <div className="circle">80%</div>
                </div>
              </div>
            </div>

            <div className="box">
            <div className="row row1">
              <div className="item item1">
                月月赚: 16112331
              </div>
              <div className="item item2">剩余可投：<span className="money">248,000</span>元</div>
            </div>
            <div className="row row2">
              <div className="item item1">
                <div className="inner-row inner-row1">
                  <div className="inner-item inner-item1"><span className="money">14.2%</span></div>
                  <div className="inner-item inner-item2">12个月</div>
                </div>
                <div className="inner-row inner-row2">
                  <div className="inner-item inner-item1">往期年化收益率</div>
                  <div className="inner-item inner-item2">期限</div>
                </div>
              </div>
              <div className="item item2">
                <div className="circle">80%</div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="row row1">
              <div className="item item1">
                月月赚: 16112331
              </div>
              <div className="item item2">剩余可投：<span className="money">248,000</span>元</div>
            </div>
            <div className="row row2">
              <div className="item item1">
                <div className="inner-row inner-row1">
                  <div className="inner-item inner-item1"><span className="money">14.2%</span></div>
                  <div className="inner-item inner-item2">12个月</div>
                </div>
                <div className="inner-row inner-row2">
                  <div className="inner-item inner-item1">往期年化收益率</div>
                  <div className="inner-item inner-item2">期限</div>
                </div>
              </div>
              <div className="item item2">
                <div className="circle">80%</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Flexible />, document.getElementById('root'));
