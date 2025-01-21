import { useSelector } from 'react-redux'
const useAuth = () => {
    const { user, isLoggedIn, accessToken } = useSelector(state => state.auth)
    return {
        user: user,
        accessToken,
        protector: (allowedList = []) => {
            if (!isLoggedIn) {
                return false
            }
            for (let role of allowedList) {
                if (user.role_id === role) {
                    return true
                }
            }
            return false
        }
    }
}

export default useAuth