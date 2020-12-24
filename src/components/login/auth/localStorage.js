const STORAGE_KEY = 'token'

const isLogged = () => !!localStorage.getItem('id')
const login = token => localStorage.setItem(STORAGE_KEY, token)
const logout = () => localStorage.removeItem(STORAGE_KEY)

export { isLogged, login, logout }