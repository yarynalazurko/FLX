function formatTime(min){
	var days = Math.floor(min/1440);
	var hours = Math.floor((min - days*1440)/60);
	var minutes = min - days*1440 - hours*60;

	return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)";  
}
formatTime(2000);