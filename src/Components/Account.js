import React, { useState } from 'react';
import './css/Account.css'
// import './css/Account.css'
import { db } from '../API';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import profile from '../resources/arwen.png'

const localUserInfo = JSON.parse(localStorage.getItem('user'));

function saveActive() {
  console.log("hello");
}

function Account(props) {

  const [disabled, setDisabled] = useState(true);
  function handleChange(e) {
    console.log(e.target.value);
    setDisabled(false);
  }
  function handleSubmit(e) {
    alert("This will allow user to change info and save");
    db.endpoints.Teachers.update(userId, "Teachers")
  }
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userId = userInfo.id;
  const user = db.endpoints.Teachers.getOne(userId);
  console.log(user);
  return (
    <div>
      <Container>
        <div class="account-title">
          Account Overview
        </div>
        <img class="account-img" src={profile} />
        <button class="account-img-button"
          onClick={e => alert("This will allow user to upload new image")}
        >
          edit image
        </button>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  First Name:
              </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                defaultValue={userInfo.firstName}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Last Name:
            </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                defaultValue={userInfo.lastName}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Age:
            </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                defaultValue={userInfo.age}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  UserName:
            </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                defaultValue={userInfo.userName}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Password:
            </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                id="basic-url"
                aria-describedby="basic-addon3"
                defaultValue={userInfo.password}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <button class="account-change-button"
          id="accountSaveButton"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Save
        </button>
      </Container>
    </div>
  );
}

export default Account;
