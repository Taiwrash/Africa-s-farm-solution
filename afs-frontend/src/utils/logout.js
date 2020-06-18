const logout = () => {
  sessionStorage.removeItem('user-id')
}

export default logout;