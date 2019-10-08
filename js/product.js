window.onload = function () {
    //1:拿到需要
    let header = document.getElementsByTagName("header")[0];
    let nav_top = document.getElementsByClassName("nav_top")[0];

    //2：获取nav_top顶部的高度
    let headerHeight = header.offsetHeight;

    //3：监听网页的滚动
    window.onscroll =function () {
        //拿到滚动出去的距离
        let offsetY = getPageScroll().y;
        if(offsetY >= headerHeight){
            nav_top.style.position = "fixed";
            nav_top.style.top = "0px";
            nav_top.style.left = "0px";

        }else{
            nav_top.style.position = "";

        }
    }
}




