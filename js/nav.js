
var con = document.getElementsByClassName("content");
var content = [...con];//右侧需要切换的内容

// function handleCkick (index) {
//     // 1. 清除所有的class=active的类名
//     // htmlCollection 类数组
//     const domSlideCollect = document.getElementsByClassName("slide");
//     var contentBot = document.getElementsByClassName('content-bot')[0];
//     [...domSlideCollect].forEach((element, j) => {//forEach() 方法对数组的每个元素执行一次给定的函数。
//         // element 代表每一个Dom
//         // content[j].style.display = "none";
//         element.setAttribute('class', 'slide fclear')
//     });
//     // 2. 选中的Dom
//     // content[index].style.display = "block";
//     domSlideCollect[index].setAttribute('class', 'slide active fclear')
//     // contentBot.innerHTML = '<div class="content">'+ name +'</div>';
// }

const obj = {
  'content-1.html': 0,
  'content-2.html': 1,
  'content-3.html': 2,
  'content-4.html': 3,
  'content-5.html': 4,
  'content-6.html': 5,
}

// -----------------页面初始化------------------------------
fetch("https://1d25-111-199-191-35.jp.ngrok.io/nav.json")
  .then((response) => response.json())
  .then((data) => {
    var sj = data.data;// 代表返回导航的列表
    var slideBot = document.getElementsByClassName("slide-bot")[0];//代表返回导航列表的父级
    // 右侧第一个
    var locat = window.location.href; // content-1.html ==> string      当前页面的url
    // console.log(locat);
    var locatStr = locat.split('/')[locat.split('/').length - 1]
    // var contentBot = document.getElementsByClassName('content-bot')[0];//右侧切换内容的父级 
    var nav = "";
    for (let i = 0; i < sj.length; i++) {
        // console.log(sj[i]);
        // 证明：当前的html等于我当前的导航位置
      if (obj[locatStr] === i) {
        nav = nav + '<div class="slide active fclear"><i></i><p><a href="'+sj[i].url+'">' + sj[i].name + "</a></p></div>";
      } else {
        nav = nav + '<div class="slide fclear"><i></i><p><a href="'+sj[i].url+'">' + sj[i].name + "</a></p></div>";
      };
    }
    slideBot.innerHTML = nav;
    // contentBot.innerHTML = '<div class="content">'+ sj[0].name +'</div>';
  });



  // -----------------控制右侧内容区域------------------------------
//   var slide = document.getElementsByClassName("slide");
//   for (let i = 0; i < slide.length; i++) {
//       slide[i].onclick = function () {
//         // console.log(slide[i])
//         for (let j = 0; j < content.length; j++) {
//           content[j].style.display = "none";
//           slide[j].className = "slide";
//         }
//         content[i].style.display = "block";
//         slide[i].className = "active";
//       };
// }




