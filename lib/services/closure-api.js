/**
 * http://usejsdoc.org/
 */
function showName(firstName, lastName){
	var nameIntro = "your name is ";
	
	function makeFullName(){
		return nameIntro + firstName + " " + lastName; 
	}
	
	return makeFullName();
	
}

showName("Kevin", "Wu ");