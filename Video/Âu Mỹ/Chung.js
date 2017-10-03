var result=1;
function next(){
	if(result==5){
		result=1;
	}
	result++;
	document.image.src="E:/The study/HTML + CSS + JS + BOOTRAP/Project 2/Introduction/0"+ result + ".jpg";
}
function back(){
	if(result==1){
		result=5;
	}
	result--;
	document.image.src="E:/The study/HTML + CSS + JS + BOOTRAP/Project 2/Introduction/0"+ result + ".jpg";
}
setInterval("next()",50000);

// Kiểm tra đăng nhập
function KTDN(){
	var frm=document.forms["dangnhap"];
	var user=frm["username"].value;
	var psw =frm["psw"].value;
	
	if(user != "anhkhuongbigk" || psw !="521997"){
		document.getElementById('loi-psw').innerHTML="Tài khoản hoặc mật khẩu không chính xác";
		return false;
	}
	return true;
}

// Kiểm tra đăng ký
function KTDK(){
	var frm2=document.forms["dangky"];
	var user=frm2["acc"].value;
	if(user.length > 15){
		document.getElementById('loi-acc').innerHTML="Tài khoản không hợp lệ";
		return false;
	}
	else{
		document.getElementById('loi-acc').style.display="none";	
	}

	var psw=frm2["psw"].value;
	var repsw=frm2["psw2"].value;
	if(psw!=repsw){
		document.getElementById('loi-psw2').innerHTML="Mật khẩu không giống nhau. Mời nhập lại";
		return false;
	}

}