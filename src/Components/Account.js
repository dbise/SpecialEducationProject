import React from 'react'
// import './css/Account.css'
import { db } from '../API';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const localUserInfo = JSON.parse(localStorage.getItem('user'));

function saveActive(){
  console.log("hello");
}

function Account (props) {
  function handleChange(e) {
    console.log(e.target.value);
  }
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userId = userInfo.id;
  const user = db.endpoints.Teachers.getOne(userId);
  console.log(user);
  return (
    <div>
      <Container>
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
            onChange= {handleChange}
            />
          </InputGroup>
          </Col>
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
            onChange= {handleChange}
            />
          </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
      );
    }

export default Account;
