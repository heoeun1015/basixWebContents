
	//메뉴바 내림 j쿼리
	$(document).ready(function(){
		$(document).on("mouseover","#flip",function(){
			$("#panel").slideDown(200);
		});
		$(document).on("mouseleave","#flip",function(){
			$("#panel").slideUp(200);
		});
	});


function flash(){
	id = setInterval(changeImag, 1000);
} 

var i = 0;
function changeImag(){
	var arrImg = ["rank1.jpg","rank2.jpg","rank3.jpg","rank4.jpg","rank5.jpg"];
	i++;
	if(i > 4){
		i = 0;
	}
	document.getElementById("aa1-6").src = "./img/" + arrImg[i];
	document.getElementById("aa1-6").width = 235;
	document.getElementById("aa1-6").height = 40;
}

function chimg(){
	var src1 = document.getElementById("ad17").src;
	console.log(src1);
	var arr = src1.split('/');
	console.log(arr);
	if(decodeURI(arr[9]) =="버튼1.png"){
		document.getElementById("ad17").src = "./img/버튼2.png";
		document.getElementById("ad18").src = "./img/이미지2.png";
	}else{
		document.getElementById("ad17").src = "./img/버튼1.png";
		document.getElementById("ad18").src = "./img/이미지1.png";
	}
}




function div_1(){
	
	var src_1 = document.getElementById("iicon_1").src;
	var arr = src_1.split("/");
	if(decodeURI(arr[9]) == "241.png"){
		document.getElementById("iicon_1").src = "./img/231.png";
		document.getElementById("iicon_2").src = "./img/242.png";
		document.getElementById("iicon_3").src = "./img/243.png";
	}else{
		document.getElementById("iicon_1").src = "./img/241.png";
		document.getElementById("iicon_2").src = "./img/242.png";
		document.getElementById("iicon_3").src = "./img/243.png";
	}
}

function div_2(){
	
	var src_1 = document.getElementById("iicon_2").src;
	var arr = src_1.split("/");
	if(decodeURI(arr[9]) == "242.png"){
		document.getElementById("iicon_1").src = "./img/241.png";
		document.getElementById("iicon_2").src = "./img/232.png";
		document.getElementById("iicon_3").src = "./img/243.png";
	}else{
		document.getElementById("iicon_1").src = "./img/241.png";
		document.getElementById("iicon_2").src = "./img/242.png";
		document.getElementById("iicon_3").src = "./img/243.png";
	}
}


function div_3(){
	
	var src_1 = document.getElementById("iicon_3").src;
	var arr = src_1.split("/");
	if(decodeURI(arr[9]) == "243.png"){
		document.getElementById("iicon_1").src = "./img/241.png";
		document.getElementById("iicon_2").src = "./img/242.png";
		document.getElementById("iicon_3").src = "./img/233.png";
	}else{
		document.getElementById("iicon_1").src = "./img/241.png";
		document.getElementById("iicon_2").src = "./img/242.png";
		document.getElementById("iicon_3").src = "./img/243.png";
	}
}










