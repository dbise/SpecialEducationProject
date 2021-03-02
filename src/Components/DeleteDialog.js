import React from 'react'
import './css/DeleteDialog.css'

function DeleteDialog(props) {
    return (
        <div className='delete-assignment-dialog'>
            <div className='delete-message'>Are you sure you want to delete this {props.objectToDelete}?</div>
            <div className='confirm-delete' onClick={props.confirmDelete}>
                Delete {props.objectToDelete}
            </div>
            <div className='cancel' onClick={() => window.location.reload(false)}>
                Cancel
            </div>
        </div>
    );
}

export default DeleteDialog;