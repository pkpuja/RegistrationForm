 var isError=true;
 function generateCaptcha(){
	var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
	var i;
	for (i=0;i<4;i++){
	var a = alpha[Math.floor(Math.random() * alpha.length)];
	var b = alpha[Math.floor(Math.random() * alpha.length)];
	var c = alpha[Math.floor(Math.random() * alpha.length)];
	var d = alpha[Math.floor(Math.random() * alpha.length)];
	}
	var code = a + '' + b + '' + '' + c + '' + d;
	document.getElementById("mainCaptcha").value = code
}
function removeSpaces(string){
	return string.split(' ').join('');
}
function CheckValidCaptcha(){
	var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
	var string2 = removeSpaces(document.getElementById('txtInput').value);
	if (string1 == string2){
		document.getElementById('error').innerHTML="";
		document.getElementById('success').innerHTML = "Captcha is matched Successfully";
		isError=false;
		return true;
	}
	else{  
		document.getElementById('success').innerHTML =""; 	  
		document.getElementById('error').innerHTML = "Please enter a valid captcha."; 
		isError=true;
		return false;

	}
}

function validatePassword() {
    var pass1 = document.getElementById("pwd").value;
    var pass2 = document.getElementById("cPwd").value;
    if (pass1 != pass2) { 
		document.getElementById('pwderror').innerHTML = "password is not matched"; 
		document.getElementById('cPwd').focus();
		isError=false;
		return false;
    }
    else {
		document.getElementById('pwderror').innerHTML = "";  
		isError=true;
        return true;
    }
}
function checkForm(formId) {
	event.preventDefault();
	if(!isError){
		var inputs = document.querySelectorAll('#' + formId + ' input');    
		var formValues = {};
		for (var i = 0; i < inputs.length; i++) {
		  formValues[inputs[i].id] = inputs[i].value;
		}
		return formValues;	
	}
	else{
		alert("Please fill all mandatory fields")
	}
}