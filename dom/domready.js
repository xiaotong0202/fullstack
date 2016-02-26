// 可以参照主流框架中DOMReady的实现方式    百度搜索就行

function myReady(fn){
	//对于现代浏览器，对DOMContLoaded事件处理采用标准的事件绑定方式
	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded",fn,false);//在冒泡阶段捕获
	}else{

	}
	//IE模拟DOMContentLoaded
	function IEContentLoaded(fn){
		//确保该函数只执行一次
		var done = false;
		var d = document;
		var init = function(){
			if(!done){
				done = true;
				fn();
			}
		};

		(function(){
			try{
				//dom树未创建完之前调用doScoll会抛出异常
				d.documentElement.doScroll('left');
			}catch(e){
				//延迟再试一次
				setTimeout(arguments.callee，50);
				return;//实现递归
			}
		})();
		
		//监听document加载状态
		d.onreadystatechange = function(){
			//如果用户是在domReady之后绑定的函数，就立马执行
			if(d.readyState == 'complete'){
				d.onreadystatechange = null;
				init();
			}
		}
	}
}