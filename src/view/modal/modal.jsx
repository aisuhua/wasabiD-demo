import React from 'react';
import "./index.css"

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cursor: 'default',
            moveCursor: 'default',
            moveFlag: false,
            initX: 0,
            initY: 0,
            left: '0px',
            top: '0px',
        };

        this.handleOk = this.handleOk.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('mousemove', this.handleDrag);
        document.addEventListener('mouseup', this.handleDragEnd);
    }

    handleDragStart(e) {
        if (e.target.className !== 'modal-header') {
            return;
        }

        // 必须是鼠标左键点击
        if (e.nativeEvent.buttons !== 1) {
            return;
        }

        this.setState({
            moveCursor: 'move',
            moveFlag: true,
            initX: e.nativeEvent.clientX,
            initY: e.nativeEvent.clientY
        });
    }

    handleDrag(e) {
        if (!this.state.moveFlag) {
            return;
        }

        let currentX = e.clientX;
        let currentY = e.clientY;

        let distX = currentX - this.state.initX;
        let distY = currentY - this.state.initY;

        let left = (parseInt(this.state.left) + distX) + 'px';
        let top = (parseInt(this.state.top) + distY) + 'px';

        this.setState({
            initX: currentX,
            initY: currentY,
            left: left,
            top: top
        });
    }

    handleDragEnd() {
        this.setState({
            moveCursor: 'default',
            moveFlag: false
        });
    }

    handleMouseMove(e) {
        let cursor = 'default';

        if (e.target.className === 'modal-content') {
            e = e.nativeEvent;

            let style = document.defaultView.getComputedStyle(e.target);
            let borderWidth = parseInt(style.borderWidth);
            let boxWidth = parseInt(style.width);
            let boxHeight = parseInt(style.height);

            if (e.offsetX + 10 > boxWidth && e.offsetY + 10 > boxHeight) {
                cursor = 'se-resize';
            } else if (e.offsetX < borderWidth || e.offsetX > boxWidth) {
                cursor = 'col-resize';
            } else if (e.offsetY < borderWidth || e.offsetY > boxHeight) {
                cursor = 'row-resize';
            }
        }

        this.setState({ cursor: cursor });
    }

    handleClickOutside(e) {
        if (e.target.className === 'modal-dialog') {
            this.props.handelClose(e);
        }
    }

    handleOk(e) {
        this.props.handleOk(e);
    }

    handleClose(e) {
        this.setState({ left: '0px', top: '0px' })
        this.props.handelClose(e);
    }
    render() {
        return (
            <div id="myModal" className="modal" style={this.props.show ? { display: 'block' } : { display: 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content" onMouseMove={this.handleMouseMove} style={{ cursor: this.state.cursor, left: this.state.left, top: this.state.top }}>
                        <div className="modal-header" onMouseDown={this.handleDragStart} style={{ cursor: this.state.moveCursor}}>
                            <span className="close" onClick={this.handleClose}>&times;</span>
                            <h2>信息</h2>
                        </div>

                        <div className="modal-body">
                            {this.props.children}
                        </div>

                        <div className="modal-footer">
                            <button className="ok" disabled={!this.props.yourname} onClick={this.handleOk}>确定</button>
                            <button className="cancel" onClick={this.handleClose}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
