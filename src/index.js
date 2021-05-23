import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class KeyPad extends React.Component {

    render() {

        return (

            <div id="key-pad">

                <button id="clear">AC</button>
                <button id="divide">/</button>
                <button id="multiply">*</button>
                <button id="subtract">-</button>                

                <button id="seven">7</button>
                <button id="eight">8</button>
                <button id="nine">9</button>
                <button id="add">+</button>

                <button id="four">4</button>
                <button id="five">5</button>
                <button id="six">6</button>


                <button id="one">1</button>
                <button id="two">2</button>
                <button id="three">3</button>


                <button id="zero">0</button>
                <button id="decimal">.</button>
                <button id="equals">=</button>
                

            </div>

        )

    }
}

class Display extends React.Component {

    render() {

        return (
            <div id="display">{this.props.equation}</div>
        )

    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equation: '0'
        }
    }



    render(){

    return (
        <div id="calculator">
            <Display 
                equation={this.state.equation}
            />
            <KeyPad />
        </div>
    );

    };
}



ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)