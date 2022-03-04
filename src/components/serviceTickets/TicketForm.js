import React, { useState } from "react"
import { useHistory } from "react-router-dom"


export const TicketForm = () => {
    const history = useHistory
    // Since we're tracking what the user enters, we need a state variable (useState)
    // Pass it an object with the relevant properties the user will be modifying. 
    // As the user interacts with the form, the useState object will be updated.
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    })

    // This function lets us add all missing properties of a whole service ticket (customer, employee, date, description, etc.)
    // Function to be run onClick of "Submit Ticket" button
    const submitTicket = () => {
        const newTicket = {
            // description property gotten from useState
            description: ticket.description,
            // emergency property also from useState
            emergency: ticket.emergency,
            // customerId property is gotten with getItem method, which returns the value associated with the given key, or null
            // returs a string in this case, so parseInt is needed.
            customerId: parseInt(localStorage.getItem("honey_customer")),
            // hardcoding employeeId property because the customer will not assign the employee, we'll do that later
            employeeId: 1,
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // send the body of the request (newTicketObj)
            // Can't send JS objects across http, can only send strings. Have to stringify it
            body: JSON.stringify(newTicket)
        }
    
        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            // dont care about the immediate response from fetch.
            // use the history mechanism to programmatically 
            .then(() => {
                history.push("/tickets")
            })
    }


    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        // event listener that when the text input is being changed by the user
                        // the objects in the local useState array will be updated
                        onChange={
                            // e is the event that is "heard"
                            (e) => {
                                // make a copy of the ticket object in local useState
                                const copy = { ...ticket }
                                // add a description key to the copy of the ticket object with a value
                                // equal to the user's text input
                                copy.description = e.target.value
                                // invoke the local useState setter and pass it the updated copy of the ticket object
                                updateTicket(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input
                        type="checkbox"
                        onChange={
                            e => {
                                const copy = { ...ticket }
                                copy.emergency = e.target.checked
                                updateTicket(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button onClick={submitTicket} className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}