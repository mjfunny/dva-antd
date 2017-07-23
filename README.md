# Getting Started
## install
```
git clone git@github.com:mjfunny/dva-antd.git

cd dva-antd

npm install

npm start

```
## mock数据
`.roadhogrc.mock.js`
```
const mock = {}
require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
    Object.assign(mock, require('./mock/' + file))
})
module.exports = mock
// 通过 fs 文件模块读取  mock 文件夹下文件,合并后输出.
```

`mock/user.js`
```
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
};

```

`services/user.js`
```
export async function query() {
  return request('/api/users/list');
}

export async function detail({ id }) {
  return request(`/api/users?${qs.stringify({ id })}`);
}
```
