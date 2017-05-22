
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
    *query({ payload }, { call, put }) {  // eslint-disable-line
      setTimeout(function() {
      }, 2000);
      yield put({ type: 'querySuccess' });
    },
  },

  reducers: {
    query(state, action) {
      return { 
        ...state,
        loading:true
      };
    },
    querySuccess(state, action){ 
      return { 
        ...state,
        loading: false,
        invalid: false,
        data : [
          {
            uid : 644983,
            name: '马鋆',
            age : 26,
            sexual: '男',
            address: '西湖区湖底公园1号'
          }, {
            uid: 258329 ,
            name: '刘帅',
            age: 23,
            sexual: '男',
            address: '西湖区湖底公园2号'
          }
        ],
      };
    }
  },
}

export default { 
  userList,
};