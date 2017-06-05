import { load } from '../services/user';

const userList = { 
  namespace: 'userList',

  state: { 
    data    : null,
    invalid : true,
    loading : true,
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    // *query({ payload }, { call, put }) {  // eslint-disable-line
    //   yield call(delay,500);
    //   yield put({ type: 'querySuccess' });
    // },
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
    // query(state, action) {
    //   return { 
    //     ...state,
    //     loading:true
    //   };
    // },
    // querySuccess(state, action){ 
    //   return { 
    //     ...state,
    //     loading: false,
    //     invalid: false,
    //     data : [
    //       {
    //         uid : 644983,
    //         name: '马鋆',
    //         age : 26,
    //         sexual: '男',
    //         address: '西湖区湖底公园1号'
    //       }, {
    //         uid: 258329 ,
    //         name: '刘帅',
    //         age: 23,
    //         sexual: '男',
    //         address: '西湖区湖底公园2号'
    //       }
    //     ],
    //   };
    // },
    testSuccess(state, action) {
      const data = action.payload.data;
      return { 
        ...state,
        data : data,
        loading: false,
        invalid: false,
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