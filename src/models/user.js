import { load } from '../services/user';

export default {
  namespace: 'users',
  state: {
    data: null,
    invalid: true,
    loading: true,
    visible: false,
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *query({ payload }, { call, put }) {
      const { data } = yield call(load);
      if (data) {
        yield put({
          type: 'testSuccess',
          payload: {
            data: data.data,
          },
        });
      }
    },
  },

  reducers: {
    testSuccess(state, action) {
      const data = action.payload.data;
      return {
        ...state,
        data,
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

