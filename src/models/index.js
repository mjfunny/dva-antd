/**
 * models 入口
 * require.context(directory, useSubdirectories, regExp);
 * 正则匹配引入相应的文件模块 ( 要检索的目录, 是否检索子目录, 匹配文件的正则表达式 )
 *
*/
const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const reducers = keys.reduce((memo, key) => {
  const newMemo = memo;
  if (key !== './Item-hn.js') {
    newMemo[key.match(/([^/]+)\.js$/)[1]] = context(key);
  }
  return newMemo;
}, {});

export default reducers;
