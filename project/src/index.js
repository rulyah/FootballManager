const path = require('path');
import css from './index.css';
import playerTemplate from "./players-list"
const fs = require('fs')


fs.writeFile("app.txt", "hello", (err) => {
    if(err) console.log('err')
});