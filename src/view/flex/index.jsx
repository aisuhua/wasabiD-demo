import React from 'react';
import ReactDOM from 'react-dom';
import Box from "./box"
import Row from "./row"
import Item from "./item"
import "./index.css"

class FlexBox extends React.Component {
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
            <Box className="one">
                <Row className="row1">
                    <Item>1</Item>
                </Row>
            </Box>

            <Box className="two">
                <Row className="row1">
                    <Item>1</Item>
                </Row>
                <Row className="row2">
                    <Item>2</Item>
                </Row>
            </Box>

            <Box className="three">
                <Row className="row1">
                    <Item>1</Item>
                </Row>
                <Row className="row2">
                    <Item>2</Item>
                </Row>
                <Row className="row3">
                    <Item>3</Item>
                </Row>
            </Box>

            <Box className="four">
                <Row className="row1">
                    <Item>1</Item>
                    <Item>2</Item>
                </Row>
                <Row className="row2">
                    <Item>3</Item>
                    <Item>4</Item>
                </Row>
            </Box>

            <Box className="five">
                <Row className="row1">
                    <Item>1</Item>
                    <Item>2</Item>
                </Row>
                <Row className="row2">
                    <Item>3</Item>
                </Row>
                <Row className="row3">
                    <Item>4</Item>
                    <Item>5</Item>
                </Row>
            </Box>

            <Box className="six">
                <Row className="row1">
                    <Item>1</Item>
                    <Item>2</Item>
                </Row>
                <Row className="row2">
                    <Item>3</Item>
                    <Item>4</Item>
                </Row>
                <Row className="row3">
                    <Item>5</Item>
                    <Item>6</Item>
                </Row>
            </Box>
        </div>

    );
  }
}

ReactDOM.render(<FlexBox />, document.getElementById('root'));
