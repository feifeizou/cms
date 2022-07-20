
var con = document.getElementsByClassName("content");
var content = [...con];//右侧需要切换的内容

function handleCkick (index) {
    console.log(index, '<--------');
    // 1. 清除所有的class=active的类名
    // htmlCollection 类数组
    const domSlideCollect = document.getElementsByClassName("slide");
    [...domSlideCollect].forEach((element, j) => {//forEach() 方法对数组的每个元素执行一次给定的函数。
        // element 代表每一个Dom
        content[j].style.display = "none";
        element.setAttribute('class', 'slide fclear')
    });
    // 2. 选中的Dom
    content[index].style.display = "block";
    domSlideCollect[index].setAttribute('class', 'slide active fclear')
}

// -----------------页面初始化------------------------------
fetch("https://5890-111-199-191-35.jp.ngrok.io/nav.json")
  .then((response) => response.json())
  .then((data) => {
    // 代表返回导航的列表
    var sj = data.data;
    var slideBot = document.getElementsByClassName("slide-bot")[0];//代表返回导航列表的父级
    
    var a = "";
   
    for (let i = 0; i < sj.length; i++) {
        // console.log(sj[i]);
      if (i === 0) {
        a = a + '<div class="slide active fclear" onclick="handleCkick('+ i +')"><i></i><p>' + sj[i].name + "</p></div>";
      } else {
        a = a + '<div class="slide fclear" onclick="handleCkick('+ i +')"><i></i><p>' + sj[i].name + "</p></div>";
      };
      c = c + '<div class="content">'+ sj[i].url +'<div/>';
    }
    slideBot.innerHTML = a;
   
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




