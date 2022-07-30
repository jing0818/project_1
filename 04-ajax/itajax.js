function resolveData(data){
    var arr=[];
    for(let i in data){
        var str=k+'='+data[i];
        arr.push(str);
    }
    return arr.join('&');
}

function itheima(options){
    let xhr=new XMLHttpRequest();

    let qs=resolveData(options.data);

    if(options.metod.toUpperCase()==='GET'){
        xhr.open(options.method,options.url+'?'+qs);
        xhr.send();
    }else if(options.method.toUpperCase()==='POST'){
        xhr.open(options.method,options.url);
        xhr.setRequestHeader('COntent-Type','application/x-www-form-urlencoded');
        xhr.send(qs);
    }


    xhr.onreadystatechange=function(){
        if(xhr.status===200 && xhr.readyState===4){
            let result=JSON.parse(xhr.responseText);
            options.success(result);
        }
    }



}