(function () {
    //
    navFixed();
})();

function navFixed(){
    //1：获取标签
    let nav_top = document.getElementsByClassName("nav_top");
    let header = document.getElementsByTagName("header");

    //2：监听事件
    window.addEventListener("scroll",function () {
        if (document.body.scrollHeight >= header.height){
            nav_top.style.position="fixed";
            nav_top.style.top="0";
        }
    })
}




