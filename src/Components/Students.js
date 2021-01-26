import React from 'react'
import ReactDOM from 'react-dom'
import './css/Settings.css'
import Table from 'react-bootstrap/Table'
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
                <tr key={id} class="studentRow" onClick={() => { alert(`Someday this will show some details for ${firstName} ${lastName}`) }}>
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
            <Table striped bordered hover responsive id="table">
            </Table>
        );
    }
}

export default StudentInfo;