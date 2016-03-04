import Ember from 'ember';
import {EKMixin, keyUp, keyDown} from 'ember-keyboard';

const {
    Component,
    on
} = Ember;

export default Component.extend(EKMixin, {
    tagName: 'tr',
    isShiftPressed: false,
    sorting: true,

    shiftDown: on(keyDown(), function (event) {
        if (event.shiftKey) {
            this.set('isShiftPressed', true);
        }
    }),

    shiftUp: on(keyUp(), function (event) {
        if (event.shiftKey) {
            this.set('isShiftPressed', false);
        }
    }),

    mouseEnter() {
        this.set('keyboardActivated', true);
    },

    mouseLeave() {
        this.set('keyboardActivated', false);
        this.set('isShiftPressed', false);
    },

    actions: {
        modifySort(column) {
            if (!this.get('sorting') || (column.sorting === false)) {
                return;
            }

            let {sort, key} = column;

            sort = (sort) ? ((sort === 'asc') ? 'desc' : false) : 'asc';

            this.attrs.sort(key, sort, this.get('isShiftPressed'));
        }
    }
});
