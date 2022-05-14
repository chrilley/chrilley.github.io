'use-strict';
import { githubAddress } from './modules/settings.js';
import { api } from './modules/api.js';

async function projectList() {
    const container = document.getElementById('right-column')
    const list = await api.get(githubAddress);

    for (const project of list) {

        const div = document.createElement('div')
        div.className = 'project';
        container.appendChild(div);

        console.log(project);
        const link = document.createElement('a');
        link.className = 'project-link';
        link.textContent = project.name;
        link.href = project.html_url

        div.appendChild(link);

        const description = document.createElement('p');
        description.textContent = project.description;
        div.appendChild(description);

    }
}

projectList();
