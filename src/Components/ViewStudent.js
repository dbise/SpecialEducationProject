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

    function handleChange(e) {
        valueChanged = true;
        try {
            document.querySelector(".submit").className = "submit_changed"
        }
        catch { }

        props.student[e.target.id] = e.target.value
    }

    function handleSubmit() {
        if (valueChanged) {

            // THIS NEEDS SOME REAL VALIDATION AND SANITATION

            db.endpoints.Students.patch({ "id": props.student.id }, {
                "address1": props.student.address1,
                "address2": props.student.address2,
                "city": props.student.city,
                "state": props.student.state,
                "zip": props.student.zip,
                "about": props.student.about,
                "age": props.student.age,
                "birthday": props.student.birthday,
                "firstName": props.student.firstName,
                "lastName": props.student.lastName,
                "gender": props.student.gender,
                "grade": props.student.grade,
                "guardian1": props.student.guardian1,
                "guardian2": props.student.guardian2,
                "phone": props.student.phone,
                "email": props.student.email,
                "teacherId": props.student.teacherId
            })
            window.location.reload(false) // refresh page so that other areas of app will update

        }

    }

    function renderStudentInfo() {
        return (
            // This looks absolutely horrid on mobile
            <form id="form">
                <Row className="justify-content-md-center">
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
                    </Col>

                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Address 1:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="address1"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.address1}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Address 2:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="address2"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.address2}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    City:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="city"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.city}
                                onChange={handleChange}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    State:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="state"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.state}
                                onChange={handleChange}
                            />
                        </InputGroup>


                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    Zip:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="zip"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.zip}
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
                                    Email:
                        </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id="email"
                                aria-describedby="basic-addon3"
                                defaultValue={props.student.email}
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
                <Row className="justify-content-md-center">
                    <Col>
                        <FormGroup>
                            <InputGroup.Text id="basic-addon3">
                                About:
                        </InputGroup.Text>
                            <FormControl as="textarea" rows={5} aria-describedby="basic-addon3"
                                id="about"
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
            <Container fluid>
                <div className='title'>{props.student.firstName} {props.student.lastName}</div>

                <Row className="justify-content-md-center">
                    <Col xs={1}></Col>
                    <Col xs={8}><div id="studentInfo">{renderStudentInfo()}</div></Col>
                    <Col xs={1}></Col>
                </Row>
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