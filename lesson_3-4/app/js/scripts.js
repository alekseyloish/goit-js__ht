'use strict';

var body = document.body;

/*
var container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

var heading = document.createElement('h2');
heading.classList.add('text-center');
heading.innerHTML = 'Тест по программированию';
container.appendChild(heading);

var formContainer = document.createElement('form');
formContainer.classList.add('form-quiz', 'center-block');
container.appendChild(formContainer);

var list = document.createElement('ol');
list.classList('list-group');
*/


var app = {

    createElement: function(options) {
        var element = document.createElement(options.tagName);

        if (options.className) {
            element.className = options.className;
        }

        if (options.text) {
            element.innerHTML = options.text;
        }

        if (options.inputType) {
            element.setAttribute('type', options.inputType);
        }

        if (options.name) {
            element.setAttribute('name', options.name);
        }

        if (options.id) {
            element.setAttribute('id', options.id);
        }

        if (options.value) {
            element.setAttribute('value', options.value);
        }

        if (options.parentName) {
            options.parentName.appendChild(element);
        } else {
            body.appendChild(element);
        }

        return element;
    },

    generateHeading: function(parent){
        this.createElement({
            tagName: 'h2',
            className: 'text-center',
            text: 'Тест по программированию',
            parentName: parent
        });
    },

    generateList: function(parent, amountQuestion, amountAnswer) {
        var list = this.createElement({
            tagName: 'ol',
            className: 'list-group',
            parentName: parent
        });

        // Вывод списка вопросов
        for (var i = amountQuestion; i > 0; i--) {
            var listItem = this.createElement({
                tagName: 'li',
                className: 'list-group-item',
                parentName: list
            });

            this.createElement({
                tagName: 'h4',
                className: 'title',
                text: 'Вопрос № ' + (amountQuestion - i + 1),
                parentName: listItem
            });

            var checkboxGroupContainer = this.createElement({
                tagName: 'div',
                className: 'checkbox-group',
                parentName: listItem
            });

            // Вывод списка вариантов ответа на вопрос
            for (var j = amountAnswer-1; j >= 0; j--) {
                var checkboxContainer = this.createElement({
                    tagName: 'div',
                    className: 'checkbox',
                    parentName: checkboxGroupContainer
                });

                var label = this.createElement({
                    tagName: 'label',
                    //text: 'Вариант ответа № ' + (amountAnswer - j),
                    parentName: checkboxContainer
                });

                this.createElement({
                    tagName: 'input',
                    inputType: 'checkbox',
                    name: 'answer',
                    id: 'answer' + (amountQuestion - i) + '_' + (amountAnswer - j),
                    parentName: label
                });

                this.createElement({
                    tagName: 'span',
                    text: 'Вариант ответа № ' + (amountAnswer - j),
                    parentName: label
                });
            }
        }
    },

    generateForm: function(parent) {
        var form = this.createElement({
            tagName: 'form',
            className: 'form-quiz center-block',
            parentName: parent
        });

        this.generateList(form, 3, 4);

        this.generateButton(form);
    },

    generateButton: function(parent) {
        this.createElement({
            tagName: 'input',
            inputType: 'submit',
            value: 'Проверить мои результаты',
            className: 'center-block btn btn-primary btn-lg',
            parentName: parent
        });
    },

    generatePage: function() {
        var container = this.createElement({
            tagName: 'div',
            className: 'container'
        });

        this.generateHeading(container);

        this.generateForm(container)
    }
};


app.generatePage();

