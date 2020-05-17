/**
 * create by wangzhiyong
 * date:2017-08-15
 * desc webpack打包时的入口的脚本文件
 * 如果是单页面，请只写一个入口脚本文件
 *  */

//如果是单页面
let entry = [
  {
    filename: 'index', //文件名，
    title: '后台管理系统', // 标题
    src: './view/index/index.jsx' //脚本路径
  },
  
  {
    filename: 'home', //文件名，
    title: '后台管理系统-主页', // 标题
    src: './view/home/index.jsx' //脚本路径
  },
  {
    filename: 'login', //文件名，
    title: '后台管理系统-登陆', // 标题
    src: './view/login/index.jsx' //登陆页面
  },
  {
    filename: 'flex', //文件名，
    title: '后台管理系统-flex布局', // 标题
    src: './view/flex/index.jsx' //登陆页面
  },
  {
    filename: 'flexible', //文件名，
    title: '后台管理系统-flexible', // 标题
    src: './view/flexible/index.jsx' //登陆页面
  },
  {
    filename: 'heart', //文件名，
    title: '后台管理系统-heart', // 标题
    src: './view/heart/index.jsx' //登陆页面
  },
  {
    filename: 'modal', //文件名，
    title: '后台管理系统-modal', // 标题
    src: './view/modal/index.jsx' //登陆页面
  },
];

module.exports = entry;
