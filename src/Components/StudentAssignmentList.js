import React from 'react'
import ReactDOM from 'react-dom'
import { db } from '../API'
import deleteIcon from '../resources/delete.png'
import './css/AssignmentList.css'
import EditAssignment from './EditAssignment'

class AssignmentList extends React.Component {
    constructor(props) {
        super(props);
        this.assignmentList = []
    }

    componentDidMount() {
        db.endpoints.Assignments.getAll().then(
            assignments => {
                console.log(this.props.student.assigned)
                console.log(assignments.data)
                this.assignmentList = assignments.data.filter(a => this.props.student.assigned.includes(a.id));
                console.log(this.assignmentList)

                if (this.assignmentList.length > 0) {
                    this.assignmentsHtml = this.renderList();
                }
                else {
                    ReactDOM.render((
                        <div>
                            <h3>This student has nothing assigned to them!</h3>
                            <div className='cancel' onClick={() => { window.location.reload(false) }}>Back</div>

                        </div>
                    ), document.querySelector("#assignment-list"));
                }
            }
        )
    }

    showEditAssignment(assignment) {
        ReactDOM.render((
            <div>
                <div className='dialog-mask'></div>
                <EditAssignment assignmentData={assignment} />
            </div>

        ), document.querySelector('#assignments-dialog'));
    }

    async handleDelete(assignment) {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            await db.endpoints.Assignments.delete(assignment)
            window.location.reload(false)
        }
    }

    async renderList() {

        const body = this.assignmentList.map((assignment, index) => {
            const { id, name, description } = assignment
            return (
                <div>
                    <img
                        className="delete-assignment"
                        src={deleteIcon} alt="Delete Icon"
                        onClick={() => { this.handleDelete(assignment) }}
                    />
                    <div key={id} className="assignment-list-item" onClick={() => { this.showEditAssignment(assignment) }}>
                        <div className="assignment-name"> {name} </div>
                        <div className="assignment-description"> {description} </div>
                    </div>
                </div>

            )
        })
        ReactDOM.render((
            <div id="assignment-list">{body}
                <div className='cancel' onClick={() => { window.location.reload(false) }}>Back</div>
            </div>

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