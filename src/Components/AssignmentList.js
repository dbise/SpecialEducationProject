import React from 'react'
import ReactDOM from 'react-dom'
import { db } from '../API'
import './css/AssignmentList.css'

class AssignmentList extends React.Component {
    constructor(props) {
        super(props);
        this.assignmentList = []
    }

    componentDidMount() {
        db.endpoints.Assignments.getAll().then(
            assignments => {
                this.assignmentList = assignments.data;
                this.assignmentsHtml = this.renderList();
            }
        )
    }

    async renderList() {

        const body = this.assignmentList.map((assignment, index) => {
            const {id, name, description} = assignment
            return (
                <div key={id} className="assignment-list-item" onClick={ () => {alert("Individual functionality coming soon")} }>
                    <div className="assignment-name"> { name } </div>
                    <div className="assignment-description"> { description } </div>
                </div>
                
            )
        })
        ReactDOM.render((
            <div id="assignment-list">{body}</div>
        ), document.querySelector("#assignment-list"));
    }
    render() {
        return (
            <div className="assignment-list">
                <div id="assignment-list"></div>
            </div>
        );
    }
}

export default AssignmentList;