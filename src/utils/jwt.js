import jwtDecode from 'jwt-decode'

const decoded = jwt => jwtDecode(jwt)

export { decoded }
