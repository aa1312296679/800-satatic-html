let bcc = new BroadcastChannel('fsSend');
// message事件处理
bcc.onmessage = function (e) {
    // 获取logo显示状态
    let {handles} = e.data;

    //处理所有的iframe的事件
    if(handles&&handles.length>0){
        for(var i=0,handlesMax=handles.length;i<handlesMax;i++){
            // 获取当前事件类型
            var curHandleName=handles[i];
            // 处理当前的iframe事件
            messageHandles[curHandleName]();
        }
    }
};