import {Server} from './server';
let server = new Server().app;

server.listen(5000, ()=> {
    console.log('Server is running at port 5000');
})

