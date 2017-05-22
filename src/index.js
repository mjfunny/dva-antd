import dva from 'dva';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
import { userList } from './models/user'
import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
 app.model(userList);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
