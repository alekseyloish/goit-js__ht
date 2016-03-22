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

    generateForm: function(parent) {
        this.createElement({
            tagName: 'form',
            className: 'form-quiz center-block',
            parentName: parent
        });
    },

    generatePage: function() {
        var container = this.createElement({
            tagName: 'div',
            className: 'container'
        });

        this.generateHeading(container);
        this.generateForm(container);
    }

};

app.generatePage();
