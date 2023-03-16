// Your Script here

var lookup{
	A ="N",B="O",C="P",D="Q",E="R",F="S",G="T",H,="U",I="V",J="W",K="X",L="Y",M="Z",
	N="A",O="B",P="C",Q="D",R="E",S="F",T="G",U="H",V="I",W="J",X="K",Y="L",Z="M","?"="?",
		","=",",};
function rot13(thirteen) {
	var word =  thirteen.split(" ");
	var answer = [];

	for(var i=0;i<word.length;i++){
        var data = answer[i];
		var ans_data = "";
		for(var j=0;j<data.length;j++){
            var char = data.charAt(i);   
			ans_data = ans_data+char;
		}
		answer.push(data);
	}
	return answer.join(" ");
}

module.exports = rot13;