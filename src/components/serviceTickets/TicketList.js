import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/"

export const TicketList = () => {
    // create a New state variable
    const [serviceTickets, setServiceTicke] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((serviceTicketsArray) => {
                    setServiceTicke(serviceTicketsArray)
                })
        },
        []
    )

    return (
        <>
            <h2> Service Tickets</h2>
            <div>
                <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            </div>
            {
                serviceTickets.map(
                    (serviceTicket) => {
                        return <div key={`serviceTicket--${serviceTicket.id}`}>
                            <p>{serviceTicket.description} Submitted by {serviceTicket.customer.name} and worked on by {serviceTicket.employee.name}.</p>
                        </div>
                    }
                )
            }
        </>
    )
}