import React, {Component} from "react";
import List from "./List";
import PageButton from "./PageButton";
import axios from 'axios'

class ListBox extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.pageNext = this.pageNext.bind(this)
        this.setPage = this.setPage.bind(this)
        this.state = {
            current: 0,
            pageSize: 25,
            totalPage: 1,
            goValue: 0,
            tickets: [],
            hasError: false,
            totalNum: 0
        }
    }

    componentWillMount() {
        console.log("request")
        // get total page
        axios({
            method: 'get',
            url: 'http://localhost:8080/getTicketsCount'
        }).then(res => {
            console.log(res)
            let ticketTotal = res.data.count.value;
            this.setState({totalPage: Math.floor(ticketTotal / 25) + 1, totalNum: ticketTotal})
            axios({
                method: 'get',
                url: 'http://localhost:8080/getTickets',
            }).then(res => {
                console.log("hello")
                console.log(res)
                this.setState({tickets: res.data.tickets})
            }).catch(err => {
                console.log(err)
                this.setState({hasError: true});
            })
        }).catch(err => {
            console.log(err)
            this.setState({hasError: true})
        })
        
        console.log("finish")
        this.setState({totalPage: 2})
        this.pageNext(this.state.goValue)
    }
    setPage(num) {
        axios({
            method: 'get',
            url: 'http://localhost:8080/getTickets',
            params: {
                page: num + 1, // page num start from 1
            }
        }).then(res => {
            this.setState({tickets: res.data.tickets})
        }).catch(err => {
            console.log(err)
            this.setState({hasError: true})
        })
    }

    pageNext(num) {
        this.setPage(num)
    }


    render() {
        return (
            <div className="main">
                <div className="top_bar"></div>
                <div className="lists">
                    <ul>
                       {this.state.tickets.map(function(cont) {                           
                           //console.log(cont)
                           return <List {...cont}/>
                       })}
                    </ul>

                    <PageButton {...this.state } pageNext={this.pageNext}/>
                    <span>Total: {this.state.totalNum}</span>
                </div>
            </div>
        )
    }
}

export default ListBox;