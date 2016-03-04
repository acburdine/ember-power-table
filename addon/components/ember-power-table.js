import Ember from 'ember';

const {
    Component,
    computed,
    set
} = Ember;
const emberA = Ember.A;

export default Component.extend({
    tagName: 'table',
    sorting: true,

    headerComponent: 'ember-power-table/header',
    rowComponent: 'ember-power-table/row',

    _columns: computed.reads('columns'),
    _data: computed.reads('data'),

    sortDefinition: computed('_columns.@each.{sort,priority}', '_data.[]', function () {
        let sorting = emberA();
        this.get('_columns').forEach((column) => {
            let sort;
            if (column.sort) {
                sort = `${column.key}:${(column.sort === 'desc') ? 'desc' : 'asc'}`;
                sorting[(column.priority) ? 'unshiftObject' : 'pushObject'](sort);
            }
        });

        return sorting;
    }),

    content: computed.sort('_data', 'sortDefinition'),

    actions: {
        modifySort(key, sort, shiftPressed) {
            this.get('_columns').map((column) => {
                if (column.key === key) {
                    set(column, 'sort', sort);
                    set(column, 'priority', true);
                } else if (!shiftPressed) {
                    set(column, 'sort', false);
                    set(column, 'priority', false);
                }

                return column;
            });
        }
    }
});
