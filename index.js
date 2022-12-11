import {connectDatabase} from './batabase.js';
import {PORT_APP} from './config.js';
import app from './app.js';

connectDatabase();

app.listen(PORT_APP, () => {
    console.log('Server in running port ', PORT_APP);
});
