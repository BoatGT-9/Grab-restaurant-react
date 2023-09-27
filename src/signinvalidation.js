function validation(values){

    let error ={}
    const username_patten = /^[a-zA-Z\s]+$/
    // const email_patten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_patten = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const confrime_password_patten = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === ""){
        error.username = " Plase enter Name"
    }
    // else if (!username_patten.test(values.username)){
    //     error.username = "Name incorrect"
    // } 
    else{
        error.username = ""
    }

    // if(values.email ===""){
    //     error.email = "plase enter Email";
    // }else if (!email_patten.test(values.email)){
    //     error.email = "Email invorrct"
    // }
    // else{
    //     error.email = ""
    // }

    if(values.password === ""){
        error.password = "Please enter Password";
    }
    else if(!password_patten.test(values.password)){
        error.password ="Password incorrect"
    } else{
        error.password =""
    }

    if(values.confrime_password === ""){
        error.confrime_password = "Please enter Password";
    }
    else if(!confrime_password_patten.test(values.confrime_password)){
        error.confrime_password ="Password incorrect"
    } else{
        error.confrime_password =""
    }

    return error;

}
 export default validation;