import React from 'react'
import ReactDOM from 'react-dom'
import Table from 'react-bootstrap/Table'
import './css/Students.css'
import ViewStudent from './ViewStudent'
import { db } from '../API';

class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.studentList = []
    }

    componentDidMount() {
        db.endpoints.Students.getAll().then(
            students => {
                this.studentList = students.data;
                this.studentsHtml = this.renderTable();
            }
        )
    }

    showSingleStudent(student) {
        ReactDOM.render((
            <div>
                <div className='dialog-mask'></div>
                <ViewStudent student={student} />
            </div>

        ), document.querySelector('#table'));
        this.individualStudent = true
    }

    async renderTable() {
        const headerJsx = (
            <tr id="tableHeader">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Grade</th>
            </tr>
        )

        const bodyJsx = this.studentList.map((student, index) => {
            const { id, firstName, lastName, age, grade } = student
            return (
                <tr key={id} className="studentRow" onClick={() => {
                    this.showSingleStudent(student)
                }}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                    <td>{grade}</td>
                </tr>
            )
        })

        ReactDOM.render((
            <Table striped bordered hover responsive id="table">
                <tbody id="tableBody">
                    {headerJsx}
                    {bodyJsx}
                </tbody>
            </Table>
        ), document.querySelector('#table'));
    }

    render() {
        return (
            <div id="table">
            </div>
        );
    }
}

export default StudentInfo;