import Child from "./Child";
function Parent(){

    let userName="ronaldo";
    let age="40";
    let childName ="Jr. Ronaldo";

    return(
        <div><h1>i am {userName}</h1>

        <Child user={userName} age={age} CName={childName}></Child>
        </div>

    )

}

export default Parent;