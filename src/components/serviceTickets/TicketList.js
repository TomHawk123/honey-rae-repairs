import React, { useEffect, useState } from "react"

export const TicketList = () => {
    // create a New state variable
    const [serviceTickets, setServiceTicke] = useState([])

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