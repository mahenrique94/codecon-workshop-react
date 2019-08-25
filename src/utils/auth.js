import { decoded } from './jwt'

const STORAGE_KEY = 'CodeConWorkshopReact'

const getToken = () => window.localStorage.getItem(STORAGE_KEY)
const login = token => window.localStorage.setItem(STORAGE_KEY, token)
const logout = () => window.localStorage.removeItem(STORAGE_KEY)
const isLogged = () => !!getToken()
const getTokenInfo = () => decoded(getToken())

export {
    getToken,
    login,
    logout,
    isLogged,
    getTokenInfo
}
