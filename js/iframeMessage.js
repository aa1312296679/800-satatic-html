/**
 * 获取指定事件类型的类型的处理函数
 * @param handleName 需要查找的事件名
 * @param handles 事件集合 Object
 */
function getHandle(handleName,handles){
    //处理所有的iframe的事件
    if(handleName&&handleName!==""){
        //遍历所有的事件信息
        for(var handleKey in  handles){
            if(handleKey===handleName){
              return   handles[handleName]
            }
        }
    }
}