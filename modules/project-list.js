'use strict';
import { api } from './api.js';
import { error } from './error-message.js';

export async function projectList(url) {
    const container = document.getElementById('right-column');
    const list = await api.get(url);

    if (list.error) {
        error('Could not load projects from GitHub!', container);
    }

    // Custom Projects: Here I sneak in Non-Github projects. And nobody noticed a thing!
    const jarvis = {
        name: 'Jarvis',
        html_url: 'https://www.jarvis-game.com/',
        description: 'A work-in-progress action-packed 2d pixel art metroidvania game featuring spell-based combat.'
    };

    list.data.push(jarvis);

    // Render every project entry as HTML elements.
    for (const project of list.data) {
        const div = document.createElement('div');
        div.className = 'project';
        container.appendChild(div);

        const link = document.createElement('a');
        link.className = 'project-link';
        link.textContent = project.name;
        link.href = project.html_url;

        div.appendChild(link);

        const description = document.createElement('p');
        description.textContent = project.description;
        div.appendChild(description);
    }
}
