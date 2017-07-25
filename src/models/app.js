import cookie from 'js-cookie';
import { hashHistory } from 'dva/router';

export default {
  namespace: 'app',
  state: {

  },

  // 订阅 当路由进入 /xxx 则 dispatch 相关 action
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/') {
          if (cookie.get('user')) {
            // 已登录
            hashHistory.push('/user');
          } else {
            // 未登录
            hashHistory.push('/login');
          }
        }
      });
    },
  },

  effects: {

  },

  reducers: {

  },
};

