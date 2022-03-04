import React from "react"

export const TicketForm = () => {
    // Since we're tracking what the user enters, we need a state variable (useState)
    // Pass it an object with the relevant properties the user will be modifying. 
    // As the user interacts with the form, the useState object will be updated.
    // const [ticket, updateTicket] = useState({
    //     description: "",
    //     emergency: false
    // })

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
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox" />
                </div>
            </fieldset>
            <button className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}