/* eslint-disable strict */
/**
 * DataTables integration for Materialize. This requires Materialize and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Materialize. See http://datatables.net/manual/styling/materialize
 * for further information.
 */
(function (window, document, undefined) {

    var factory = function ($, DataTable) {
        'use strict';

        /* Set the defaults for DataTables initialisation */
        $.extend(true, DataTable.defaults, {
            dom: "<'row'<'col s6'l><'col s6'f>r>" +
            "<'row'<'col-s12't>>" +
            "<'row'<'col s6'i><'col s6'p>>",
            renderer: 'materialize'
        });

        /* Default class modification */
        $.extend(DataTable.ext.classes, {
            sWrapper: "dataTables_wrapper form-inline dt-materialize",
            sFilterInput: "",
            sLengthSelect: "input-field"
        });


        /* Materialize paging button renderer */
        DataTable.ext.renderer.pageButton.materialize = function (settings, host, idx, buttons, page, pages) {
            var api = new DataTable.Api(settings);
            var classes = settings.oClasses;
            var lang = settings.oLanguage.oPaginate;
            var btnDisplay, btnClass;

            var attach = function (container, buttons) {
                var i, ien, node, button;
                var clickHandler = function (e) {
                    e.preventDefault();
                    if (!$(e.currentTarget).hasClass('disabled')) {
                        api.page(e.data.action).draw(false);
                    }
                };

                for (i = 0, ien = buttons.length; i < ien; i++) {
                    button = buttons[i];

                    if ($.isArray(button)) {
                        attach(container, button);
                    }
                    else {
                        btnDisplay = '';
                        btnClass = '';

                        switch (button) {
                            case 'ellipsis':
                                btnDisplay = '&hellip;';
                                btnClass = 'disabled';
                                break;

                            case 'first':
                                btnDisplay = lang.sFirst;
                                btnClass = button + (page > 0 ?
                                        '' : ' disabled');
                                break;

                            case 'previous':
                                btnDisplay = '<i class="mdi-navigation-chevron-left"></i>';
                                btnClass = button + (page > 0 ?
                                        '' : ' disabled');
                                break;

                            case 'next':
                                btnDisplay = '<i class="mdi-navigation-chevron-right"></i>';
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
                                'class': classes.sPageButton + ' waves-effect ' + btnClass,
                                'aria-controls': settings.sTableId,
                                'tabindex': settings.iTabIndex,
                                'id': idx === 0 && typeof button === 'string' ?
                                    settings.sTableId + '_' + button :
                                    null
                            })
                                .append($('<a>', {
                                        'href': '#'
                                    })
                                        .html(btnDisplay)
                                )
                                .appendTo(container);

                            settings.oApi._fnBindAction(
                                node, { action: button }, clickHandler
                            );
                        }
                    }
                }
            };

            attach(
                $(host).empty().html('<ul class="pagination"/>').children('ul'),
                buttons
            );
        };


        /*
         * TableTools Materialize compatibility
         * Required TableTools 2.1+
         */
        if (DataTable.TableTools) {
            // Set the classes that TableTools uses to something suitable for Materialize
            $.extend(true, DataTable.TableTools.classes, {
                "container": "DTTT btn-group",
                "buttons": {
                    "normal": "btn btn-flat",
                    "disabled": "disabled"
                },
                "collection": {
                    "container": "DTTT_dropdown dropdown-menu",
                    "buttons": {
                        "normal": "",
                        "disabled": "disabled"
                    }
                },
                "print": {
                    "info": "DTTT_print_info"
                },
                "select": {
                    "row": "active"
                }
            });

            // Have the collection use a materialize compatible drop down
            $.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
                "collection": {
                    "container": "ul",
                    "button": "li",
                    "liner": "a"
                }
            });
        }

    }; // /factory


// Define as an AMD module if possible
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'datatables'], factory);
    }
    else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'), require('datatables.net'));
    }
    else if (jQuery) {
        // Otherwise simply initialise as normal, stopping multiple evaluation
        factory(jQuery, jQuery.fn.dataTable);
    }


})(window, document);

