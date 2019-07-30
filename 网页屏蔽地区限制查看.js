	<script type="text/javascript" src="http://ip.ws.126.net/ipquery"></script>
	<script>
		//用到一个判断IP的链接，这个哪里都有可以自己找，下面判断变量换一下就好
		var system ={
			win : false,
			mac : false,
			xll : false
		};
		var p = navigator.platform;
		system.win = p.indexOf("Win") == 0;
		system.mac = p.indexOf("Mac") == 0;
		system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		if(system.win||system.mac||system.xll){
			
		} else {
			if(lc=="北京市"||lc=="上海市"||lc=="广州市"||lc=="深圳市"){ 
			} else {
				window.location.href=' ';  
			}
		}   
	</script>