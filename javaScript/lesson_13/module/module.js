//modules: import / Export
// muốn import module thì bản thân file .js đó phải là module
// muốn sử dụng module thì file module phải export default name, name là tên của function hay biến bạn muốn export ra

// import logger from './logger/index.js'
import {logger2} from './logger/index.js'
// import {
//     TYPE_LOG, TYPE_WARN, TYPE_ERROR
// } from './constant.js'
import * as constant from './constant.js'
logger2('Test messenger...', constant.TYPE_ERROR)