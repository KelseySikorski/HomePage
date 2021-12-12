function forms(){
  let one = document.forms["myForm"]["lname"].value;
  let two =document.forms["myForm"]["mail"].value;
  if(one == " " && two == " "){
    alert("Name and email needs be filled out");
    return false;
  }
}
function hello(){
  alert("The form was sumbitted");
}

document.getElementById('pic').onclick= see;
//Got the flower from google search  and this where it go https://www.bbc.com/news/science-environment-52204434

function see()
{
  document.body.style.backgroundImage="url('flower.jpg')";
  document.body.style.backgroundPosition ="center";
  document.body.style.backgroundRepeat="no-repeat";
}


document.getElementById("site").onclick = infor;
//go to a Video

function infor()
{
  location.href = "https://www.youtube.com/watch?v=salY_Sm6mv4";
}
