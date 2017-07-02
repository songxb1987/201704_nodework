/**
 * Created by song on 2017/7/2.
 */
//引用文件模块，必须使用相对路径./ ../,可以不增加后缀名，会自动找.js .json .node,找不到报错
//同步异步怎么区分？有回调函数的是异步的，require是同步方法
//let calc = require('./calc');
//通过require拿到的并不是exports对象，拿到的是module.exports

//module.export = exports = {}
let sum = require("./calc");
console.log(sum(1,1));