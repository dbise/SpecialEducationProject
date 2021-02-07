import React from 'react'
// import React, { useState } from 'react'
import './css/ViewStudent.css'
import ReactDOM from 'react-dom'
import Students from './Students'
import InputGroup from 'react-bootstrap/InputGroup';
import FormGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { db } from '../API';


function ViewStudent(props) {
    let valueChanged = false;
    // const [address, about, age, birthday, first, gender, grade, guardian1, guardian2, last, phone, teacherId] = useState(0);
    // useState({
    //     address: props.student.address,
    //     about: props.student.about,
    //     age: props.student.age,
    //     birthday: props.student.birthday,
    //     first: props.student.firstName,
    //     gender: props.student.gender,
    //     grade: props.student.grade,
    //     guardian1: props.student.guardian1,
    //     guardian2: props.student.guardian2,
    //     last: props.student.lastName,
    //     phone: props.student.phone,
    //     teacherId: props.student.teacherId
    // })

    function handleChange(e) {
        // console.log(e.target.value);
        valueChanged = true;
        try {
            document.querySelector(".submit").className = "submit_changed"
        }
        catch { }

        props.student[e.target.id] = e.target.value

        // console.log(props.student)
    }

    function handleSubmit() {
        if (valueChanged) {
            db.endpoints.Students.patch({ "id": props.student.id }, {
                "address": props.student.address,
                "about": props.student.about,
                "age": props.student.age,
                "birthday": props.student.birthday,
                "firstName": props.student.firstName,
                "gender": props.student.gender,
                "grade": props.student.grade,
                "guardian1": props.student.guardian1,
                "guardian2": props.student.guardian2,
                "lastName": props.student.lastName,
                "phone": props.student.phone,
                "teacherId": props.student.teacherId
            })
        }



        window.location.reload(false) // refresh page so that other areas of app will update

    }



    function renderStudentInfo() {
        return (
            // This looks absolutely horrid on mobile
            <form id="form">
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    First Name:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="firstName"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.firstName}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Last Name:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="lastName"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.lastName}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Age:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="age"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.age}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Birthday:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="birthday"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.birthday}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Gender:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="gender"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.gender}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Grade:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="grade"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.grade}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Col>

                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Address:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="address"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.address}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Guardian 1:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="guardian1"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.guardian1}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Guardian 2:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="guardian2"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.guardian2}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Phone:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="phone"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.phone}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Teacher Id:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="teacherId"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.teacherId}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <InputGroup.Text id="basic-addon3">
                                About:
                        </InputGroup.Text>
                            <FormControl as="textarea" rows={5} aria-describedby="basic-addon3"
                                defaultValue={props.student.about}
                                onChange={handleChange} className="overflow-auto" />
                        </FormGroup>
                    </Col>
                </Row>
            </form>
        )

    }

    return (
        < div className='dialog' >
            <Container >
                <div className='title'>{props.student.firstName} {props.student.lastName}</div>

                <div>{renderStudentInfo()}</div>
            </Container>
            <div className='submit' onClick={() => {
                handleSubmit()
            }}>
                Save
            </div>

            <div className='cancel' onClick={() => {
                ReactDOM.render((
                    <div>
                        <Students />
                    </div>
                ), document.querySelector('#table'));
            }}>
                Cancel
            </div>
        </div>
    );
}

export default ViewStudent;