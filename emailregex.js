Source: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	function validateEmail(email) {
var re =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}