// import React from 'react'
import React, { useState } from 'react'
import './css/Settings.css'
import Routes from '../Routes'
//begin: json-server
import Api, { db } from '../API';
//end: json-server

class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.studentList = []
        this.studentsHtml = ''
        // this.handleChange = this.handleChange.bind(this);
        // this.handleLoad = this.handleLoad.bind(this);
    }

    componentWillMount() {

        this.handleLoad()

    }
    render() {
        return (
            // <div>
            //     <label>
            //         First Name:
            //         <p>{this.firstName}</p>

            //     </label>
            //     <label>
            //         Last Name:
            //         </label>
            //     <p>{this.lastName}</p>
            //     <button onClick={this.handleLoad}>Submit</button>
            // </div>
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {/* {this.studentsHtml} */}
                </tbody>
            </table>
        );
    }



    async handleLoad() {
        const students = await db.endpoints.Students.getAll() //gets the Teachers json, must use 'await' for all api calls
        // await db.endpoints.Teachers.patch(user.data[0], {
        //     "firstName": this.firstName.value,
        //     "lastName": this.lastName.value
        // })


        // alert(this.firstName.value + ' ' + this.lastName.value)
        this.studentList = students.data

        students.data.forEach(element => {
            this.studentsHtml += `<tr><td>${element.firstName}</td><td>${element.lastName}</td></tr>`
        });

        console.log(this)

        // window.location.reload(false) // refresh page so that other areas of app will update
    }
    // handleChange(event) {
    //     event.preventDefault()
    //     console.log(event)
    //     // this.setState({ value: event.target.value });
    // }
}


// function Students(props) {
//     // const [first, setFirst] = useState("");
//     // const [last, setLast] = useState("");

//     async function getStudentList() {
//         // const s = { first, last };
//         const userNameSearch = await db.endpoints.Students.getAll();
//         // console.log(userNameSearch)
//         return userNameSearch;
//     }


//     let ducks = getStudentList()
//         .then(

//         )



//     // .then(
//     //     result => {
//     //         // return result.data.forEach(element => {
//     //         //     return [element.firstName, element.lastName]

//     //         let temp = []
//     //         result.data.forEach(element => {
//     //             temp.push([element.firstName, element.lastName])
//     //         });
//     //         console.log(temp)
//     //         return temp

//     //     });

//     // }
//     console.log(ducks)






//     const element = <StudentInfo />;

//     return (
//         <div>
//             {element}
//         </div>
//     );

// }

export default StudentInfo;