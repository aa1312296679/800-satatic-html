//被选中的tab选项卡
var activeIndex=0;

var headerTab={
    /**
     * tab切换处理
     * @param index 选中项
     */
    tabHandle:function(index) {
       // 获取被选中的tab选项卡
       var activeTabItem=$(".tabbar_item")[index];
       // tab选项卡处理
       $(activeTabItem).addClass("tabbar_item_active").siblings().removeClass("tabbar_item_active");
       activeIndex=index;
    }
}

//tab选中项初始化
initialTabbar(0);


//创建父窗口的通讯连接
let cast = new BroadcastChannel('fsSend');
// tabbar点击处理
$(".tabbar_item").click(function () {
    // 获取被选中的tab索引
    var curIndex = $(this).index();
    // tab头部切换处理
    headerTab['tabHandle'](curIndex);
    //将被选中的tab索引传递至父窗口
    cast.postMessage({curIndex:activeIndex});
});

/**
 * tabbar选中项初始化
 * @param activeIndex 被选中的tab选项卡索引
 * **/
function initialTabbar(activeIndex) {
    headerTab['tabHandle'](activeIndex);
}
