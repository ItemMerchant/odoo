/** @odoo-module */

export function pickRadio(name) {
    return [
        {
            content: `picking radio attribute with name ${name}`,
            trigger: `.attribute-name-cell label[name='${name}']`,
            in_modal: true,
        },
    ];
}
export function pickSelect(name) {
    return [
        {
            content: `picking select attribute with name ${name}`,
            trigger: `.configurator_select:has(option:contains('${name}'))`,
            run: `text ${name}`,
            in_modal: true,
        },
    ];
}
export function pickColor(name) {
    return [
        {
            content: `picking color attribute with name ${name}`,
            trigger: `.configurator_color[data-color='${name}']`,
            in_modal: true,
        },
    ];
}
export function fillCustomAttribute(value) {
    return [
        {
            content: `filling custom attribute with value ${value}`,
            trigger: `.custom_value`,
            run: `text ${value}`,
            in_modal: true,
        },
    ];
}
