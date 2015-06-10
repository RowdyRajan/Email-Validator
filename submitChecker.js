$("#info").submit(function(event){
		
		var errorString = "";
		
		event.preventDefault();
		if(!validateEmail($("#mail").val())){
			errorString+="Invalid email";
		}
		
		if(!$.isNumeric($("#phone").val())){
			errorString+="<br />Invalid phone number(must have no dashes)";	
		}
		
		if($("#password").val() != $("#confirmPassword").val() || $("#password").val() == "" ){
			errorString+="<br />Passwords do not match";
		}
		if(errorString == ""){
			alert("success");
		}else{
			$("#error").html(errorString);
		}
		});
	