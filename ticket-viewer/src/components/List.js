import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./List.css";

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    goDetail(v) {
        console.log(v)
        // this.props.history.push({pathname: `/detail/${v.id}`, state: {data: v}})
    }
    render() {
        // console.log(this.props)
        const {id, subject, created_at, updated_at, description} = this.props
        var desc = description
        desc = desc.slice(0, 50);
        console.log(desc)
        console.log(description)
        return (
            <li id={id}>
                    <h3>id: {id} {subject}</h3>
                    <div className="icon">
                        <span class="created_time">Created At: {created_at}</span>
                        <span class="updated_time">Updated At: {updated_at}</span>
                    </div>
                    <p>{desc}</p>
                <Link to={{pathname: `/detail/${id}`, state: {id, subject, created_at, updated_at, description}}}>

                    <span className="more" onClick={() => this.goDetail(this.props)}>More</span>
                    </Link>
            </li>
        )
    }
}