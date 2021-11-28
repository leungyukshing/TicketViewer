import { Component } from "react";
import './Detail.css';

export default class Detail extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.location)
        
    }
    render() {
        const {id, subject, created_at, updated_at, description} = this.props.location.state;
        return (
            <div class="detail">
                <h3>id: {id} {subject}</h3>
                    <div className="icon">
                        <span class="created_time">Created At: {created_at}</span>
                        <span class="updated_time">Updated At: {updated_at}</span>
                    </div>
                <p>{description}</p>
            </div>
        )
    }
}