//====================== JS最常用三种弹出对话框 ========================  
//弹出对话框并输出一段提示信息  
function ale() {
    //弹出一个对话框  
    alert("提示信息！");

}

//弹出一个询问框，有确定和取消按钮  
function firm() {
    //利用对话框返回的值 （true 或者 false）  
    if (confirm("你确定提交吗？")) {
        alert("点击了确定");
    } else {
        alert("点击了取消");
    }

}
//弹出一个输入框，输入一段文字，可以提交  
function prom() {
    var name = prompt("请输入您的名字", ""); //将输入的内容赋给变量 name ，  

    //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值  
    if (name) //如果返回的有内容  
    {
        alert("欢迎您：" + name)
    }

}
//====================== JS定制化弹出对话框 ========================  
// <窗口对象>.close(); //关闭指定的窗口
// <窗口对象>.open();
// 打开新窗口（window.open）

// open() 方法可以查找一个已经存在或者新建的浏览器窗口。

// 语法：

// window.open([URL], [窗口名称], [参数字符串])

// 参数说明:

// URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
// 窗口名称：可选参数，被打开窗口的名称。
//     1.该名称由字母、数字和下划线字符组成。
//     2."_top"、"_blank"、"_selft"具有特殊意义的名称。
//        _blank：在新窗口显示目标网页
//        _self：在当前窗口显示目标网页
//        _top：框架网页中在上部窗口中显示目标网页
//     3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
//     4.name 不能包含有空格。
// 参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
function dialog(){
    window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes');

}





// 参数表:

// 例如:打开http://www.imooc.com网站，大小为300px * 200px，无菜单，无工具栏，无状态栏，有滚动条窗口：

// <script type="text/javascript"> window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes')
// </script>

// 注意：运行结果考虑浏览器兼容问题。