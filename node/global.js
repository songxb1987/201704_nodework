/**
 * Created by song on 2017/7/2.
 */
//只要是在文件中，不用声明可以直接使用的都是全局对象
//服务端没有window，有global,global上的对象都可以直接使用
//console.log(global);
//process  进程
//Buffer   缓存区（表示内存的）
//clearImmediate   setInnediate
//setTimeout
//console  ->   log dir info error warn time/timeEnd

//可以在命令行中执行文件
//setTimeout  callback 异步 （事件环，node程序是事件环）
console.log(this);//{}  这里全局的this指向的是{}  不是global
setTimeout(function (data) {
    console.log(data);
},1000,'参数1')//setTimeout可以传递多个参数，这里的this默认指向setTimeout自己
//setImmediate 立即  异步
setImmediate(function () {
    console.log('立即');
});//一般情况跟不写时间的setTimeout是一样的

//process  进程  设置环境变量，  生产环境  开发环境
//在开发的时候输出123，在生产环境输出456
console.log(process.env.NODE_DEV); //environment  环境
if(process.env.NODE_DEV==='dev'){
    console.log(123);
}else{
    console.log(456);
}















