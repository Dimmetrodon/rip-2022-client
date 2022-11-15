import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetAllApartmentsAction} from "../store/actions/apartmentAction";

export const HomePage = () =>{
    const dispatch = useDispatch()
    const {apartments} = useSelector(store=>store.apartment)

    useEffect(()=>{
        dispatch(fetchGetAllApartmentsAction())
    }, [dispatch])
    return <div>
        <Link to="/">Главная</Link>
        <div>
            <div style={{display: "flex", flexDirection: "column"}}>
                {apartments.map(apartment => <Link to={`/apartment/${apartment.pk}`} key={apartment.pk}>{apartment.name}</Link>)}
            </div>
        </div>
    </div>
}