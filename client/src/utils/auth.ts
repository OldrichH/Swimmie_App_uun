/**
 * To say if user is authenticated or not
 * @returns boolean
 */
export const isAuthenticated = () => {
    return localStorage.getItem('isAuth') === 'true';
}

/**
 * Set user isAuthenticated = true
 */
export const setUserAuthenticated = () => {
    localStorage.setItem('isAuth', 'true');
}

/**
 * Set user isAuthenticated = false
 */
export const removeUserAuthenticated = () => {
    localStorage.removeItem('isAuth');
}
