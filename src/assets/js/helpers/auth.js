export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('https://api.pipe.run/v1/auth', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej('Error');
            })
    })
}

export function getLocalUser() {
    const user = localStorage.getItem('user');

    if(!user) {
        return null;
    }
    return JSON.parse(user);
}
