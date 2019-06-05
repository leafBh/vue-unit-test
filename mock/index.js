
const Mock = require('mockjs')

const mock1 = require('./mock/mock2')


// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', mock1);
// Mock.mock('/news/produce', 'post', produce);
