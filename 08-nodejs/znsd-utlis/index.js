const dateFormat=require('./src/dateForm');
const htmlEscape=require('./src/htmlEscape');



module.exports={
    ...dateFormat,
    ...htmlEscape,
}