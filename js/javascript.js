// function ok(ab) 
// {	
// 	document.getElementsByClassName("drop") [0] .style.height="0px";
// 	document.getElementsByClassName("drop") [1] .style.height="0px";
// 	document.getElementsByClassName("drop") [2] .style.height="0px";
// 		document.getElementsByClassName("open") [0] .innerHTML="+";
// 		document.getElementsByClassName("open") [1] .innerHTML="+";
// 		document.getElementsByClassName("open") [2] .innerHTML="+";
// 	if (ab==1) 
// 	{
// 		document.getElementsByClassName("drop") [0] .style.height="150px";
// 		document.getElementsByClassName("open") [0] .innerHTML="-";
// 	}
// 	if (ab==2) 
// 	{
// 		document.getElementsByClassName("drop") [1] .style.height="150px";
// 		document.getElementsByClassName("open") [1] .innerHTML="-";
// 	}
// 	if (ab==3) 
// 	{
// 		document.getElementsByClassName("drop") [2] .style.height="150px";
// 		document.getElementsByClassName("open") [2] .innerHTML="-";
// 	}
// }

function ok(ab)
{
	for (var i =0; i<=2; i++) {
		document.getElementsByClassName("drop") [i].style.height="0px";
		document.getElementsByClassName("open") [i].innerHTML="+";
	}

document.getElementsByClassName("drop") [ab-1].style.height="150px";
document.getElementsByClassName("open") [ab-1].innerHTML="-";
}

$(window).scroll(function() {
    // alert($(window).scrollTop());
    // alert($(".strip").offset().top);
  if ($(window).scrollTop() >= 100) {
    $(".strip").addClass("fix-nav");
  } else {
    $(".strip").removeClass("fix-nav");
  }
});
