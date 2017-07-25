import { query, detail, create, modify, del } from '../services/user';

export default {
  namespace: 'users',
  state: {
    data: null,
    detail: null,
    invalid: true,
    loading: true,
    visible: false,
  },
  // 订阅 当路由进入 /xxx 则 dispatch 相关 action
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     history.listen((location) => {
  //       if (location.pathname === '/xxx') {
  //         dispatch({
  //           type: 'query',
  //           payload: {},
  //         });
  //       }
  //     });
  //   },
  // },

  effects: {
    // 用户列表
    *query({ payload }, { call, put }) {
      const { data } = yield call(query);
      if (data) {
        yield put({
          type: 'queryListSuccess',
          payload: {
            data: data.data,
          },
        });
      }
    },
    // 新建用户
    *create({ payload: { isMale, name, age, address, success } }, { call, put }) {
      yield call(create, { isMale, name, age, address });
      if (typeof success === 'function') {
        success();
      }
      yield put({ type: 'query' });
    },
    // 用户详情
    *detail({ payload: { id } }, { call, put }) {
      // const xxx = yield select(state => state.models.xxx);
      const { data } = yield call(detail, { id });
      if (data) {
        yield put({
          type: 'detailSuccess',
          payload: {
            data: data.data,
          },
        });
      }
    },
    // 修改用户信息
    *modify({ payload: { isMale, name, age, address, success } }, { call, put }) {
      yield call(modify, { isMale, name, age, address });
      if (typeof success === 'function') {
        success();
      }
      yield put({ type: 'query' });
    },

    // 删除用户
    *delete({ payload: { id, success } }, { call, put }) {
      yield call(del, { id });
      if (typeof success === 'function') {
        success();
      }
      yield put({ type: 'query' });
    },
  },

  reducers: {
    queryListSuccess(state, action) {
      const data = action.payload.data;
      return {
        ...state,
        data,
        loading: false,
        invalid: false,
      };
    },
    detailSuccess(state, action) {
      const data = action.payload.data;
      return {
        ...state,
        detail: data,
        loading: false,
        invalid: false,
      };
    },
  },
};

