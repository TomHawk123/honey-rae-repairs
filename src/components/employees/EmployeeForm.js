import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { sendEmployee } from "../ApiManager";


export const EmployeeForm = () => {

    const history = useHistory()

    const [employee, update] = useState()

    // const [locations, updateLocations] = useState([])
    // useEffect(() => {
    //     getAllLocations()
    //         .then(
    //             (location) => {
    //                 updateLocations(location)
    //             }
    //         )
    // }, [])


    const submitEmployee = e => {
        e.preventDefault()

        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
            // locationId: parseInt(employee.locationId)

        }

        return sendEmployee(newEmployee)
            .then(() => {
                history.push("/employees")


            })
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Employee Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.name = evt.target.value
                                update(copy)
                            }

                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty</label>
                    <input type="text"
                        required autoFocus
                        className="form-control"
                        placeholder="Specialty"
                        onChange={
                            e => {
                                const copy = { ...employee }
                                copy.specialty = e.target.value
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                {/* <div className="form-group">
                    <label htmlFor="name">Location</label>
                    <select name="location" type="select"
                        onChange={
                            e => {
                                const copy = { ...employee }
                                copy.locationId = e.target.value
                                update(copy)
                            }
                        }>
                        <option value="" disabled selected hidden>Choose a location...</option>
                        {locations.map(location => <option value={location.id}>{location.name}</option>)}


                    </select>

                </div> */}
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Hire Employee
            </button>
        </form>
    )
}