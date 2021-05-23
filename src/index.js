import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const digits = [
    {
        "name": "zero",
        "value": 0
    },
    {
        "name": "one",
        "value": 1
    },
    {
        "name": "two",
        "value": 2
    },
    {
        "name": "three",
        "value": 3
    },
    {
        "name": "four",
        "value": 4
    },
    {
        "name": "five",
        "value": 5
    },
    {
        "name": "six",
        "value": 6
    },
    {
        "name": "seven",
        "value": 7
    },
    {
        "name": "eight",
        "value": 8
    },
    {
        "name": "nine",
        "value": 9
    }
]
const operators = [
    {
        "name": "add"
    },
    {
        "name": "subtract"
    },
    {
        "name": "multiply"
    },
    {
        "name": "divide"
    }
]

class Calculator extends React.Component {

    render(){

    return (
        <h1>initial</h1>
    );

    };
}



ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)