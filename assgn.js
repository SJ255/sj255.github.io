document.getElementById("b1").addEventListener("click",throttle(inccnt,2000));//throttle function is called when the first button is clicked

function throttle(fn, wait) {
  var k=1;
  return function(){
    if(k==1)
    {
      fn();  //Execute fn only if k=1
      k=0;
      setTimeout(function(){k=1;},wait);// k will become 1 only after 'wait' seconds
    }
  }
}//Javascript closure has been used


function inccnt()  //Function to increase the content of main panel
{
	var x=document.getElementById("cnt");
	x.innerHTML=parseInt(x.textContent)+1;//parseInt parses the string returned by textContent and returns an integer
}