export default function clearStorage() {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('isProfileCreated')
}