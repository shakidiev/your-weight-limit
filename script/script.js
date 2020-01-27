let weight = prompt("введите ваш вес в кг");
let height = prompt("введите ваш рост в метрах");
let age =prompt("введите ваш возраст");
let formula = weight/(height*height);
let groupNumber ;

if(age >= 18 && age <=25) {
	groupNumber = 1;
} else if(age >=26 && age <=46){
	groupNumber =2;
} else {
	groupNumber =3;
}
// groupNumber 1
if(groupNumber === 1 && formula < 18) {
	alert("Недостаточен, опасно для здоровья")
} else if ( groupNumber === 1 && formula >=18 && formula < 19) {
	alert("Ваш вес слегка снижен, неопасно для здоровья")
} else if (groupNumber === 1 && formula >= 20 && formula < 23){
	alert("Ваш вес нормальный")
} else if (groupNumber === 1 && formula >=23 && formula < 27) {
	alert("Ваш вес излишний")
} else if (groupNumber === 1 && formula >= 27 && formula < 30) {
	alert("У вас ожирение 1 степени")
} else if (groupNumber === 1 && formula >= 30 && formula < 35) {
	alert("У вас ожирение 2 степени")
} else if (groupNumber === 1 && formula >= 35 && formula < 40) {
	alert("У вас ожирение 3 степени")
} else if (groupNumber === 1 && formula > 40) {
	alert("У вас ожирение 4 степени")
} 
//groupNumber 2
if(groupNumber === 2 && formula < 19) {
	alert("Недостаточен, опасно для здоровья")
} else if ( groupNumber === 2 && formula >=19 && formula < 20) {
	alert("Ваш вес слегка снижен, неопасно для здоровья")
} else if (groupNumber === 2 && formula >= 20 && formula < 26){
	alert("Вваш вес нормальный")
} else if (groupNumber === 2 && formula >=26 && formula < 28) {
	alert("Ваш вес излишний")
} else if (groupNumber === 2 && formula >= 28 && formula < 31) {
	alert("У вас ожирение 1 степени")
} else if (groupNumber === 2 && formula >= 31 && formula < 36) {
	alert("У вас ожирение 2 степени")
} else if (groupNumber === 2 && formula >= 36 && formula < 41) {
	alert("У вас ожирение 3 степени")
} else if (groupNumber === 2 && formula > 41) {
	alert("У вас ожирение 4 степени")
}
//groupNumber 3 
if(groupNumber === 3 ){
	alert("ваши данные не были найдены")
}


