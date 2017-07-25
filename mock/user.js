
const mockjs = require('mockjs');

// mock 数据
const userList = mockjs.mock({
  'data|10-30': [
    {
      uid: '@id',
      name: '@name',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|20-40': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      createTime: '@datetime',
    },
  ],
});

const userDetail = mockjs.mock({
  data: {
    uid: '@id',
    name: '@name',
    nickName: '@last',
    phone: /^1[34578]\d{9}$/,
    'age|20-40': 1,
    address: '@county(true)',
    isMale: '@boolean',
    email: '@email',
    createTime: '@datetime',
  },
});

const dataBase = userList.data;

module.exports = {
  'GET /api/users/list': function (req, res) {
    res.json({
      success: true,
      data: dataBase,
    });
  },
  'GET /api/users': function (req, res) {
    res.json({
      success: true,
      data: userDetail.data,
    });
  },
  'POST /api/users/create': function (req, res) {
    res.json({
      success: true,
      data: null,
    });
  },
  'POST /api/users/modify': function (req, res) {
    res.json({
      success: true,
      data: null,
    });
    // res.json({
    //   success: false,
    //   msg: '参数错误,请检查!',
    //   data: null,
    // });
  },
  'POST /api/users/delete': function (req, res) {
    res.json({
      success: true,
      data: null,
    });
  },
};
