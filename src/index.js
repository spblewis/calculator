import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class KeyPad extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (value) => {
        this.props.pressButton(value);
    }

    render() {

        return (

            <div id="key-pad" onClick={this.handleClick}>

                <button id="clear" value="clear">AC</button>
                <button id="divide" value="/">/</button>
                <button id="multiply" value="*">*</button>               
                <button id="seven" value="7">7</button>
                <button id="eight" value="8">8</button>
                <button id="nine" value="9">9</button>
                <button id="subtract" value="-">-</button> 
                <button id="four" value="4">4</button>
                <button id="five" value="5">5</button>
                <button id="six" value="6">6</button>
                <button id="add" value="+">+</button>
                <button id="one" value="1">1</button>
                <button id="two" value="2">2</button>
                <button id="three" value="3">3</button>
                <button id="zero" value="0">0</button>
                <button id="decimal" value=".">.</button>                
                <button id="equals" value="=">=</button>

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
            'equation': '0'
        };
        this.pressButton = this.pressButton.bind(this);
    
    }
    
    pressButton(e) {
        if (e.target.value === "clear") {
            this.setState({
                'equation': '0'
            })
        } else {

            this.setState({
                equation: this.state.equation + e.target.value
            });
        }

    }


    render() {

              

        return (
            <div id="calculator">
                <Display 
                    equation={this.state.equation}
                />
                <KeyPad 
                    pressButton={this.pressButton}
                />
            </div>
        );

    };
}



ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)