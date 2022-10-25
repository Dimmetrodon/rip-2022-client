import {Link} from "react-router-dom";
import {apartments} from "../apartments";
import {useEffect, useState} from "react";
import {Apartment} from "../components/Apartment";

export const HomePage = () =>{
    const [display, setDisplay] = useState(false)
    const [apartment, setApartment] = useState(apartments[0])
    useEffect(()=>{setApartment(apartments[Math.floor(Math.random()*apartments.length)])},[display])
    return <div>
        <Link to="/">Главная</Link>
        <div>
            <button onClick={()=>setDisplay((prev)=>!prev)}>{display? "Скрыть" : "Показать"}</button>
            {display && <div style={{display: "flex", flexDirection: "column"}}>
                {apartments.map(apartment => <Link to={`/apartment/${apartment.id}`} key={apartment.id}>{apartment.id}. {apartment.name}</Link>)}
            </div>}
        </div>
    </div>
}