/**
 * Created by Administrator on 2017/8/26.
 */
window.onload = function () {
    banner();

}

window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var header = document.getElementsByClassName('jd_header_box')[0];
    if(scrollTop >= 50){
        header.style.background = 'rgba(218, 9, 0, 0.8)';
    }else{
        header.style.background = 'rgba(0, 0, 0, 0.01)';
        /*var r = (Math.random()*10)/20;
         h = 'rgba(218,9,0,'+r+')';
         console.log(h)
         header.style.background = h;*/
    }
}

/*轮播图*/
function banner() {

    var banner = document.querySelector('.screen');
    /*获取设备宽度*/
    var offsetWidth = banner.offsetWidth;
    /*图片容器*/
    var imageBox = banner.querySelector('ul:first-child');
    /*分页容器*/
    var pageBox = banner.querySelector('ul:last-child');
    /*获取分页容器所有的点*/
    var pages = pageBox.querySelectorAll('li');
    /*广告容器*/
    var newList = document.getElementsByClassName('new_list')[0];
    var offsetHeight = newList.offsetHeight;
    console.log(offsetHeight)


    /*给图片容器添加过渡动画属性*/
    function addTransition() {
        imageBox.style.transition = 'all 0.5s';
        imageBox.style.webkitTransition = 'all 0.5s';
        newList.style.transition = 'all 0.5s';
        newList.style.webkitTransition = 'all 0.5s';
    }

    /*清除图片容器添加过渡动画属性*/
    function removeTransition() {
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
        newList.style.transition = 'none';
        newList.style.webkitTransition = 'none';
    }

    /*设置X轴定位*/
    function setTranslateX(offsetX) {
        imageBox.style.transform = 'translateX(' + offsetX + 'px)';
        imageBox.style.webkitTransform = 'translateX(' + offsetX + 'px)';
    }

    /*设置Y轴定位*/
    function setTranslateY(offsetY) {
        newList.style.transform = 'translateX(' + offsetY + 'px)';
        newList.style.webkitTransform = 'translateX(' + offsetY + 'px)';
    }


    //定义当前索引
    var index = 1;
    var timer = setInterval(function () {
     index++;
     addTransition();
     setTranslateX(-index * offsetWidth)
     setPage()
     }, 2000)

    transVar.transitionEnd(imageBox, function () {
        if (index >= 9) {
            index = 1;
            removeTransition();
            setTranslateX(-index * offsetWidth);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-index * offsetWidth);
        }

    })

    function setPage() {
        for (var i = 0; i < pages.length; i++) {
            pages[i].className = '';
        }
        var num = index;
        if (index >= 9) {
            num = 1;
        } else if (index <= 0) {
            num = 8;
        }
        pages[num - 1].className = 'now'
    }
//图片滑动
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isMove = false;

    imageBox.addEventListener('touchstart',function(e){
        clearInterval(timer)
        startX = e.touches[0].clientX;
    });

    imageBox.addEventListener('touchmove',function(e){
        moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        var translateX = -index * offsetWidth + distanceX;
        isMove = true;
        removeTransition();
        setTranslateX(translateX)
    });

    imageBox.addEventListener('touchend',function(e){
        if (Math.abs(distanceX) > offsetWidth / 3 && isMove) {
            if (distanceX > 0) {
                index--
            } else {
                index++
            }
        }
        addTransition();
        setTranslateX(-index * offsetWidth);
        setPage();

        //重置
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
        //加自动轮播
        timer = setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-index * offsetWidth);
            //同步设置css
            //底层异步操作
            setPage()
        }, 2000)
    });


    //广告翻滚
    var li = newList.getElementsByTagName('li');
    var i = 1;

    setInterval(function(){
        i++;
        if(i==1){
            newList.style.transition = 'all 0.5s';
            newList.style.transform = 'translateY(0px)';
        } else if(i==2){
            newList.style.transition = 'all 0.5s';
            newList.style.transform = 'translateY(-23px)';
        }else if(i==3){
            i=0;
            newList.style.transform = 'translateY(-46px)';
        }

    },2000);


    //倒计时
    setInterval(function(){
        var endDate = new Date('2017/8/30 11:00:00');
        var timeDiv = document.getElementById('time');

        var totalseconds = parseInt((endDate - new Date()) / 1000);
        var Hour = parseInt(totalseconds / 3600) % 24;
        var Minute = parseInt(totalseconds / 60) % 60;
        var second = totalseconds % 60;
        timeDiv.innerHTML = returnMinute(Hour,Minute,second);

        function returnMinute(Hour,Minute,second) {
            return addzero(Hour) + ':' + addzero(Minute) + ':' + addzero(second);
        }

        function addzero(num) {
            return num >= 10 ? num : '0' + num;
        }
    },1000);




    }

