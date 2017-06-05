import { load } from '../services/user';

const userList = { 
  namespace: 'userList',

  state: { 
    data    : null,
    invalid : true,
    loading : true,
    visible : false,
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *load({ payload }, { call, put }){ 
      const { data } = yield call(load);
      if (data) {
          yield put({
              type: 'testSuccess',
              payload: {
                  data: data.data,
              }
          });
      }
    } 
  },

  reducers: {
    testSuccess(state, action) {
      const data = action.payload.data;
      return { 
        ...state,
        data : data,
        loading: false,
        invalid: false,
      };
    },
    toggleVisible(state, action) {
      return { 
        ...state,
        visible : !state.visible
      };
    },
  },
}

export default { 
  userList,
};

function delay(timeout){ 
  return new Promise(resolve=>{ 
    setTimeout(resolve, timeout);
  });
}