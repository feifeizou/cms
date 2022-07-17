// var em = document.getElementById('em');  // DOM element
// var pw = document.getElementById('pw');
// // console.log(em)
// em.oninput = function(){ // 每一次输入的过程。
//     console.log(em.value)
// };
// pw.oninput = function(){
//     console.log(pw.value)
// };

// 获取输入框值
function geInputValue(){
    var em = document.getElementById('em').value;
    var pw = document.getElementById('pw').value;
    return {
        account: em,
        password: pw
    }
}

// 正确返回
// {
//     "code": 0,
//     "msg": "success",
//     "data": {
//         "token": "ZI2NFI2A02KDIUsdkz1333ssf"
//     }
// }

// 异常返回
// {
//     "code": -9999,
//     "msg": "error",
//     "data": {}
// }


// 变量 ===》 变化的量 ===》 每一次调用都有可能发生变化
// 常量 ===》 一直的量 ===》 每一次调用它的值都不会发生变化
var login = document.getElementsByClassName('login')[0];
//console.log(login)
login.onclick = function(){
    const params = geInputValue(); // { account: '??', password: '?????' }
    // 隔离
    // 1. get 请求如何添加参数？ MDN POST
    // get 请求传递参数一般： ?key1=value&key2=value
    fetch('https://1698-111-199-191-35.jp.ngrok.io/login.json?key1='+ params.account +'&key2='+ params.password +'')
    .then(response => response.json())
    .then(json =>{
        // ???
        if(json.code === 0){
            // 正确
            localStorage.setItem('token', json.data.token);
            alert('登录成功！');
        }else if(json.code === -1){
            alert(json.msg)
        }else{
            // 不正确
            alert('输入帐号或密码错误');
        }
    })
}







        