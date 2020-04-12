export default async function ({ store, route, redirect }) {
  const isAuthenticated = !!store.state.session.user

  if (isAuthenticated) {
    return;
  }

  await store.dispatch('session/loadUser')

  if (store.state.session.user && route.name.includes('login')) {
    return redirect('/')
  }
}
