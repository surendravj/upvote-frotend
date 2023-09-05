// jwtDecoder.js
import jwtDecode from 'jwt-decode'
import sessionStorageHelper from './sessionStorage'

export const authHelper = {
  
  getJwtToken: () => {
    return sessionStorageHelper.getData('upvote').token
  },

  decodeJwtToken: () => {
    try {
      const decodedToken = jwtDecode(authHelper.getJwtToken())
      return decodedToken
    } catch (error) {
      console.error('Error decoding JWT token:', error)
      return null
    }
  },

  isAuthenticated: () => {
    try {
      if (sessionStorageHelper.getData('upvote')) {
        return sessionStorageHelper.getData('upvote').token!==null ? true : false
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }
}

export default authHelper
