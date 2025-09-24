let Child = (props)=>{
    console.log(props);

    return(
        <div><h1>i am Child but this date "{props.user}" is from parent and the age is {props.age}. Im 1st born child, My name is  {props.CName}.</h1></div>
    )

}

export default Child;