'use strict'
import { Hello } from "./hello";
import { FileServer } from './file_server';


/**
 *
 *
 * @param {*} params
 */
function mian(params: any) {
    Hello.start()
    FileServer.start();
}

mian(null);