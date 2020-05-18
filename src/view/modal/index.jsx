import React from 'react';
import "./index.css"
import ReactDOM from "react-dom";
import Modal from "./modal";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            yourname: ''
        };

        this.showModal = this.showModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }

    componentDidMount() {

    }

    showModal() {
        this.state.yourname = '';
        this.setState({ show: true });
    }

    handleChange(e) {
        this.setState({ yourname: e.target.value });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleOk() {
        alert('您输入的是：“'+this.state.yourname +'”');
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="wrapper">
                <button id="showBtn" onClick={this.showModal}>打开对话框</button>

                <Modal show={this.state.show} yourname={this.state.yourname} handelClose={this.handleClose} handleOk={this.handleOk}>
                    <label htmlFor="yourname">
                        用户名：<input type="text" id="yourname" onChange={this.handleChange} value={this.state.yourname}/>
                    </label>
                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
