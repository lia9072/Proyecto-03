
const form = document.getElementById('form');
const nombre = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const header =document.querySelector('header')

form.addEventListener('submit', e => {
	e.preventDefault();	
  
    const usuario = Array({
        nombre:nombre.value,
        email:email.value
    })
    localStorage.setItem('user', JSON.stringify(usuario))
    //location.href ='index.html'
    validados() 
	setTimeout(() => {
       form.reset()        
    }, 2000);

  
});
 let user = JSON.parse(localStorage.getItem('user'))
        
 if(user !== null){ 
    header.innerHTML=`
    <p> ${user[0].nombre}  </p>
    <p> ${user[0].email}  </p> 
     `  ;
    
 }



function validados() {
	const usernameValue = nombre.value;
	const emailValue = email.value;
	const passwordValue = password.value;
	const password2Value = password2.value;
  
	if(usernameValue === '') {
		setError(username, 'ponga su nombre');
	} else {
		setSuccess(username);
	}
	
	if(emailValue === '') {
		setError(email, 'Email no valido');
	} else {
		setSuccess(email);
	}
	
	if(passwordValue === '') {
		setError(password, 'no puedes vacio');
	} else {
		setSuccess(password);
	}
	
	if(password2Value === '') {
		setError(password2, 'no puedes dejar vacio');
	} else if(passwordValue !== password2Value) {
		setError(password2, 'la contraseña no concuerda');
	} else{
		setSuccess(password2);
	} 
}

function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



