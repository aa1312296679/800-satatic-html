//设置input默认值
var searchInputNormalValue="请输入您要搜索的内容";

$("#searchInput")[0].value=searchInputNormalValue;
$("#searchInput").focus(function () {
    if(this.value===searchInputNormalValue){
        this.value='';
    }
});
$("#searchInput").blur(function () {
    if(this.value===''){
        this.value=searchInputNormalValue;
    }
});