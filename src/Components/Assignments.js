import React, { useState } from 'react'
import AssignmentList from './AssignmentList'
import CreateAssignment from './CreateAssignment'
import './css/Assignments.css'
import Files from './Files'

function Assignments(props) {
    const [showContent, setShowContent] = useState(false)
    const [showCreateDialog, setShowCreateDialog] = useState(false)

    let content = <AssignmentList />
    if (showContent) {
        content = <Files goBack={() => setShowContent(false)} />
    }

    function cancel() {
        setShowContent(false)
        setShowCreateDialog(false)
    }
    let createDialog
    let createDialogMask
    if (showCreateDialog) {
        createDialog = <CreateAssignment goBack={cancel} />
        createDialogMask = <div className='dialog-mask' />
    }

    return (
        <div className='assignments'>
            <div className='side-panel'>
                <div
                    className='side-panel-item'
                    onClick={() => setShowCreateDialog(true)}
                >
                    Create Assignment +
                </div>
                <div className='side-panel-item' onClick={() => setShowContent(true)}>
                    Files
                </div>
            </div>
            {content}
            {createDialogMask}
            {createDialog}
        </div>

    );
}

export default Assignments;