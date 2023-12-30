import { useAuthStore } from '@/stores/useAuthStore'

export default (to, from, next) => {
	const auth = useAuthStore()

	let exceptionalRoutes = ['login', 'register', 'forgot-password']
	let isGoingExceptionalRoutes = exceptionalRoutes.includes(to.name)

  
	if (!auth.isLoggedIn) {
		if (isGoingExceptionalRoutes) {
			next()
			return
		} else {
			next({ name: 'login' })
			return
		}
	}

	if (auth.isLoggedIn && isGoingExceptionalRoutes) {
		next({ name: 'dashboard'})
	} else {
		next()
	}
}