import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchGetAllApartmentsAction} from "../store/actions/apartmentAction";
import {useDebounce} from "../hooks/useDebounce";

export const HomePage = () =>{
    const dispatch = useDispatch()
    const {apartments} = useSelector(store=>store.apartment)
    const [value, setValue] = useState('')
    const [minCost, setMinCost] = useState('')
    const [maxCost, setMaxCost] = useState('')
    const debouncedValue = useDebounce(value)
    const debouncedMinCost = useDebounce(minCost)
    const debouncedMaxCost = useDebounce(maxCost)

    const handleMinCost = (e) => {
        +e.target.value === 0 ? setMinCost('') : setMinCost(+e.target.value)
    }

    const handleMaxCost = (e) => {
        +e.target.value === 0 ? setMaxCost('') : setMaxCost(+e.target.value)
    }


    useEffect(()=>{
        const values = {q:debouncedValue || 'all', min_cost:debouncedMinCost, max_cost:debouncedMaxCost}
        dispatch(fetchGetAllApartmentsAction(values))

    }, [dispatch, debouncedValue, debouncedMinCost, debouncedMaxCost])
    return <div>
        <Link to="/">Главная</Link>
        <div>
            <div><p>Поиск по названию:</p><input style={{background:'transparent'}} placeholder="Введите название" value={value} onChange={(e)=>setValue(e.target.value)}/></div>
            <div><p>Минимальная стоимость:</p><input style={{background:'transparent'}} type="number" value={minCost} onChange={handleMinCost}/></div>
            <div><p>Максимальная стоимость:</p><input style={{background:'transparent'}} type="number" value={maxCost} onChange={handleMaxCost}/></div>
            <div style={{display: "flex", flexDirection: "column"}}>
                {apartments.map(apartment => <div key={apartment.pk}>
                    <Link to={`/apartment/${apartment.pk}`} >{apartment.name}</Link>
                    <p>Стоимость: {apartment.cost}</p>
                </div>)}
            </div>
        </div>
    </div>
}