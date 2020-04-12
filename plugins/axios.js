export default function({ $axios, app: { $cookies } }) {
  $axios.defaults.withCredentials = true
}
