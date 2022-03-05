
const API = "http://localhost:8088"

export const getAllCustomers = () => {
    return fetch(`${API}/customers`)
        .then(res => res.json())
}

export const getEmployee = (employeeId) => {
    return fetch(`${API}/employees/${employeeId}`)
        .then(res => res.json())
}

export const getEmployees = () => {
    return fetch(`${API}/employees`)
        .then(res => res.json())
}
export const sendEmployee = (newEmployee) => {

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }

    return fetch(`${API}/employees`, fetchOption)
        .then(res => res.json())

}