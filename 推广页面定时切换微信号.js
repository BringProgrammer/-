var mess2 = "";
var span = 1; 
day = new Date();
date = day.getDate();
hr = day.getHours();
m = day.getMinutes();

var arr= { "0~24":["wxh"] }
var arr1= { "0~24":["wxh"]}

if(date=="14"){
	getmsg(arr);
}else{
	getmsg(arr1);
}

function getmsg(msg){
for (var name in msg) {
	var strs = name.split('~');
	if(strs.length!=2){
		break;
	}
	var l = parseInt(strs[0]);
	var r = parseInt(strs[1]);

	if (hr >= l && hr < r) {
		mess2 = getWXNumber(msg[name]);
		console.log(mess2);
	}
}
}


function getWXNumber(arr) {
	var index = -1;
	for (var i = 0; i < 60; i++) {

		var ys = i % span;
		if (ys == 0) {
			index++;
		}
		if (i == m) {
			break;
		}
	}

	var len = arr.length;
	var sindex = index + 1;

	if (sindex > len) {

		var l = Math.ceil(sindex / len);

		var k = len - (l * len - sindex) - 1;

		index = k < 0 ? 0 : k;
		return arr[index];

	} else if (index < 0) {
		return arr[0];
	} else {
		return arr[index];
	}

}