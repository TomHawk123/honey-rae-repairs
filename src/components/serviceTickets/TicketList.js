import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom/"

export const TicketList = () => {
    // create a New state variable
    const [serviceTickets, setServiceTicket] = useState([])
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((serviceTicketsArray) => {
                    setServiceTicket(serviceTicketsArray)
                })
        },
        []
    )

    // useEffect(() => {
    //     const activeTicketCount = serviceTickets.filter(t => t.dateCompleted === "").length
    //     setServiceTicket(`There are ${activeTicketCount} open tickets`)
    // }, [serviceTickets])

    return (
        <>
            <h2> Service Tickets</h2>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            {
                serviceTickets.map(
                    (serviceTicket) => {
                        return <div key={`serviceTicket--${serviceTicket.id}`}>
                            <p className={serviceTicket.emergency ? `emergency` : `serviceTicket`}>
                                {serviceTicket.emergency ? "🚑" : ""} <Link to={`/tickets/${serviceTicket.id}`}>{serviceTicket.description}</Link> submitted by {serviceTicket.customer.name} and worked on by {serviceTicket.employee.name}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}