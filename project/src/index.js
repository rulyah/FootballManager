const mongoose = require('mongoose/browser');
const path = require('path');
import css from './index.css';
import playerTemplate from "./players-list";
import Player from './Schema';
import * as name from "./players-list";

// let mongoose = require('mongoose');

async function start(){
    try {
        await mongoose.connect(`mongodb+srv://ruslan:vami7up4uk@cluster0-bmnqp.mongodb.net/football?retryWrites=true&w=majority`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });

        console.log('[Mongoose] Connected!');
    } catch (e) {
        console.error(e)
    }
}

start();
let res = () => player1.skillScore/(player1.skillScore+player2.skillScore)*100;

function rand (min, max){
    return Math.round( Math.random() * (max - min) + min );
}
let randomPersent = rand(0, 100);

// console.log(skillChoosePlayer)