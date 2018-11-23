function myFirstApp(name, age) {
	
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

		function showSkills() {
			let skills = ['html','css','js','pascal','c#'];
			for (let i = 0; i < skills.length; i++) {
				document.write("Я владею " + skills[i] + '<br/>');
			}
		}
	showSkills()

		function checkAge(argument) {
			if (age>18) {
				alert("Еще не поздно поднапрячься и стать шикарным front-end разработчиком!");
			}else {
				alert("Самое время начать думать о будущем и погрузиться в программирование!");
			}
		}
	checkAge();

		function calcPow(number) {
			let a = number;
			console.log(a*a);
		}
	calcPow(6);

}
myFirstApp("Vladislav", 20);