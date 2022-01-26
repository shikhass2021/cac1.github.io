$(document).ready(function()
{
	$("#submit").hide();
$("#name").keyup(function()
{
if(validatename())
{
	 $("#name").css("border","4px solid green");
	 $("#messagename").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#name").css("border","4px solid red");
	$('#messagename').html("<p class='text-danger'>INCORRECT NAME</p>");
}
 buttonState();
});
$("#address").keyup(function()
{
	if(validateadd())
	{
$("#address").css("border","4px solid green");
$("#messageadd").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#address").css("border","4px solid red");
	$("#messageadd").html("<p class='text-danger'>__________________________________________________________________</p>")
}
buttonstate();
}); 

$("#email").keyup(function()
{
	if(validateemail())
	{
$("#email").css("border","4px solid green");
$("#messageemail").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#email").css("border","4px solid red");
	$("#messageemail").html("<p class='text-danger'>__________________________________________________________________</p>")
}
buttonstate();
});
});



function buttonstate()
{ $("#submit").hide();

	if (validatename() && validateadd() && validateemail()) {
		$("#submit").show();
	}
	else
	{
		$("#submit").hide();
	}
}
//+/s+[a-zA-Z]{5,20}
function validatename()
{
	var name=$("#name").val();
	var reg=/^([a-zA-Z]{3,20}) ([a-zA-Z]{2,20})+(\s*)$/;
	if(reg.test(name)){
             return true;
         }else{
             return false;
         }
}
function validateadd()
{
	var address=$("#address").val();
	var reg2=/^([a-zA-z0-9-#/(){}]{3,20})\s*(([a-zA-z0-9-#/(){}/]{1,20})\s*)*$/;
	if(reg2.test(address)){
             return true;
         }else{
             return false;
         }
}
function validateemail()
{
	var email=$("#email").val();
	var reg3=/^([a-zA-z0-9.]{4,20})@(c|C)hristuniversity.in$/;
	if(reg3.test(email))
	{
		return true;
	}
	else
	{
		return false;
	}

}