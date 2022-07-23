fetch('https://1d25-111-199-191-35.jp.ngrok.io/table-one.json')
.then(Response => Response.json())
.then(data =>{
    // console.log(data)
    var sj = data.data;
    var sjCon = [...sj];//返回数据内容
    // console.log(sjCon)
    var title = document.getElementById('title');
    
    var a = '';
    for(let i = 0 ; i < sjCon.length; i++){
        // console.log(sjCon[i].name);
        var thDate = document.getElementById('thdate');
        var date = new Date(sjCon[i].time);
        var year = date.getFullYear();//年
        // console.log(year)
        var month = date.getMonth() + 1;//月
        // console.log(month)
        var day = date.getDate()//日;
        // console.log(day)
        var hours = date.getHours();//小时
        // console.log(hours)
        var minites = date.getMinutes()//分
        // console.log(minites)
        var seconds = date.getSeconds()//秒
        // console.log(seconds)
        var time = year + '年' + format(month) + '月' + format(day) + ' ' + format(hours) + '时' + format(minites)+ '分' + format(seconds) + '秒'
        // console.log(time)
        function format(num){//format()函数主要用于对字符串进行格式化
            if( num < 10 ){
                return '0' + num;
            }else{
                return num;
            }
        }
        a = a + '<tr><td>'+ sjCon[i].name +'</td><td>'+ sjCon[i].url +'</td><td>'+ time +'</td></tr>';
    }
    title.innerHTML = a;
    // [3n, 3n+2]
    // 0:[0, 2] 1:[3,5] 
})