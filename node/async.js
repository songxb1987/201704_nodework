/**
 * Created by song on 2017/7/2.
 */
let read=(cb)=>{
    setTimeout(()=>{
        let str = '123';
        cb(str);
    },2000)
}
read(function (str) {
    console.log(str);
})
//解决异步问题 用回调函数

//node是单线程异步的  但是可以开多线程，是通过开子线程实现
//