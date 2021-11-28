import React, {Component} from "react";
import './PageButton.css';

export default class PageButton extends Component {
    constructor(props) {
        super(props);
        this.setNext = this.setNext.bind(this);
        this.setUp = this.setUp.bind(this);
        this.state = {
            num: 0,
            pageNum: this.props.current
        }
    }

    setNext() {
        if (this.state.pageNum < this.props.totalPage - 1) {
            this.setState({
                num: this.state.num + this.props.pageSize,
                pageNum : this.state.pageNum + 1
            }, function() {
                this.props.pageNext(this.state.pageNum)
            })
        }
    }

    setUp() {
        if (this.state.pageNum > 0) {
            this.setState({
                num: this.state.num - this.props.pageSize,
                pageNum: this.state.pageNum - 1
            }, function() {
                this.props.pageNext(this.state.pageNum)
            })
        }
    }

    render() {
        return (
            <div className="change_page">
                <span id="prev" onClick={this.setUp}>Prev</span>
                <span id="page_text">{this.state.pageNum}/{this.props.totalPage - 1}</span>
                <span id="next" onClick={this.setNext}>Next</span>
            </div>
        )
    }
}