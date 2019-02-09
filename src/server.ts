import app from './app';
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
const PORT = 3000;

// const httpsOptions = {
//     key: fs.readFileSync('./config/key.pem'),
//     cert: fs.readFileSync('./config/cert.pem')
// }

// https.createServer(httpsOptions, app).listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
// })

const server = http.createServer(app);
server.listen(PORT);
server.on('listening', onListening);

//function to note that Express is listening
function onListening(): void {
    console.log(`Listening on port ` + PORT);
}