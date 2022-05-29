import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QueryForm from './component/QueryForm';
import NavBar from './component/NavBar'
import Header from './component/Header'
import SingleProblem from './component/algorithms/SingleProblem'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <NavBar/>
    <SingleProblem name="Two Sum" desc="Given an array of integers nums and an integer target , return indices of the two numbers such that they add up to target ."/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
