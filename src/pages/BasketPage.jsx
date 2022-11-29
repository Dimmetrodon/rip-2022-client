import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetBasketAction} from "../store/actions/basketAction";
import { BasketCard} from "../components/BasketCard";

export const BasketPage = () =>{
    const dispatch = useDispatch()
    const {apartments, fetchActionStatus} = useSelector(store=>store.basket)

    useEffect(()=>{dispatch(fetchGetBasketAction())},[dispatch, fetchActionStatus])


    return (
        <div>
            <Link to="/basket">Бронь</Link>
            <div>{!!apartments && apartments.map(note=><BasketCard key={note.pk} note={note}/>)}</div>
        </div>
    )
}