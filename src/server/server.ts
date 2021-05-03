import app from './app';
import { createConnection } from 'typeorm';
import appConf from '@config/app/index';

createConnection().then((result) => {
    app.listen(appConf.port, () => {
        process.stdout.write(`Database is connected: ${result.isConnected}\n`);
        process.stdout.write(`Server running on port ${appConf.port}\n`);
    });
}).catch((error) => {
    process.stdout.write(`Error: ${error.sqlMessage}\n`);
});
