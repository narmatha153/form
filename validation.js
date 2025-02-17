function form()
{
     var username=document.getElementById("username").value
     var password=document.getElementById("password").value
     var email=document.getElementById("email").value
     var address=document.getElementById("address").value
     var contact=document.getElementById("contact").value
     var nameerror=document.getElementById("nameerror")
     var passworderror=document.getElementById("passworderror")
     var emailerror=document.getElementById("emailerror")
     var addresserror=document.getElementById("addresserror")
     var contacterror=document.getElementById("contacterror")
     nameerror.textContent="";
     passworderror.textContent="";
     emailerror.textContent="";
     addresserror.textContent="";
     contacterror.textContent="";
     if(username=="" || (/\d/.test(username)))
        {
            nameerror.textContent="please enter the name properly"
            return false;
        }
        if(password=="" || (password.length<8))
            {
                passworderror.textContent="please enter your password minimun 6 characters"
                return false;
            }
            
            if(email=="" || !email.includes("@"))
                {
                    emailerror.textContent="please enter the email with @"
                    return false;
                }
                
                if(address=="")
                    {
                        addresserror.textContent="please enter the address "
                        return false;
                    }
                    
                    if(contact=="" || (contact.length<10))
                        {
                            contacterror.textContent="please enter your 10 digit contact number "
                            return false;
                        }
     return true;  
}