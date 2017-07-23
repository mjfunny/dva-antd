import { query, detail } from '../services/user';

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

    // 用户详情
    *detail({ payload: { id } }, { call, put }) {
      // const xxx = yield select(state => state.models.xxx);
      const { data } = yield call(detail, id);
      if (data) {
        yield put({
          type: 'detailSuccess',
          payload: {
            data: data.data,
          },
        });
      }
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
    toggleVisible(state) {
      return {
        ...state,
        visible: !state.visible,
      };
    },
  },
};

