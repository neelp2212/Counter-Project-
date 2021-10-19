var count = 0;

function print(a)
{
    document.getElementById("number").innerHTML= a  + count;
    
}
function increment()
{

    count = count + 1; 
    print("Incremented By");
}

function decrement()
{
    count = count - 1;
    print("Decremented By");
}

function reset ()
{
    count = 0;
    print("Rest will be ");
}
