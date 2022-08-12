'use-strict';
export const api = {
    result: { data: null, error: null },
    get: async function (url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                this.result.data = data;
            } else {
                this.result.error = 'Fetch Response not OK!'
            }
        } catch (error) {
            this.result.error = error;
        }
        return this.result;
    }
}