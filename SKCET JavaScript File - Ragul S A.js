function validateCardNumber()
{
  var number=/^\d{16}$/;
  var cardNumber=document.getElementById("cardNumber").value;  
  if(cardNumber.search(number)==-1)
    {
		error.textContent = "enter 16 digit card number";
      document.getElementById("cardNumber").focus();
	       }
  else
	{ 
		error.style.display ="none";
	} 
 }
 

function validateSecurityCode()
{
  var number=/^\d{3}$/;
  var securityCode=document.getElementById("securityCode").value;  
  if(securityCode.search(number)==-1)
    {
      alert("Invalid security code");
	  document.getElementById("securityCode").value="";
      document.getElementById("securityCode").focus();     }
}

function validateCardHolderName()
{
  var cardHolderNamePattern="^[a-zA-Z ]*$";
  var cardHolderName=document.getElementById("cardHolderName").value;  
  if(cardHolderName.search(cardHolderNamePattern)==-1)
    {
      alert("Invalid Card Holder Name");
	  document.getElementById("cardHolderName").value="";
      document.getElementById("cardHolderName").focus();     }
}

function validateAddress1()
{
  var addressPattern="^[0-9a-zA-Z]*$";
  var address1=document.getElementById("address1").value;  
  if(address1.search(addressPattern)==-1)
    {
      alert("Invalid Address");
      document.getElementById("address1").value="";
      document.getElementById("address1").focus();     }
}

function validateCity()
{
  var pattern="^[a-zA-Z ]*$";
  var city=document.getElementById("city").value;  
  if(city.search(pattern)==-1)
    {
      alert("Invalid City name");
      document.getElementById("city").value="";
      document.getElementById("city").focus();     }
}

function validateRegion()
{
  var pattern="^[a-zA-Z]*$";
  var region=document.getElementById("region").value;  
  if(region.search(pattern)==-1)
    {
      alert("Invalid Region name");
      document.getElementById("region").value="";
      document.getElementById("region").focus();
     }
}
	
function validateTelephone()
{
  var number=/^\d{10}$/;
  var telephone=document.getElementById("telephone").value;  
  if(telephone.search(number)==-1)
    {
      alert("Invalid Mobile number");
	  document.getElementById("telephone").value="";
      document.getElementById("telephone").focus();     }
}

function validateFaxNumber()
{
  var number=/^\d{6}$/;
  var faxNumber=document.getElementById("faxNumber").value;  
  if(faxNumber.search(number)==-1)
    {
      alert("Invalid Fax Number");
      document.getElementById("faxNumber").value="";
      document.getElementById("faxNumber").focus();     }
}

function validateZipCode()
{
  var number=/^\d{6}$/;
  var zipCode=document.getElementById("zipCode").value;  
  if(zipCode.search(number)==-1)
    {
      alert("Invalid Zipcode Number");
      document.getElementById("zipCode").value="";
      document.getElementById("zipCode").focus();     }
}
	
function validateEmail()
{
  var pattern="^[a-zA-Z0-9_+&*-]+(?:.[a-zA-Z0-9_+&*-]+)*" + "@" + "(?:[a-zA-Z0-9-]+.)+[a-zA-Z]{2,7}";
  var email=document.getElementById("email").value;  
  if(email.search(pattern)==-1)
    {
      alert("Invalid email address");
      document.getElementById("email").value="";
      document.getElementById("email").focus();     }
}

function validateDate()
{
	var month = document.getElementById("date").value;
	var text = month.options[month.selectedIndex].text;
	if(text=="")
	{
		alert("asdqw");
	}
}