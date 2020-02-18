
function CardValidation() {
    var value=document.getElementById("txtCard").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if(value.length==0)
    {
        document.getElementById("errorCard").style.display="block";
    }
    else if(!value.match(regex))
    {

        document.getElementById("errorCard").innerHTML="Invalid card number";
         alert('a');
    }
    else
    {
        result=true;
    }
}
function ValidateSecurityCode() {
    var value = document.getElementById("txtCode").value;
    var regex = /[0-9]{3}/;
    if(value.length==0)
    {
        document.getElementById("errorCode").style.display="block";
    }
    else if (!value.match(regex))
    {
        document.getElementById("errorCode").innerHTML="invalid SecurityCode";     
    }
    else
    {
        result = true;
    }
}
function ValidateExpiryMonth() {
    var value = document.getElementById("txtMonth").value;

    if (value.length == 0) {
    document.getElementById("errorMonth").style.display="block";
    }
    else {
        result = true;
    }
}

function ValidateExpiryYear() {
    var value = document.getElementById("txtYear").value;
    if (value.length==0) {
    document.getElementById("errorYear").style.display="block";
    }
    else {
        result = true;
    }
}

function ValidateName() {
    var value = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(value.length==0){
    document.getElementById("errorName").style.display="block";
    }
    else if (!value.match(regex)){
    document.getElementById("errorName").innerHTML="Invalid Name";    
    }
    else
    {
        result = true;
    }
}

function ValidateAddress() {
    var value = document.getElementById("txtAddress").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!value.match(regex)) {
        document.getElementById("errorAddress").style.display="block";    
    }
    else if (!value.match(regex)){
    document.getElementById("errorAddress").innerHTML="Invalid Address";    
    }    
    else
    {
        result = true;
    }
}
function ValidateCity() {
    var value = document.getElementById("txtTown").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if(value.length==0){
    document.getElementById("errorTown").style.display="block";    
    }
    else if (!value.match(regex)){
    document.getElementById("errorTown").innerHTML="Invalid City";   
    }
    else
    {
        result = true;
    }
}

function ValidatePhoneNo() {
    var value = document.getElementById("txtPhone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(value.length==0){
    document.getElementById("errorPhone").style.display="block";    
    }
    else if (!value.match(regex)){
    document.getElementById("errorPhone").innerHTML="Invalid PhoneNumber"; 
    }
    else
    {
        result = true;
    }
}


function ValidateFax() {
    var value = document.getElementById("txtFax").value;
    var regex = /^\+?[0-9]{6,}$/;
    if (!value.match(regex)){
    document.getElementById("errorFax").innerHTML="Invalid Faxnumber";    
    }
    else
    {
        result = true;
    }
}

function ValidateEmail() {
    var value = document.getElementById("txtEmail").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.length==0){
    document.getElementById("errorEmail").style.display="block";    
    }
    else if (!value.match(regex)){
    document.getElementById("errorEmail").innerHTML="Invalid Email"; 
    }
    else
    {
        result = true;
    }
}
function ValidatePincode() {
    var value = document.getElementById("txtPincode").value;
    var regex = /^\d{6}$/;
    if(value.length==0){
    document.getElementById("errorPincode").style.display="block";    
    }
    else if (!x.match(regex)){
    document.getElementById("errorPincode").innerHTML="Invalid Pincode";    
    }
    else
    {
        result = true;
    }
}
function CancelOperation() {
    alert("Payment Cancelled");
}
function SubmitOperation()
{
    CardValidation();
    ValidateSecurityCode();
    ValidateExpiryMonth();
    ValidateExpiryYear();
    ValidateName();
    ValidateAddress();
    ValidateCity();
    ValidatePincode();
    ValidateFax();
    ValidateEmail();
}
