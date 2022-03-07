import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/"

export const TicketList = () => {
    // create a New state variable
    const [serviceTickets, setServiceTicke] = useState([])
    // const [tickets, setActive] = useState([])
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


    // useEffect(() => {
    //     const activeTicketCount = tickets.filter(t => t.dateCompleted === "").length
    //     setActive(`There are ${activeTicketCount} open tickets`)
    // }, [tickets])

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
                                {serviceTicket.emergency ? "🚑" : ""} {serviceTicket.description} submitted by {serviceTicket.customer.name} and worked on by {serviceTicket.employee.name}
                            </p>                        </div>
                    }
                )
            }
        </>
    )
}