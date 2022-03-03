/**
 * This code works in tandem with NavBar
 * When someone clicks on one of the NavBar links
 * the Routes are listening for the url to match the path
 * When it does match, it will render the component within the Route element
 */


import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeesList"
import { TicketList } from "./serviceTickets/TicketList"


// ¿How do I use debugger to check when Routes initiate?
// A: 
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/serviceTickets">
                <TicketList />
            </Route>
        </>
    )
}