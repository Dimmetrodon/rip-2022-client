import {useDispatch} from "react-redux";
import {fetchRemoveFromBasketAction} from "../store/actions/basketAction";

export const BasketCard = ({note}) => {
    const dispatch = useDispatch()
    const handleRemove = () =>{
        note.pk && dispatch(fetchRemoveFromBasketAction(note.pk))
    }
    return <div>
        <p>Статус: {note.status}</p>
        <p>Дата бронирования: {note.post_date}</p>
        <p></p>
        <button onClick={handleRemove}>Убрать</button>
    </div>
}