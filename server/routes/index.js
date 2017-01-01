'use strict';
import posts from './posts'

export default function Routes(app){
    app.use('/posts', posts);
};
