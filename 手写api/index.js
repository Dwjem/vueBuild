// 手写shallowReactive(浅的劫持)和reactive(深的劫持)

const reactiveHandler = {
    get(target, prop){
        console.log("劫持了get");
        return Reflect.get(target, prop)
    },
    set(target, prop, value){
        console.log("劫持了set");
        return Reflect.set(target, prop, value)
    },
    deleteProperty(target, prop){
        console.log("劫持了delete");
        return Reflect.deleteProperty(target, prop, value)
    }
}


// 声明一个 shallowReactive 方法 传入一个目标对象
function shallowReactive(target) {
    // 先判断传入的目标对象是不是object类型(数组/对象)
    if(target&&typeof target === "object"){
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的是基本类型的值, 就直接返回
    return target
}


// 声明一个reactive方法
function reactive(target) {
    // 先判断传入的目标对象是不是object类型(数组/对象)
    if(target&&typeof target === "object"){
        // 对数组或者对象中的每一项进行reactive的递归处理
        if(Array.isArray(target)){
            target.forEach((item, index)=>{
                target[index] = reactive(item)
            })
        }else{
            Object.keys(target).forEach((key)=>{
                target[key] = reactive(item)
            })
        }
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的是基本类型的值, 就直接返回
    return target
}
