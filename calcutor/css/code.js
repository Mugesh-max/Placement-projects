const display = document.getElementById('result');

function insert(value)

{
    display.value = display.value + value;
}
function remove()
{
    display.value = display.value.slice(0,-1);
}

function clear()
{
    display.value="";
}

function calculate()
{
    try{
        display.value = eval(result.value);
    }
    catch{
        display.value="error";
    }
}