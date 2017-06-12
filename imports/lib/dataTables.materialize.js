/* eslint-disable strict,no-undef,no-param-reassign,global-require,no-shadow-restricted-names,no-shadow */
/**
 * DataTables integration for Materialize. This requires Materialize and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Materialize. See http://datatables.net/manual/styling/materialize
 * for further information.
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'datatables.net'], function ($) {
            return factory($, window, document);
        });
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = function (root, $) {
            if (!root) {
                root = window;
            }

            if (!$ || !$.fn.dataTable) {
                // Require DataTables, which attaches to jQuery, including
                // jQuery if needed and have a $ property so we can access the
                // jQuery object that is used
                $ = require('datatables.net')(root, $).$;
            }

            return factory($, root, root.document);
        };
    } else {
        // Browser
        factory(jQuery, window, document);
    }
}(function ($, window, document, undefined) {
    'use strict';

    const DataTable = $.fn.dataTable;

    /* Set the defaults for DataTables initialisation */
    $.extend(true, DataTable.defaults, {
        dom: "<'row'<'col s6'l><'col s6'f>r>" +
        "<'row'<'col-s12't>>" +
        "<'row'<'col s6'i><'col s6'p>>",
        renderer: 'materialize',
    });


    /* Default class modification */
    $.extend(DataTable.ext.classes, {
        sWrapper: 'dataTables_wrapper form-inline dt-materialize',
        sFilterInput: '',
        sLength: 'input-field table_length',
        sFilter: 'input-field dataTables_filter',
    });


    /* Bootstrap paging button renderer */
    DataTable.ext.renderer.pageButton.materialize = (settings, host, idx, buttons, page, pages) => {
        const api = new DataTable.Api(settings);
        const classes = settings.oClasses;
        const lang = settings.oLanguage.oPaginate;
        const aria = settings.oLanguage.oAria.paginate || {};
        let btnDisplay;
        let btnClass;
        let counter = 0;

        const attach = function (container, buttons) {
            let i;
            let ien;
            let node;
            let button;
            const clickHandler = function (e) {
                e.preventDefault();
                if (!$(e.currentTarget).hasClass('disabled') && api.page() !== e.data.action) {
                    api.page(e.data.action).draw('page');
                }
            };

            for (i = 0, ien = buttons.length; i < ien; i += 1) {
                button = buttons[i];

                if ($.isArray(button)) {
                    attach(container, button);
                } else {
                    btnDisplay = '';
                    btnClass = '';

                    switch (button) {
                    case 'ellipsis':
                        btnDisplay = '&#x2026;';
                        btnClass = 'disabled';
                        break;

                    case 'first':
                        btnDisplay = lang.sFirst;
                        btnClass = button + (page > 0 ?
                                '' : ' disabled');
                        break;

                    case 'previous':
                        btnDisplay = '<i class="material-icons">chevron_left</i>';
                        btnClass = button + (page > 0 ?
                                '' : ' disabled');
                        break;

                    case 'next':
                        btnDisplay = '<i class="material-icons">chevron_right</i>';
                        btnClass = button + (page < pages - 1 ?
                                '' : ' disabled');
                        break;

                    case 'last':
                        btnDisplay = lang.sLast;
                        btnClass = button + (page < pages - 1 ?
                                '' : ' disabled');
                        break;

                    default:
                        btnDisplay = button + 1;
                        btnClass = page === button ?
                            'active' : '';
                        break;
                    }

                    if (btnDisplay) {
                        node = $('<li>', {
                            class: `${classes.sPageButton} waves-effect ${btnClass}`,
                            id: idx === 0 && typeof button === 'string' ?
                                `${settings.sTableId}_${button}` :
                                null,
                        }).append($('<a>', {
                            href: '#',
                            'aria-controls': settings.sTableId,
                            'aria-label': aria[button],
                            'data-dt-idx': counter,
                            tabindex: settings.iTabIndex,
                        }).html(btnDisplay),
                        ).appendTo(container);

                        settings.oApi._fnBindAction(
                            node, { action: button }, clickHandler,
                        );

                        counter += 1;
                    }
                }
            }
        };

        // IE9 throws an 'unknown error' if document.activeElement is used
        // inside an iframe or frame.
        let activeEl;

        try {
            // Because this approach is destroying and recreating the paging
            // elements, focus is lost on the select button which is bad for
            // accessibility. So we want to restore focus once the draw has
            // completed
            activeEl = $(host).find(document.activeElement).data('dt-idx');
        } catch (e) {
            console.log(e);
        }

        attach(
            $(host).empty()
                .html('<ul class="pagination"/>')
                .children('ul'),
            buttons,
        );

        if (activeEl !== undefined) {
            $(host).find(`[data-dt-idx=${activeEl}]`).focus();
        }
    };

    /*
     * TableTools Materialize compatibility
     * Required TableTools 2.1+
     */
    if (DataTable.TableTools) {
        // Set the classes that TableTools uses to something suitable for Materialize
        $.extend(true, DataTable.TableTools.classes, {
            container: 'DTTT btn-group',
            buttons: {
                normal: 'btn btn-flat',
                disabled: 'disabled',
            },
            collection: {
                container: 'DTTT_dropdown dropdown-menu',
                buttons: {
                    normal: '',
                    disabled: 'disabled',
                },
            },
            print: {
                info: 'DTTT_print_info',
            },
            select: {
                row: 'active',
            },
        });

        // Have the collection use a materialize compatible drop down
        $.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
            collection: {
                container: 'ul',
                button: 'li',
                liner: 'a',
            },
        });
    }

    return DataTable;
}));

