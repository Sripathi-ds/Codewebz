import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { jobActions } from "../redux/reducers/job-slice"
import useAxios from "./use-axios"

const useSignout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const axios = useAxios()

    return async () => {
        try {
            const response = await axios.post("/accounts/signout/", {}, { withCredentials: true })
            navigate('/accounts/signin')
            dispatch(jobActions.resetJob())
            localStorage.clear()
        }
        catch (err) {
            console.error("🚀 ~ file: use-signout.js:19 ~ return ~ err:", err)
        }
    }
}

export default useSignout