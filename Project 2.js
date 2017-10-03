/* CÀI ĐẶT CHO PHẦN MOVEMENT-PART */
var result=1;
function next(){
	if(result==5){
		result=1;
	}
	result++;
	document.image.src="Introduction/0"+ result + ".jpg";
}
function back(){
	if(result==1){
		result=5;
	}
	result--;
	document.image.src="Introduction/0"+ result + ".jpg";
}
setInterval("next()",100000);
// KIỂM TRA ĐĂNG NHẬP
function KTDN(){
	var frm=document.forms["dangnhap"];
	var user=frm["username"].value;
	var psw =frm["psw"].value;
	
	if(user != "MrKhuong" || psw !="521997"){
		document.getElementById('loi-psw').innerHTML="Tài khoản hoặc mật khẩu không chính xác";
		return false;
	}
	return true;
}
// KIỂM TRA ĐĂNG KÝ
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
// GẮN GIÁ TRỊ
	var psw=frm2["psw"].value;
	var repsw=frm2["psw2"].value;
	if(psw!=repsw){
		document.getElementById('loi-psw2').innerHTML="Mật khẩu không giống nhau. Mời nhập lại";
		return false;
	}
}
// CÀI ĐẶT CHO PHẦN THÔNG BÁO KHI THÍCH
function Close(){
	document.getElementById('myModalPlaylist').style.display="none";
}
function Open(){
	var frm=document.forms["dangnhap"];
	var user=frm["username"].value;
	var psw =frm["psw"].value;
	if(user=="" || psw==""){
		document.getElementById('message').style.display="block";
	}
}
function Exit(){
	document.getElementById('message').style.display="none";
}
// THIẾT LẬP CHO PHẦN THÊM BÀI HOẶC VIDEO VÀO PLAYLIST
function AddToPlaylist(itemToAdd){
	var frm=document.forms["dangnhap"];
	var user=frm["username"].value;
	var psw =frm["psw"].value;
	
	if(user=="" || psw==""){
		alert("Bạn phải đăng nhập tài khoản trước");
	}
}
// TÌM XEM ĐÃ CÓ TRÙNG BÀI HÁT/ VIDEO TRONG PLAYLIST
function FindIfExists(obj,id){
	var TheNodeList=obj.getElementsByTagName('div');
	for(var NodeNumber=0;NodeNumber<TheNodeList.length;NodeNumber++){
		if(TheNodeList[NodeNumber].id===id){
			return NodeNumber+1;
		}
	}
	return 0;
}
// HIỂN THỊ PLAYLIST
function ShowCart(){
	var TheCartItem=document.getElementById('playlistItemImages');
	var TheRemoveItem=document.getElementById('playlistItemRemove');
	var TheContentItem=document.getElementById('playlistItemContent');
	var TheSingerItem=document.getElementById('playlistItemSinger');
	var TheTypeItem=document.getElementById('playlistItemType');

	var TheContentNodeList=TheContentItem.getElementsByTagName('div');
	var TheSingerNodeList=TheSingerItem.getElementsByTagName('div');
	var TheTypeNodeList=TheTypeItem.getElementsByTagName('div');
	var TheRemoveNodeList=TheRemoveItem.getElementsByTagName('div');
	var TheImageNodeList=TheCartItem.getElementsByTagName('div');
	for(var i=0;i<TheImageNodeList.length;i++){
		TheImageNodeList[i].style.position="absolute";
		TheImageNodeList[i].style.top=(100*i)+"px";
		TheImageNodeList[i].style.left=(0)+"px";
		TheImageNodeList[i].style.paddingLeft=(50)+"px";

		TheContentNodeList[i].style.position="absolute";
		TheContentNodeList[i].style.top=(100*i)+"px";
		TheContentNodeList[i].style.left=(266)+"px";
		TheContentNodeList[i].style.padding=(20)+"px";

		TheSingerNodeList[i].style.position="absolute";
		TheSingerNodeList[i].style.top=(100*i)+"px";
		TheSingerNodeList[i].style.left=(532)+"px";
		TheSingerNodeList[i].style.padding=(20)+"px";

		TheTypeNodeList[i].style.position="absolute";
		TheTypeNodeList[i].style.top=(100*i)+"px";
		TheTypeNodeList[i].style.left=(798)+"px";
		TheTypeNodeList[i].style.paddingLeft=(100)+"px";

		TheRemoveNodeList[i].style.position="absolute";
		TheRemoveNodeList[i].style.top=(100*i)+"px";
		TheRemoveNodeList[i].style.left=(1064)+"px";
		TheRemoveNodeList[i].style.paddingLeft=(110)+"px";
	}
}
// THÊM TÊN BÀI HÁT
function AddContentObj(itemToContent){
	var TheItemContent=document.getElementById('playlistItemContent');
	var TheCartItem=document.getElementById("CartItem" + itemToContent);
	var TheContentDiv= document.createElement('div');
	var TheContent=document.createTextNode(TheCartItem.getAttribute("data-content"));
	TheContentDiv.id='ContentItem'+ itemToContent;
	TheContentDiv.appendChild(TheContent);
	TheItemContent.appendChild(TheContentDiv);
}
// THÊM TÊN CA SĨ
function AddSingerObj(itemToSinger){
	var TheItemSinger=document.getElementById('playlistItemSinger');
	var TheCartItem=document.getElementById("CartItem" + itemToSinger);
	var TheSingerDiv= document.createElement('div');
	var TheContent=document.createTextNode(TheCartItem.getAttribute("data-singer"));
	TheSingerDiv.id='SingerItem'+ itemToSinger;
	TheSingerDiv.appendChild(TheContent);
	TheItemSinger.appendChild(TheSingerDiv);
}
// THÊM ĐỊNH DẠNH LÀ MP3 HAY MP4
function AddTypeObj(itemToType){
	var TheItemType=document.getElementById('playlistItemType');
	var TheCartItem=document.getElementById("CartItem" + itemToType);
	var TheTypeDiv= document.createElement('div');
	var TheType=document.createTextNode(TheCartItem.getAttribute("data-type"));
	TheTypeDiv.id='TypeItem'+ itemToType;
	TheTypeDiv.appendChild(TheType);
	TheItemType.appendChild(TheTypeDiv);
}
// XÓA BÀI HÁT/ VIDEO RA KHỎI PLAYLIST
function ReMoveCartItem(item){
	var obj=document.getElementById("CartItem"+item);
	obj.parentNode.removeChild(obj);
	obj=document.getElementById('RemoveItem'+item);
	obj.parentNode.removeChild(obj);
	obj=document.getElementById('SingerItem'+item);
	obj.parentNode.removeChild(obj);
	obj=document.getElementById('TypeItem'+item);
	obj.parentNode.removeChild(obj);
	obj=document.getElementById('ContentItem'+item);
	obj.parentNode.removeChild(obj);
}
function AddRemoveObj(itemToRemove){
	var TheCartItemRemove=document.getElementById('playlistItemRemove');
	var TheRemoveDiv=document.createElement('div');
	var TheRemoveIamge=document.createElement('img');
	TheRemoveDiv.id='RemoveItem'+ itemToRemove;
	TheRemoveIamge.src="images.png";
	TheRemoveIamge.height=50;
	TheRemoveIamge.onclick=function(){ReMoveCartItem(itemToRemove);};
	TheRemoveDiv.appendChild(TheRemoveIamge);
	TheCartItemRemove.appendChild(TheRemoveDiv);
}