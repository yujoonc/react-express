'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Routes;

var _posts = require('./posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routes(app) {
    app.use('/posts', _posts2.default);
};