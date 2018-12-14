// function valid() {
// 	var state = $("input[name='sex']:checked").val();
// 		if (!state) {
// 			$("#message").show();
// 			return $("#message").html("<font style='color:red'>Укажите ваш пол</font><br>");
// 		}else if (state == "male") {
// 			$("#message").hide();
// 			alert(state + " male");	
// 		}else {
// 			$("#message").hide();
// 			alert(state + " female");
// 		}
// }

	var div = prompt("Введите число 1 или 2");
	while (div != 1 && div != 2) {
		div = prompt("Введите число 1 или 2");
	}
	
	$("#div").attr("class", "div_" + div);