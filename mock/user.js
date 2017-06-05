
const mockjs = require('mockjs');
const random = mockjs.random;

// mock 数据
let userList = mockjs.mock({ 
  'data|30-80' : [ 
    { 
      uid   : '@id',
      name : '@name',
      nickName : '@last',
      phone : /^1[34578]\d{9}$/,
      'age|20-40': 1,
      address: '@county(true)',
      isMale : '@boolean',
      email  : '@email',
      createTime : '@datetime',
    }
  ]
});

let dataBase = userList.data;

module.exports = { 
  'GET /api/usersTest': function (req, res) {
    
    res.json({
        success: true,
        data : dataBase
      });
  },
};