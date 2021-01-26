import React from 'react'
import './css/Settings.css'
//begin: json-server
import Api, { db } from '../API';
//end: json-server
const userInfo = JSON.parse(localStorage.getItem("user"));
//console.log(localStorage.getItem("user"));
class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value={this.props.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.props.lastName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
}

function Settings(props) {
  const element = <SettingsForm firstName={userInfo.firstName} lastName={userInfo.lastName} />;
  return (
    <div>
      {element}
    </div>
  );
}

export default Settings;
