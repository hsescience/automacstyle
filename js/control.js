statusperson = false;
filialflag = false;

var statusznach = new Array();
	statusznach[0] = "Абитуриент НИУ ВШЭ";
	statusznach[1] = "Студент НИУ ВШЭ";
	statusznach[2] = "Преподаватель НИУ ВШЭ";
	statusznach[3] = "Сотрудник НИУ ВШЭ";
	statusznach[4] = "Родитель абитуриента НИУ ВШЭ";
	statusznach[5] = "Родитель студента НИУ ВШЭ";
var filialznach = new Array();
	filialznach[0] = "Москва";
	filialznach[1] = "МИЭМ";
	filialznach[2] = "Нижний Новгород";
	filialznach[3] = "Пермь";
	filialznach[4] = "ФДП";

function statusonclick() {
	if(statusperson==false) {

			
			$('.liststatus').show();
  
			$('.liststatus').animate(
				{height:"+=233px"},500);
			statusperson = true;
	}
}

function filialonclick() {
	if(filialflag==false) {

			
			$('.listfilial').show();
  
			$('.listfilial').animate(
				{height:"+=192px"},500);
			filialflag = true;
	}
}

function filialitemclick(numberelement) {
	document.getElementById("filialtext").innerHTML = filialznach[numberelement];
	document.auto.filial.value = numberelement;
	//alert(document.auto.status.value);

	$('.listfilial').animate(
				{height:"-=192px"},500
				,function(){
					$('.listfilial').hide();
					filialflag = false;
                }
			);
			
	
}




function statitemclick(numberelement) {
	document.getElementById("statustext").innerHTML = statusznach[numberelement];
	document.auto.status.value = numberelement;
	//alert(document.auto.status.value);

	$('.liststatus').animate(
				{height:"-=233px"},500
				,function(){
					$('.liststatus').hide();
					statusperson = false;
                }
			);
			
	
}