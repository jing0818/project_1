
// 定义转义HTML字符的函数
function htmlEscape(dataStr){
    return dataStr.replace(/<|>|"|&/g,(match)=>{
        switch(match){
            case "<":
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case "&":
                return '&amp;'
        }
    })
}

// 定义还原HTML字符的函数
function htmlUnEscape(dataStr){
    return dataStr.replace(/&lt;|&gt;|&quot;|&amp;/g,(match)=>{
        switch(match){
            case "&lt;":
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case "&amp;":
                return '&'
        }
    })
}

module.exports={
    htmlEscape,
    htmlUnEscape
}