import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeesList"
import { TicketList } from "./serviceTickets/TicketList"
import { NavBar } from "./nav/NavBar"

export const Repairs = () => {
    return (
        <>
            <NavBar />

            <CustomerList />

            <EmployeeList />

            <TicketList />
        </>
    )
}