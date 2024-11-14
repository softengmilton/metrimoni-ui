
export const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
}

export const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w-]+/g, '')       // Remove all non-word chars
        .replace(/--+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')         // Trim - from start of text
        .replace(/-+$/, '');        // Trim - from end of text
}



export const API_BASE_URL = import.meta.env.VITE_API_URL

export const auth = {
    isAuthenticated: () => {
        return !!Storage.get('auth_token');
    },
    user: () => {
        return Storage.get('user');
    },
    token: () => {
        return Storage.get('token');
    },
    logout: () => {
        Storage.remove('user');
        Storage.remove('auth_token');
        location.href = '/';
    }
}



