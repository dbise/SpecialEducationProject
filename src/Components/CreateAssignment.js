import React from 'react'
import './css/CreateAssignment.css'

function CreateAssignment(props) {
    return (
        <div className='dialog'>
            <div className='title'>
                New Assignment 1
            </div>
            <div className='add-problems'>
                + Add a problem
            </div>
            <div className='cancel' onClick={props.goBack}>
                Cancel
            </div>
        </div>
    );
}

export default CreateAssignment;