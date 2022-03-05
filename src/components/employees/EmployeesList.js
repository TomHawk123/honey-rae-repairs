// import React, { useEffect, useState } from "react"

// // hooks are built-in function of React and start with "use"
// export const Employees = () => {
//     // pass useState hook an array. useState always returns an array.
//     // Inside the array being declared, the array will give you the inital value (customers)
//     // and a function to accept the value of employees (setter function) later on in the code. 
//     const [employees, setEmployees] = useState([])

//     // useEffect hook function takes two arguments, 
//     useEffect( // when the state changes, run this code.
//         () => {// first argument for useEffect hook is always a function
//             fetch("http://localhost:8088/employees") // fetch employees data from API
//                 .then(res => res.json()) // convert json string into actual JS
//                 .then((customerArray) => { // customerArray that came back from the API
//                     // cannot directly modify state (transientState = ...). Must use the setter. 
//                     setEmployees(customerArray) // always use the settre and pass it the 
//                     // parsed fetch return.
//                 })
//         },
//         [] // second argument for useEffect is always an array
//     )


//     return ( // DON'T FORGET THE PARENTHESES
//         // JSX fragment (empty opening and closing) allows us to return more than one item in React
//         <> 
//         <h2>Employee List</h2>


//         {// JSX interpolation doesn't require dollar sign ($)
//         employees.map( // map method is a conversion tool
//                 (employeeObject) => {
//                     return <div><p>{employeeObject.name}</p></div> 
//                 }
//             )
//         }
//         </>
//     )
// }



import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const history = useHistory()

    const [employees, setEmployee] = useState([])
    // create a New state variable
    const [totalEmployeeSpecialties, setSpecialty] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setEmployee(employeeArray)
                })
        },
        []
    )

    useEffect(() => {

        //1. Use .map() to get the specialty of each employee
        const employeeSpecialties = employees.map(employee => employee.specialty)

        //2. Then update a state variable to be a comma-separated string
        //(e.g. "iPhone, Printers, ...")
        setSpecialty(employeeSpecialties.join(", "))

    }, [employees])

    //invoke {totalEmployeeSpecialties} interpolated behind the colon in the <div> tag

    return (
        <>
            <h2>Employee List</h2>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            <div>
                <b>Specialties:</b> {totalEmployeeSpecialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}