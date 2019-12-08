var messageHandles={
    // 隐藏头部的左边信息
    logoLeftHide(){
        $('#logo_left').hide();
    }
}

// 创建iframe通讯层
var cast = new BroadcastChannel('fsSend');
/**
 * message消息监听
 **/
cast.onmessage = function (e) {
    //获取父级需要调用的事件名
    var handleName=e.data.handleName;

    //根据事件名找到该事件处理函数
    var handle=getHandle(handleName,messageHandles);
    if(handle){
        //调用执行该父级需要调用的事件处理函数
        handle();
    }
};