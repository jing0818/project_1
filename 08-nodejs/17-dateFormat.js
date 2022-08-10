// 定义格式化时间的方法

function dateFormat(dtStr) {
    const dt = new Date(dtStr);


    const y = dt.getFullYear();
    const m = padZerx(dt.getMonth() + 1);
    const d = padZerx(dt.getDate());

    const hh = padZerx(dt.getHours());
    const mm = padZerx(dt.getMinutes());
    const ss = padZerx(dt.getSeconds());

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

// 定义补零的函数
function padZerx(n) {
    return n > 9 ? n : '0' + n;
}

module.exports={
    dateFormat
}