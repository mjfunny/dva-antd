
const mockjs = require('mockjs');

// mock 数据
const userList = mockjs.mock({
  'data|30-80': [
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
  'GET /api/users?id': function (req, res) {
    res.json({
      success: true,
      data: userDetail.data,
    });
  },
};
