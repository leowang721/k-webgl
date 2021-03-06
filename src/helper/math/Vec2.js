/**
 * @file 有两个值的向量
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

import _ from 'lodash';
import {vec2} from '../../dep/gl-matrix-min';

export default class Vec2 {

    step = 2;

    static equals(a, b) {
        return a._array.toString() === b._array.toString();
    }

    constructor(x, y) {
        this.setValue([x, y]);
    }

    // s 和 t 是给 纹理坐标系统用的
    get s() {
        return this._array[0];
    }
    set s(v) {
        this._array[0] = v;
    }
    get t() {
        return this._array[1];
    }
    set t(v) {
        this._array[1] = v;
    }

    getId() {
        return this._array.join('');
    }

    setValue(arr) {
        this._array = vec2.fromValues(...arr);
    }

    getValue() {
        return [...this._array];
    }

    clone() {
        return new Vec2(...this._array);
    }

    equals(another) {
        if (!another) {
            return false;
        }
        if (_.isArrayLike(another)) {
            return this.x === another[0] && this.y === another[1];
        }
        return this.x === another.x && this.y === another.y;
    }
}
