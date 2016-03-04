import Ember from 'ember';

const {
    Component,
    computed,
    $
} = Ember;

export default Component.extend({
    tagName: 'td',

    formattedValue: computed('value', 'column.format', function () {
        let value = this.get('value');
        let {format} = this.get('column');

        if (format && $.isFunction(format)) {
            value = format(value, this.get('row'));
        }

        return value;
    }),

    isVisible: computed.notEmpty('formattedValue')
});
