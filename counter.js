var count = 0;

function print()
{
    document.getElementById("number").innerHTML = count;
    
}
function increment()
{

    count = count + 1; 
    print();
}

function decrement()
{
    count = count - 1;
    print();
}

function reset ()
{
    count = 0;
    print();
}
