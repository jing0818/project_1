var next=document.querySelector('.next');
var ul=document.querySelector('ul');
var banner=document.querySelector('.banner');
var last=document.querySelector('.last');
var lis=null;
var sum=banner.offsetWidth;
var size=0;
next.addEventListener('click',nextImg);
last.addEventListener('click',lastImg);

function nextImg(){
    sum+=banner.offsetWidth;
    animate(ul,-sum,nextImgH);
    console.log(sum);
}
function lastImg(){
    sum-=banner.offsetWidth;
    console.log(sum);
    animate(ul,-sum,lastImgH);
    
}

function nextImgH(){
    if(size==lis.length-1){
        sum=banner.offsetWidth;
        console.log(sum);
        size=0;
        ul.style.left=-sum+'px';
    }else{
        size++;
    }
    console.log(size);
}
function lastImgH(){
    
    if(size==0){
        sum=lis.length*banner.offsetWidth;
        console.log(sum);
        var str=-sum+'px';
        console.log(str);
        ul.style.left=str;
        size=lis.length;
    }else{
        size--;
    }
    console.log(size);
}

//页面加载之后给轮播图追加按钮
window.addEventListener('load',function(){
    let lis=ul.children;
    var ol=document.createElement('ol');
    for(var i=0;i<lis.length;i++){
        var li=this.document.createElement('li');
        li.setAttribute('data-index',i)
        ol.appendChild(li);
        li.innerHTML=1;
    }
    ol.className="ol";
    banner.appendChild(ol);

    
})


//追加图片
window.addEventListener('load',function(){
    console.log(ul);
    let li=this.document.createElement('li');
    let a=this.document.createElement('a');
    let img=this.document.createElement('img');
    li.appendChild(a);
    a.appendChild(img);
    img.src='./image/focus3.jpg';
    ul.insertBefore(li,ul.children[0]);


    let li2=this.document.createElement('li');
    let a2=this.document.createElement('a');
    let img2=this.document.createElement('img');
    li2.appendChild(a2);
    a2.appendChild(img2);
    img2.src='./image/focus.jpg';
    ul.appendChild(li2);



    

    ul.style.left=-banner.offsetWidth+'px';
})

// 给轮播图按钮添加事件
window.addEventListener('load',function(){
    lis=document.querySelector('.ol').children;
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener('click',function(){
            let i=this.getAttribute('data-index')-size;
            // console.log(i*banner.offsetWidth);
            
            size=this.getAttribute('data-index');
            sum=sum+(i*banner.offsetWidth);
            // console.log(sum);
            animate(ul,-sum);
            
        })
    }
    // console.log(lis);
})


// for(var i=0;i<lis.length;i++){
//     lis[i].addEventListener('click',function(){
//         console.log(123);
//     })
// }