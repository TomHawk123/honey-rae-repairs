import React from 'react';
import ReactDOM from 'react-dom';
import { CustomerList, Customers } from './components/customers/CustomerList';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { EmployeeList } from './components/employees/EmployeesList'

ReactDOM.render(
  <React.StrictMode>
    <CustomerList />
    <EmployeeList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
