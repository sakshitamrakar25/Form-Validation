const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpass=document.getElementById('confirmpass');
const submit=document.getElementById('btn')
form.addEventListener('submit',(e)=>{
   e.preventDefault();
    validateInputs();
})
const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passvalue=password.value.trim();
    const conpass=confirmpass.value.trim()
    if(usernameValue===""){
        setError(username,'username is required')
    }
    else{
        setSuccess(username);
    }
    if(emailValue===""){
        setError(email,"please enter a email")
    }
    else if(!isvalidateemail()){
        setError(email,"please enter a valid email")
    }
    else {
        setSuccess(email)
    }
    if(passvalue===""){
        setError(password,'password is required')
    }
    else if(passvalue.length<8){
        setError(password,"Password must be atleast 8 characters")
    }
    else{
        setSuccess(password)
    }
    if(conpass===""){
        setError(confirmpass,"Please confirm your Password")
    }
    else if(passvalue!==conpass){
        setError(confirmpass,"Password does not match")
    }
    else{
        setSuccess(conpass)
    }
}
const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error')
    errorDisplay.innerText =message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const setSuccess=(element)=>{
    const inputControl=element.parentElement
    const errorDisplay=inputControl.querySelector('.error')
    errorDisplay.innerText=""
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}
function isvalidateemail(e){
   //var reg= ^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$ ;
   return reg.test(e);
}