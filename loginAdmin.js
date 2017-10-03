function KTDN(){
	var frm=document.forms["dangnhap"];
	var user=frm["username"].value;
	var psw =frm["psw"].value;
	
	if(user != "admin" || psw !="admin"){
		document.getElementById('loi-psw').innerHTML="Tài khoản hoặc mật khẩu không chính xác";
		return false;
	}
	return true;
}