statusperson = false;


var statusznach = new Array();
	statusznach[0] = "Абитуриент НИУ ВШЭ";
	statusznach[1] = "Студент НИУ ВШЭ";
	statusznach[2] = "Преподаватель НИУ ВШЭ";
	statusznach[3] = "Сотрудник НИУ ВШЭ";
	statusznach[4] = "Родитель абитуриента НИУ ВШЭ";
	statusznach[5] = "Родитель студента НИУ ВШЭ";

function statusonclick() {
	if(statusperson==false) {

			
			$('.liststatus').css("visibility", "visible");
  
			$('.liststatus').animate(
				{height:"+=233px"},500);
			statusperson = true;
	}
}