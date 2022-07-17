        var item = document.getElementsByClassName('item');
        var itemN =[...item]; //图片
        // console.log(itemN)
        var btnNum = document.getElementsByClassName('btnNum')
        var btn = [...btnNum];//圆点
        // console.log(btn)
        var i = 0;

        function changeStyle(current) {
            for(let j = 0 ; j < itemN.length; j++){
                itemN[j].style.display = 'none';
                btn[j].style.opacity = 0.6;
            }
            itemN[i].style.display = 'block';
            current.style.opacity = 1;
        }

        // 自动轮播
        /*
        * setInterval arg1：代表要执行的函数  arg2：时间间隔多久执行一次
        */
        setInterval(function () {
            changeStyle(btn[i]); // 01
            if (i >= btn.length - 1) {
                i = 0;
            } else {
                i++;
            }
        }, 1000)


        




        
        