import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Ticket = () => {
    const [ticket, assignTicket] = useState({})
    const { ticketId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(r => r.json())
                .then((data) => {
                    assignTicket(data)
                })
        },
        [ticketId])

    return (
        <>
            <h2> Ticket Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">Description: {ticket.description}</h3>
                <div className="ticket__customer">Customer Name: {ticket.customer?.name}</div>
                <div className="ticket__emloyee">Employee working on problem: {ticket.employee?.name}</div>
            </section>
        </>
    )
}