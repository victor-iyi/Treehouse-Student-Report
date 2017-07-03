var msg = '';
var student;
var search;

while ( true ) {
	search = prompt('Search students record: type a name [Jody] (or "quit" to end)');
	if ( search === null || search.toLowerCase() === 'quit' ) break;
	students.forEach(function(student) {
		if ( student.name === search ) {
			msg = getStudentReport(student);
			print(msg);
		}
	});
}

function print(msg) {
	var output = document.getElementById("output");
	output.innerHTML = msg;
}

function getStudentReport(student) {
	var report = "<h2>Name: " + student.name + "</h2>";
	report += "<p>Track: " + student.track + "</p>";
	report += "<p>Achivements: " + student.achievements + "</p>";
	report += "<p>Points: " + student.points + "</p>";
	return report;
}



