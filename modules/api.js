'use-strict';
export const api = {
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}