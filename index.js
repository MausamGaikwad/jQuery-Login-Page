$(document).ready(function() {
    $("#log-in-button").click(function(){
        var username=$("#username").val();
        var password=$("#password").val();
        var result=$("#result");
    
        if(username === 'demo'&& password === 'password')
        {
            result.html("<p>Login Succesfull</p>");
        }
        else{
            result.html("<p>Login failed. Please check your username and password.</p>");
        }
    });

});
