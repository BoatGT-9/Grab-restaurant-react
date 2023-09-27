function validation(values){

    let error ={}
    // const username_patten = /^[a-zA-Z\s]+$/
    const email_patten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_patten = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name = " Plase enter Name"
    }
     else{
        error.name = ""
    }

    if(values.email ===""){
        error.email = "plase enter Email";
    }
    // else if (!email_patten.test(values.email)){
    //     error.email = "Email invorrct"
    // }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Please enter Password";
    }
    // else if(!password_patten.test(values.password)){
    //     error.password ="Password incorrect"
    // }
     else{
        error.password =""
    }

    return error;

}
 export default validation;