import React from 'react'
import './css/EditAssignment.css'
import deleteIcon from '../resources/delete.png'
import { db } from '../API'

class EditAssignment extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleDelete(assignment) {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            await db.endpoints.Assignments.delete(assignment)
            window.location.reload(false)
        }
    }

    async handleSubmit() {
        await db.endpoints.Assignments.patch(this.props.assignmentData, {
            "name": this.assignmentName.value,
            "description": this.description.value
        })

        window.location.reload(false)
    }

    render() {
        return (
            <div className='edit-assignment-dialog'>
                <div>
                    <input
                        className='edit-assignment-title'
                        type="text"
                        defaultValue={ this.props.assignmentData.name }
                        ref={myinput => (this.assignmentName = myinput)}
                    />
                    <img
                            className="delete-assignment"
                            src={deleteIcon} alt="Delete Icon"
                            onClick={() => {this.handleDelete(this.props.assignmentData)}}
                    />
                </div>
                <div >
                    <textarea
                        className='edit-assignment-description'
                        type="text"
                        cols="75"
                        defaultValue={ this.props.assignmentData.description }
                        ref={myinput => (this.description = myinput)}
                    />
                </div>
                <div className='add-problems'>
                    + Add a problem
                </div>
                <div className='standard-button save' onClick={this.handleSubmit}>
                    Save
                </div>
                <div className='standard-button cancel' onClick={ () => {window.location.reload(false)} }>
                    Cancel
                </div>
            </div>
        );
    }
}

export default EditAssignment;