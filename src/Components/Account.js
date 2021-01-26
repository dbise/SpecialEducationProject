import React from 'react'
// import './css/Account.css'
import { db } from '../API';

const localUserInfo = JSON.parse(localStorage.getItem('user'));

class Account extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    // function must be async to fulfill promise
    async handleSubmit() {
        const user = await db.endpoints.Teachers.getAll() //gets the Teachers json, must use 'await' for all api calls
        await db.endpoints.Teachers.patch(user.data[0], {
                "firstName": this.firstName.value,
                "lastName": this.lastName.value
            })
        alert('Account name has been updated: '+this.firstName.value+' '+this.lastName.value)

        // updating local storage separately because it takes a minute for db to update
        // also, we could pull info directly from db, but local storage is maybe the better option?
        localUserInfo.firstName = this.firstName.value
        localUserInfo.lastName = this.lastName.value
        localStorage.setItem('user', JSON.stringify(localUserInfo))
        window.location.reload(false) // refresh page so that other areas of app will update
    }
  
    render() {
        return (
            <div>
                <label>
                    First Name: 
                    <input 
                        type="text" 
                        defaultValue={localUserInfo.firstName} 
                        ref={myinput => (this.firstName = myinput)}
                    />
                </label>
                <label>
                    Last Name: 
                    <input 
                        type="text" 
                        defaultValue={localUserInfo.lastName} 
                        ref={myinput => (this.lastName = myinput)}
                    />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
      );
    }
  }
  
export default Account;