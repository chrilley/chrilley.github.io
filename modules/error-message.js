'use strict';

export function error(message, container) {
    const div = document.createElement('div');
    div.className = 'error-message';
    div.textContent = message;
    container.appendChild(div);
}