import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleAuthorized} from "../store/reducers/userReducer";

export const Header = () =>{
    const {authorized} = useSelector(store=>store.user)
    const dispatch = useDispatch()
    const handleAuth = () => {
        dispatch(handleAuthorized())
    }
    return (
        <div style={{display:"flex", width:"100vw", justifyContent:"center", gap:"20px"}}>
            <Link to="/">Главная</Link>
            {authorized && <Link to="/basket">Бронь</Link>}
            <button onClick={handleAuth}>{authorized? 'Выйти' : 'Войти'}</button>
        </div>
    )
}