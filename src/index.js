import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

    function lastCharIsOperator(str) {
        return str[str.length-1].match(/[+\*\-\/]/);
    }


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
        this.handleDigits = this.handleDigits.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
    }


    handleDigits(val, equation) {
        if (equation === '0') {
            this.setState ({
                'equation': val
            });

        } else if (lastCharIsOperator(equation)) {
        
            this.setState({
                'equation': equation + ' ' + val
            })
        
        } else {

            this.setState({
                equation: equation + val
            });
        }
    }

    handleOperator(val, equation) {
        if (lastCharIsOperator(equation)) {
            this.setState({
                'equation': equation.slice(0, equation.length - 1) + val
            });
        } else {
            this.setState({
                'equation': equation + ' ' + val
            });
        }
    }

    handleDecimal(val, equation) {
        if (lastCharIsOperator(equation)) {
            this.setState({
                'equation': equation + ' 0' + val
            })
        } else {
            this.setState({
                'equation': equation + val
            })
        }
    }

    calculate(equation) {

        let solving = equation.split(' ');

        for (let i = 0; i < solving.length; i++) {
            if (solving[i] === '*') {
                solving[i-1] = String(+solving[i-1] * +solving[i+1]);
                solving.splice(i, 2);
                i--;
            } else if (solving[i] === '/') {
                solving[i-1] = String(+solving[i-1] / +solving[i+1]);
                solving.splice(i, 2);
                i--;
            }
        }

        for (let i = 0; i < solving.length; i++) {
            if (solving[i] === '+') {
                solving[i-1] = String(+solving[i-1] + +solving[i+1]);
                solving.splice(i, 2);
                i--;
            } else if (solving[i] === '-') {
                solving[i-1] = String(+solving[i-1] - +solving[i+1]);
                solving.splice(i, 2);
                i--;
            }
        }

        this.setState({
            'equation': solving[0]
        });

    }
    
    pressButton(e) {
        const equation = this.state.equation;
        const val = e.target.value;

        if (val === "clear") {

            this.setState({
                'equation': '0'
            });

        } else if (val.match(/\./)) {
          
            this.handleDecimal(val, equation);    

        } else if (val.match(/[0-9]/)) {

            this.handleDigits(val, equation);

        } else if (val.match(/[+\*\-\/]/)){

            this.handleOperator(val, equation);          

        } else if (val.match(/=/)) {

            this.calculate(equation);
            
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