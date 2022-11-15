import {useParams} from "react-router";
import {Apartment} from "../components/Apartment";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetOneApartmentAction} from "../store/actions/apartmentAction";
import {reset} from "../store/reducers/apartmentReducer";

export const ApartmentPage = () =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const {apartment} = useSelector(store=>store.apartment)
    useEffect(()=>{
        id && dispatch(fetchGetOneApartmentAction(id))

        return () => {
            dispatch(reset())
        }
    },[dispatch, id])

    return (
    apartment ?
        <div>
            <Link to="/">Главная</Link>/<Link to={`/apartment/${apartment.pk}`}>{apartment.name}</Link>
            <Apartment apartment={apartment}/>
        </div>:
        <h1>Таких апартаментов не существует:(</h1>)
}