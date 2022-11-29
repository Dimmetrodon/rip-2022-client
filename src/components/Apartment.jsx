import {useDispatch, useSelector} from "react-redux";
import {fetchAddToBasketAction} from "../store/actions/basketAction";
import dayjs from "dayjs";

export const Apartment = ({apartment}) => {
    const {authorized} = useSelector(store=>store.user)
    const dispatch = useDispatch()
    const handleAdd = () => {
        const post_date = dayjs(Date.now()).format('DD.MM.YYYY HH:mm')
        const values = {
            post_date,
            status:"Забронировано",
            apartment:apartment.pk,
            buyer:2,
        }
        dispatch(fetchAddToBasketAction(values))
    }
    return (
        <div>
            <p>Название: {apartment.name}</p>
            <p>Описание: {apartment.description}</p>
            <p>Стоимость: {apartment.cost}</p>
            {authorized && <button onClick={handleAdd}>Забронировать</button>}
        </div>
    )
}