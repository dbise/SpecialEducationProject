import React from 'react'
import './css/TakeAssignment.css'
import './css/ViewStudent.css'
import { db } from '../API'
import $ from 'jquery'

class TakeAssignment extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.valueChanged = false;
    }


    async handleDelete(assignment) {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            await db.endpoints.Assignments.delete(assignment)
            window.location.reload(false)
        }
    }

    async handleChange(e) {
        e.target.style.border = "2px solid lightgray"

    }
    async handleSubmit() {
        const answerInputs = $(".take-assignment-response").toArray()
        let failedValidation = false
        // console.log(answerInputs)

        let answers = answerInputs.map((things, stuff) => {

            if (things.value === "") {
                things.style.border = "2px solid red"
                failedValidation = true
            }
            else {
                things.style.border = "2px solid lightgray"
            }
            return things.value
        })

        if (failedValidation !== true) {
            // console.log(this.props)
            await db.endpoints.Completed.create({
                "studentId": this.props.studentData.id,
                "assignmentId": this.props.assignmentData.id,
                "studentAnswers": answers
            })
            window.location.reload(false)
        }


    }

    render() {
        // console.log(this.props.assignmentData)
        const questionsJsx = this.props.assignmentData.Questions?.map((question, index) => {
            return (
                <div key={index} >
                    <label>{question}
                        <div >
                            <textarea
                                placeholder="Type in your answer"
                                className='take-assignment-response'
                                type="text"
                                cols="75"
                                onChange={this.handleChange}
                                ref={myInput => (this.answer = myInput)
                                }
                            />
                        </div>
                    </label>
                </div>
            )
        });

        return (
            <div className='take-assignment-dialog'>
                <div className="take-assignment-header">
                    <div>
                        <div className='take-assignment-title'>{this.props.assignmentData.name}</div>
                    </div>
                    <div >
                        <div className='take-assignment-description'>{this.props.assignmentData.description}</div>
                    </div>
                </div>
                <div >
                    <div className="questions-list-title"> Questions </div>
                    <div className='take-assignment-questions-list'>{questionsJsx}</div>
                </div>
                <div className='standard-button save' onClick={this.handleSubmit}>
                    Save
                </div>
                <div className='standard-button cancel' onClick={() => { window.location.reload(false) }}>
                    Cancel
                </div>
            </div>
        );
    }
}

export default TakeAssignment;