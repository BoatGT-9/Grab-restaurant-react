function validation(values){

    let error ={}
    const username_patten = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{10,}$/
    const password_patten = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === ""){
        error.username = " Plase enter Name"
    }
    else if (!username_patten.test(values.username)){
        error.username = "ชื่อไม่ถูกต้อง"
    } else{
        error.username = ""
    }

    if(values.password === ""){
        error.password = "Please enter Password";
    }
    else if(!password_patten.test(values.password)){
        error.password ="Password incorrect"
    } else{
        error.password =""
    }

    return error;

}
 export default validation;