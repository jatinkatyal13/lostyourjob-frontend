export default async function ({ store, redirect }) {
  const isAuthentcated = !!store.state.session.user

  if (isAuthentcated) return;

  return redirect('/login')
}