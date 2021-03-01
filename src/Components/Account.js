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
  var changed = [];
  const [disabled, setDisabled] = useState(true);
  function handleChange(e) {
    console.log(e.target.id);
    if(!changed.includes(e.target.id)){
      changed.push(e.target.id);
    }

    setDisabled(false);
  }
  const handleSubmit= async e =>  {
    var validInput = true;
    const userDB =  await db.endpoints.Teachers.getOne(userId);
    console.log(userDB);
    var stringArray = {};
    for (var i = 0; i < changed.length; i++) {
      var elementToGet = document.getElementById(changed[i]);
      if(changed[i]=="age"){
        var tempAge = parseInt(elementToGet.value);
        if(!isNaN(tempAge)){
          stringArray[changed[i]]=tempAge;
        }
        else{
          validInput = false;
        }
      }
      else{
        stringArray[changed[i]]=elementToGet.value;
      }
    }
    if(validInput){
      db.endpoints.Teachers.patch({ "id": userId }, stringArray);
      alert("User info was saved");
    }
    else{
      alert("Check input and make sure it is the right format");
    }
  }
  const userDB = JSON.parse(localStorage.getItem("user"));
  const userId = userDB.id;
  //const userDB = {};
  console.log(userDB);
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
                id="firstName"
                aria-describedby="basic-addon3"
                defaultValue={userDB.firstName}
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
                id="lastName"
                aria-describedby="basic-addon3"
                defaultValue={userDB.lastName}
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
                id="age"
                aria-describedby="basic-addon3"
                defaultValue={userDB.age}
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
                id="userName"
                aria-describedby="basic-addon3"
                defaultValue={userDB.userName}
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
                id="password"
                aria-describedby="basic-addon3"
                defaultValue={userDB.password}
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
