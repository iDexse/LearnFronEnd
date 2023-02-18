import {
    TYPE_LOG, TYPE_WARN, TYPE_ERROR
} from '../constant.js'
function logger(log, type ='log'){
    console[type](log);
}

export default logger; 