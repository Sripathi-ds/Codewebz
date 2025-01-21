import { useDispatch } from 'react-redux';
import { authActions } from '../redux/reducers/auth-slice';
import { axiosFetch } from '../utils/apiUtils';

const useRefreshToken = () => {
    const dispatch = useDispatch();

    const refresh = async () => {
        try {
            const response = await axiosFetch.get('accounts/token/refresh/', {
                withCredentials: true,
                headers:{},
            });
            const { data } = response.data;
            dispatch(authActions.grantLoginAccess({
                accessToken: data.access_token,
                user: { ...data.user },
                isLoggedIn: true
            }));
            return data.access_token;
        } catch (err) {
            console.error("🚀 ~ file: use-refresh-token.js:21 ~ refresh ~ err:", err)
            dispatch(authActions.removeLoginAccess());
            localStorage.removeItem('user');
            window.location.replace('/accounts/signin');
        }
    }
    return refresh;
}

export default useRefreshToken;