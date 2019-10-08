window.onload = function(){
    //1:获取标签
    let accountLogin = document.getElementById("accountLogin");
    let searchLogin = document.getElementById("searchLogin");

    let tabs_icon1  = document.getElementsByClassName("tabs_icon1")[0];
    let tabs_icon2  = document.getElementsByClassName("tabs_icon2")[0];

    accountLogin.onclick = function () {
        this.style.color ="#ff6700";
        searchLogin.style.color ="#666";
        tabs_icon1.style.display = "block";
        tabs_icon2.style.display = "none";
    }

    searchLogin.onclick = function () {
        this.style.color ="#ff6700";
        accountLogin.style.color ="#666";
        tabs_icon1.style.display = "none";
        tabs_icon2.style.display = "block";
    }
}


