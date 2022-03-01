import React, { useEffect, useState } from "react"

// hooks are built-in function of React and start with "use"
export const Repairs = () => {
    // pass useState hook an array. useState always returns an array.
    // Inside the array being declared, the array will give you the inital value (customers)
    // and a function to accept the value of customers (setter function) later on in the code. 
    const [customers, setCustomers] = useState([])

    // useEffect hook fucntion takes two arguments, 
    useEffect( // when the state changes, run this code.
        () => {// first argument for useEffect hook is always a function
            fetch("http://localhost:8088/customers") // fetch customers data from API
                .then(res => res.json()) // convert json string into actual JS
                .then((customerArray) => { // customerArray that came back from the API
                    // cannot directly modify state (transientState = ...). Must use the setter. 
                    setCustomers(customerArray) // always use the settre and pass it the 
                    // parsed fetch return.
                })
        },
        [] // second argument for useEffect is always an array
    )


    return ( // DON'T FORGET THE PARENTHESES
        // JSX fragment (empty opening and closing) allows us to return more than one item in React
        <> 
        <h1>Honey Rae's Repair Shop</h1>

        {// JSX interpolation doesn't require dollar sign ($)
            customers.map( // map method is a conversion tool
                (customerObject) => {
                    return <h2>{customerObject.name}</h2>
                }
            )
        }
        </>
    )
}