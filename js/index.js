window.onload = function () {
    //1:获取标签
    let rM = document.getElementsByClassName("rM")[0];//背景图片
    let rM_right = document.getElementsByClassName("rM_right")[0];
    let pre = document.getElementById("pre");
    let next = document.getElementById("next");

    let points = document.getElementsByClassName("point")//点

    //数组存放本地图片路径
    let imgArr = [
        './images/index_images/mi9-01.jpg',
        './images/index_images/056576955e6b8a936bbea4e3fc728a4b.jpg',
        './images/index_images/1b1d3d2a8e50d6445d471322b70d3aea.jpg'
    ]


    let imgLength = imgArr.length;//imgLength ：图片数

    //得到上一张图片得索引
    function goPre(index) {
        index--;
        if (index <0 ){
            index = imgLength-1;
        }
        return index;
    }

    //得到下一张图片的索引
    function goNext(index) {
        index++;
        if (index > imgLength-1 ){
            index = 0;
        }
        return index;
    }

    let currentIndex = 0;//currentIndex：当前图片索引

    function clearActive(){
        for(let i=0; i < imgLength ; i++){
            points[i].className = "point";
        }
    }

    //1.点的点击
    for(let i=0; i < imgLength ; i++){
        points[i].onclick =function () {
            currentIndex = i;

            rM.style.backgroundImage = 'url('  + imgArr[currentIndex] + ')';

            clearActive();
            points[currentIndex].className = "point active";
        }
    }

    //2.上一个/下一个按钮的点击
    pre.onclick = function () {
        currentIndex = goPre(currentIndex);

        //将上一张图片的索引给到背景url
        rM.style.backgroundImage = 'url('  + imgArr[currentIndex] + ')';

        clearActive();
        points[currentIndex].className = "point active";
    }
    next.onclick = function () {
        clearActive();
        currentIndex = goNext(currentIndex);

        //将上一张图片的索引给到背景url
        rM.style.backgroundImage = 'url('  + imgArr[currentIndex] + ')';
        points[currentIndex].className = "point active";
    }

    //3.自动轮播
    let id = setInterval(function () {
        next.onclick();
    }, 5000);
    rM_right.onmouseenter = function(){
        // 关闭定时器
        clearInterval(id);
    };
    rM_right.onmouseleave = function(){
        // 重新开启定时器
        id = setInterval(function () {
            next.onclick();
        }, 5000);
    };

    let header_nav = document.getElementsByClassName("header_nav")[0];
    let header_nav_lis = header_nav.getElementsByTagName("li");

    let hover_nav = document.getElementsByClassName("hover_nav")[0];
    let uls = hover_nav.getElementsByTagName("ul");

    for (let i=0; i< uls.length;i++){
        let header_nav_li = header_nav_lis[i];
        let ul = uls[i];

        header_nav_li.onmouseenter = function () {
            hover_nav.style.display = "block"
            ul.style.display = "block";
        }
        ul.onmouseenter = function () {
            hover_nav.style.display = "block"
            ul.style.display = "block";
        }

        header_nav_li.onmouseleave = function () {
            hover_nav.style.display = "none"
            ul.style.display = "none";
        }
        ul.onmouseleave = function () {
            hover_nav.style.display = "none"
            ul.style.display = "none";
        }
    }




}
