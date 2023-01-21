/**
 * Created by Ing. Ernesto Pérez Amigo on 02/10/2015.
 */
(function ($) {
    var Keyboard = function (selector, options) {
        var element = $(selector);
        var $layout = $('<div class="uc-keyboard-box-fx">');
        var _this = this;
        var optionsKeyboard = $.extend({
            type: 'a-z1-9',         // a-z a-z1-9 a-z91 9-1 1-9
            is_hidden: true,
            submit: true
        }, options || {});

        var keys_qp = [
            { style: '', text: 'q', class: 'btn btn-default key' },
            { style: '', text: 'w', class: 'btn btn-default key' },
            { style: '', text: 'e', class: 'btn btn-default key' },
            { style: '', text: 'r', class: 'btn btn-default key' },
            { style: '', text: 't', class: 'btn btn-default key' },
            { style: '', text: 'y', class: 'btn btn-default key' },
            { style: '', text: 'u', class: 'btn btn-default key' },
            { style: '', text: 'i', class: 'btn btn-default key' },
            { style: '', text: 'o', class: 'btn btn-default key' },
            { style: '', text: 'p', class: 'btn btn-default key' }
        ];
        var keys_an = [
            { style: 'width: 4%;', text: '&zwnj;', class: 'btn key disabled' },
            { style: '', text: 'a', class: 'btn btn-default key' },
            { style: '', text: 's', class: 'btn btn-default key' },
            { style: '', text: 'd', class: 'btn btn-default key' },
            { style: '', text: 'f', class: 'btn btn-default key' },
            { style: '', text: 'g', class: 'btn btn-default key' },
            { style: '', text: 'h', class: 'btn btn-default key' },
            { style: '', text: 'j', class: 'btn btn-default key' },
            { style: '', text: 'k', class: 'btn btn-default key' },
            { style: '', text: 'l', class: 'btn btn-default key' },
            { style: '', text: 'ñ', class: 'btn btn-default key' }
        ];
        var keys_zm = [
            { style: '', text: 'z', class: 'btn btn-default key' },
            { style: '', text: 'x', class: 'btn btn-default key' },
            { style: '', text: 'c', class: 'btn btn-default key' },
            { style: '', text: 'v', class: 'btn btn-default key' },
            { style: '', text: 'b', class: 'btn btn-default key' },
            { style: '', text: 'n', class: 'btn btn-default key' },
            { style: '', text: 'm', class: 'btn btn-default key' }
        ];
        var keys_espace = [
            { style: 'width: 50%;', text: '&zwnj;', class: 'btn btn-default key disabled' }
        ];
        var keys_79 = [
            { style: '', text: '7', class: 'btn btn-default key' },
            { style: '', text: '8', class: 'btn btn-default key' },
            { style: '', text: '9', class: 'btn btn-default key' },
        ];
        var keys_46 = [
            { style: '', text: '4', class: 'btn btn-default key' },
            { style: '', text: '5', class: 'btn btn-default key' },
            { style: '', text: '6', class: 'btn btn-default key' },
        ];
        var keys_13 = [
            { style: '', text: '1', class: 'btn btn-default key' },
            { style: '', text: '2', class: 'btn btn-default key' },
            { style: '', text: '3', class: 'btn btn-default key' },
        ];

        var keys_0sub = [
            { style: '', text: '0', class: 'btn btn-default key' },
            { style: 'width: 60%', text: 'Enviar', class: 'btn btn-default key' },
        ];
        /********************/
        /* Metodos Privados */
        /********************/
        initKeyboard = function () {
            element.append($layout);

            setupKeys();

            if (optionsKeyboard.is_hidden) {
                //$layout.hide();
            }
        };

        setupKeys = function () {
            if (optionsKeyboard.type === '9-1' || optionsKeyboard.type === '1-9') {
                $layout.append('<div class="form-group"><input class="form-control" type="number"></div>');
            } else {
                $layout.append('<div class="form-group"><input class="form-control" type="text"></div>');
            }

            $layout.append('<div class="keyboard row row-no-gutters">');

            
            console.log(optionsKeyboard.type);
            if (optionsKeyboard.type === 'a-z') {
                $('<div/>', {
                    'class': 'col-xs-10 keypad col-xs-offset-1 ',
                    html: renderAZ()
                }).appendTo('div.keyboard');
            } else if (optionsKeyboard.type === 'a-z1-9') {
                $('<div/>', {
                    'class': 'col-xs-9 keypad',
                    html: renderAZ()
                }).appendTo('div.keyboard');

                $('<div/>', {
                    'class': 'col-xs-3 numpad',
                    html: render19()
                }).appendTo('div.keyboard');
            }

        };

        renderArray = function (arryKeys) {
            let html = '<div class="-row">';

            arryKeys.forEach(function (key) {
                console.log(key);
                html += '<a value="' + key.text + '" class="' + key.class + '" style="' + key.style + '">'
                html += key.text
                html += '</a>'
            });

            html += '</div>'
            return html;
        }

        renderAZ = function () {
            html = renderArray(keys_qp);
            html += renderArray(keys_an);
            html += renderArray(keys_zm);
            html += renderArray(keys_espace);
            return html;
        }

        render19 = function () {
            html = renderArray(keys_13);
            html += renderArray(keys_46);
            html += renderArray(keys_79);
            html += renderArray(keys_0sub);
            return html;
        }

        render91 = function () {
            html += renderArray(keys_79);
            html += renderArray(keys_46);
            html = renderArray(keys_13);
            html += renderArray(keys_0sub);
            return html;
        }

        /***************************************************************************/
        /* Metodos Publicos (Constructor, Getters y Setters, Submit Button Action) */
        /***************************************************************************/
        _this.init = function () {
            initKeyboard();
        };


        _this.SubmitKey = function () { };

        /******************************/
        /* Tipos de teclado e Idiomas */
        /******************************/

    };

    // Esta función genera la instancia de nuestra Clase
    $.fn.ucKeyboardFx = function (options) {
        return this.each(function () {
            var oElemento = $(this);

            // Si ya se cuenta con una instancia del objeto
            // hacemos un return para evitar generarla nuevamente
            if (oElemento.data('ucKeyboardFx')) return;

            // aquí generamos el objeto donde ingresamos el parametro
            // "this" que sera nuestro elemento
            var oKeyboard = new Keyboard(oElemento, options);
            oKeyboard.init();

            // Ahora guardamos la instancia del objeto en el elemento
            oElemento.data('ucKeyboardFx', oKeyboard);
        });
    };
})(jQuery);