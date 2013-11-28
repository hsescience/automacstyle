statusperson = false;
filialflag = false;
facultyon = false;

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
	filialznach[4] = "Санкт-Петербург";
var facultyznach = new Array(); //осторожно, зависит от верхнего

for(var i=0; i<5; i++){
    facultyznach[i] = new Array();
}

facultyznach[0][0] = "Факультет истории";
facultyznach[0][1] = "Факультет медиакоммуникаций";
facultyznach[0][2] = "Факультет мировой экономики и мировой политики";
facultyznach[0][3] = "Факультет прикладной политологии";
facultyznach[0][4] = "Отделение интегрированных коммуникаций";
facultyznach[0][5] = "Факультет психологии";
facultyznach[0][6] = "Факультет социологии";
facultyznach[0][7] = "Факультет филологии";
facultyznach[0][8] = "Факультет философии";
facultyznach[0][9] = "Отделение востоковедения";
facultyznach[0][10] = "Отделение культурологии";
facultyznach[0][11] = "Факультет дизайна";
facultyznach[0][12] = "Факультет бизнес-информатики";
facultyznach[0][13] = "Факультет государственного и муниципального управления";
facultyznach[0][14] = "Факультет логистики";
facultyznach[0][15] = "Факультет менеджмента";
facultyznach[0][16] = "Факультет экономики";
facultyznach[0][17] = "Отделение статистики, анализа данных и демографии";
facultyznach[0][18] = "Совместный бакалавриат ВШЭ и РЭШ";
facultyznach[0][19] = "Международный институт экономики и финансов";
facultyznach[0][20] = "Отделение прикладной математики и информатики";
facultyznach[0][21] = "Отделение программной инженерии";
facultyznach[0][22] = "Факультет математики";
facultyznach[0][23] = "Факультет филологии";


facultyznach[1][0] = "Факультет информационных технологий и вычислительной техники";
facultyznach[1][1] = "Факультет прикладной математики и кибернетики";
facultyznach[1][2] = "Факультет электроники и телекоммуникаций";

facultyznach[2][0] = "Факультет гуманитарных наук";
facultyznach[2][1] = "Факультет права";
facultyznach[2][2] = "Факультет истории";
facultyznach[2][3] = "Факультет бизнес-информатики и прикладной математики";
facultyznach[2][4] = "Факультет менеджмента";
facultyznach[2][5] = "Факультет экономики";

facultyznach[3][0] = "Факультет бизнес-информатики";
facultyznach[3][1] = "Социально-гуманитарный факультет";
facultyznach[3][2] = "Факультет менеджмента";
facultyznach[3][3] = "Факультет экономики";

facultyznach[4][0] = "Факультет социологии";
facultyznach[4][1] = "Юридический факультет";
facultyznach[4][2] = "Отделение прикладной политологии";
facultyznach[4][3] = "Факультет истории";
facultyznach[4][4] = "Факультет менеджмента";
facultyznach[4][5] = "Факультет экономики";

 


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
				{height:"+=195px"},500);
			filialflag = true;
	}
}

function filialitemclick(numberelement) {
	document.getElementById("filialtext").innerHTML = filialznach[numberelement];
	document.auto.filial.value = numberelement;
	//alert(document.auto.status.value);

	$('.listfilial').animate(
				{height:"-=195px"},500
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

function facultyonclick() {
	if (facultyon==false) {
		alert("Выбирите сначала филиал НИУ ВШЭ");
		
	}
}