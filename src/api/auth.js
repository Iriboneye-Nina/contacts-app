import axios from "axios";
const API = import.meta.env.VITE_BASE_API;

/**
 * @param {Object} signInData
 * @param {string} signInData.email
 * @param {string} signInData.password
 * @returns {Promise<{user: {firstName: string, lastName: string, email: string}, token: string}>}
 */
export const SignIn = (signInData) => {
    return axios.post(`${API}/auth/signin`, signInData)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err.message);
            throw err;
        });
};

/**
 * @param {Object} signUpData
 * @param {string} signUpData.email
 * @param {string} signUpData.password
 * @param {string} signUpData.confirmPassword
 * @param {string} signUpData.firstName
 * @param {string} signUpData.lastName
 * @returns {Promise<{user: {firstName: string, lastName: string, email: string}}>}
 */
export const SignUp = (signUpData) => {
    return axios.post(`${API}/auth/signup`, signUpData)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err.message);
            throw err;
        });
};