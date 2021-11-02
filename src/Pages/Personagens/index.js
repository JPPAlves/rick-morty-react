import { useEffect, useState } from "react";
import HeaderResponsive from "../../Componts/HeaderResponsive";
import api from "../../Api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Personagens() {

    const [data, setData] = useState(null);
    const [name, setName] = useState("");
    useEffect(() => {
        // async function loadAll() {
        //     let res = await api.getPersonagemByName();
        //     setData(res.data)
        //     console.log(res.data)

        // }
        // loadAll();
    }, []);

    function ClickMouse(event) {
        event.preventDefault();
        console.log("Escolhendo nome:", name);
        //let res = await api.getPersonagemByName(name);
    }


    return (

        <div>
            <HeaderResponsive />
            <div className="search-container">
                <form onSubmit={ClickMouse}>
                    <input onChange={(e) => {
                        setName(e.target.value);
                    }} />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </button>


                </form>

            </div>
        </div>

    );
}
export default Personagens;