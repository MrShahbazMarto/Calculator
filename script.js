
let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".screen");

let changedScreen = screen;

function button(value) {
    if (isNaN(value)) {
        
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    
   console.log( screen.innertext = buffer);

}


function handleSymbol(symbol) {
    switch (symbol) {
        case 'Clear':
            buffer = "0";
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator !== 0) {
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = 0;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '<-':
            if (buffer.length === 1) {
                buffer = 0;
            
            } else {
                buffer = buffer.toString(0, buffer.length - 1);
                
            }
            break;
        
        case '+':
        case '-':
        case 'x':
        case '/':
            handleMath(symbol);
            break;
        
        
    }
    }


function handleMath(symbol) {

        if (buffer === 0) {
            return;
        }

    
    const intBuffer = parseInt(buffer);
    
    if (runningTotal === 0) {
        runningTotal = intBuffer;

    } else {
        flushOperation(intBuffer);

    }

    previousOperator = symbol;
    buffer = 0;
}


function flushOperation(intBuffer) {

    if (previousOperator === "+") {
        runningTotal += intBuffer;
        
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "*") {
        runningTotal *= intBuffer;
    } else if (previousOperator === '/') {
        runningTotal /= intBuffer;
    }
    
}

 

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    } 
}

var  onclick = (value)=> {
 console.log( screen.innertext = value.target);
    // console.log(resutl);
    
    // (value.target.innertext)   ;

};

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function(event){ 
        console.log(event);
    



        onclick(event);



     })
};



init();

