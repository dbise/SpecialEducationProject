import React from 'react'
import './css/CreateAssignment.css'
import { db } from '../API'

class CreateAssignment extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit() {
        let user = await db.endpoints.Assignments.getAll();
        await db.endpoints.Assignments.create(user.Assignments, { })
        user = await db.endpoints.Assignments.getAll();
        console.log(user.data)
        let size = user.data.length
        console.log(size)
        console.log(user.data[size - 1])
        await db.endpoints.Assignments.patch(user.data[size - 1], {
                "name": this.assignmentName.value,
                "description": this.description.value
            }
        )

        window.location.reload(false) // refresh page so that other areas of app will update
    }

    render() {
        return (
            <div className='create-assignment-dialog'>
                <div>
                    <input
                        className='new-assignment-title'
                        type="text" 
                        defaultValue="Untitled Assignment"
                        ref={myinput => (this.assignmentName = myinput)}
                    />
                </div>
                <div >
                    <textarea
                        className='new-assignment-description'
                        type="text"
                        cols="75"
                        defaultValue="Description..."
                        ref={myinput => (this.description = myinput)}
                    />
                </div>
                <div className='add-problems'>
                    + Add a problem
                </div>
                <div className='save' onClick={this.handleSubmit}>
                    Save
                </div>
                <div className='cancel' onClick={this.props.goBack}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default CreateAssignment;