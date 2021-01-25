import React from 'react'
import ReactDOM from 'react-dom'
import './css/Settings.css'
//begin: json-server
import { db } from '../API';
//end: json-server

class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
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
                <tr key={id}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                    <td>{grade}</td>
                </tr>
            )
        })

        ReactDOM.render((
            <table>
                <tbody id="tableBody">
                    {headerJsx}
                    {bodyJsx}
                </tbody>
            </table>


        ), document.querySelector('#table'));
    }

    render() {
        return (
            <table id="table">
            </table>
        );
    }
}

export default StudentInfo;