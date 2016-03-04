import Ember from 'ember';

export function surelyNot(params) {
    for (let i of params) {
        if ((i !== false)) {
            return false;
        }
    }
    return true;
}

export default Ember.Helper.helper(surelyNot);
