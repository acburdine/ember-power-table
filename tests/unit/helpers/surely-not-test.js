/* jshint expr:true */
import { expect } from 'chai';
import {
    describe,
    it
} from 'mocha';
import {
    surelyNot
} from 'ember-power-table/helpers/surely-not';

describe('SurelyNotHelper', function () {

    it('returns true with one parameter false', function () {
        let test = false;
        let result = surelyNot([test]);

        expect(result).to.be.true;
    });

    it('returns true with multiple parameters false', function () {
        let test = false;
        let result = surelyNot([test, test, test, test]);

        expect(result).to.be.true;
    });

    it('returns false with mixed parameters', function () {
        let test = false;
        let test2 = true;
        let test3 = false;
        let test4 = false;

        let result = surelyNot([test, test2, test3, test4]);

        expect(result).to.be.false;
    });

    it('returns false when parameters are true', function () {
        let test = true;
        let test2 = 1;
        let test3 = {test: true};

        let result = surelyNot([test, test2, test3]);

        expect(result).to.be.false;
    });

    it('returns false when parameters aren\'t explicitly false', function () {
        let test = 0;
        let test2 = '';
        let test3 = [];
        let test4 = {};

        let result = surelyNot([test, test2, test3, test4]);

        expect(result).to.be.false;
    });
});
