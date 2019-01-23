import { getLocalUser } from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        authError: null,
        activities: []
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.authError;
        },
        activities(state) {
            return state.activities;
        }
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.authError = null;
        },
        loginSuccess(state, payload) {
            state.authError = null;
            state.isLoggedIn = true;
            state.loading - false;
            state.currentUser = payload.data.me;

            localStorage.setItem('user', JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.authError = payload.error;
        },
        logout(state) {
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        updateActivities(state, payload) {
            state.activities = payload;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        getActivities(context) {
            axios.get('https://api.pipe.run/v1/activities', {
                headers: {
                    "Token": context.state.currentUser.token
                }
            })
            .then((response) => {
                context.commit('updateActivities', response.data.data)
            })
        },
    }
}