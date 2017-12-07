document.getElementById("b1").addEventListener("click",throttle(inccnt,2000));//throttle function is called when the first button is clicked

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if (parseInt(document.getElementById("cnt").textContent)==0||(time + wait - Date.now()) < 0) /*Execute function if it is the first execution 
    																							or if previous execution was atleast 'wait' milliseconds before*/
    {
      fn();
      time = Date.now();
    }
  }
}
//Javascript closure has been used

function inccnt()  //Function to increase the content of main panel
{
	var x=document.getElementById("cnt");
	x.innerHTML=parseInt(x.textContent)+1;//parseInt parses the string returned by textContent and returns an integer
}