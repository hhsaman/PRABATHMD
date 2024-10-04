const http = require('http');

setInterval(() => {
    http.get('http://localhost:3000', (res) => {
        console.log(Keeping Codespace active at ${new Date()});
    }).on('error', (err) => {
        console.log('Error: ' + err.message);
    });
}, 300000); // 300000 milliseconds = 5 minutes
