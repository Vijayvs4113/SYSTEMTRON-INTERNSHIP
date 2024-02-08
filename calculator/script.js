let output = document.getElementById('output-screen');
let error = document.getElementById('error');

function display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    
    catch(err){
        alert('Invalid Input');
    }
}

function del(){
    output.value = output.value.slice(0,-1);
}

function clr(){
    console.log(output.value);
    output.value = "";
}