import {Link} from "react-router-dom";
import {apartments} from "../apartments";
import {useEffect, useState} from "react";
import {Apartment} from "../components/Apartment";

export const HomePage = () =>{
    const [display, setDisplay] = useState(apartments[0])
    const [apartment, setApartment] = useState()
    useEffect(()=>{setApartment(apartments[Math.floor(Math.random()*apartments.length)])},[display])
    return <div>
        <h1>Домашняя страница</h1>
        <p>Случайные апартаменты:</p>
        <Apartment apartment={apartment}/>
        <button onClick={()=>setDisplay((prev)=>!prev)}>{display? "Скрыть" : "Показать"}</button>
        {display && <div style={{display: "flex", flexDirection: "column"}}>
            {apartments.map(apartment => <Link to={`/apartment/${apartment.id}`} key={apartment.id}>{apartment.id}. {apartment.name}</Link>)}
        </div>}
    </div>
}