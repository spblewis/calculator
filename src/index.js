import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class KeyPad extends React.Component {

    render() {

        return (

            <div>
                <button id="seven">7</button>
                <button id="eight">8</button>
                <button id="nine">9</button>

                <button id="four">4</button>
                <button id="five">5</button>
                <button id="six">6</button>

                <button id="one">1</button>
                <button id="two">2</button>
                <button id="three">3</button>

                <button id="zero">0</button>
                
                <button id="equals">=</button>

            </div>

        )

    }
}

class Calculator extends React.Component {

    render(){

    return (
        <KeyPad />
    );

    };
}



ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)