import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "./modal"
import "./index.css"

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="wrapper">
                <button id="showBtn" onClick={this.openModal}>打开对话框</button>
                <Modal show={this.state.show}>

                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
