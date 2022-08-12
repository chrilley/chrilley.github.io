'use-strict';
import { api } from './api.js';

export async function projectList(url) {
    const container = document.getElementById('right-column');
    const list = await api.get(url);

    if (list.error) {
        const div = document.createElement('div');
        div.className = 'error-message';
        div.textContent = 'Could not load projects from GitHub!';
        container.appendChild(div);
    }

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
