import dva from 'dva';
import models from './models';
import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(userList);
Object.keys(models).forEach((key) => {
  app.model(models[key]);
});

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
