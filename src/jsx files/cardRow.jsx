import DisplayCard from "./card.jsx"
import "../css files/cardsRow.css"
import { useState, useEffect } from "react";
import axios from "axios"


function Card_row() {

    // const card_data = [
    //     {
    //         imgSrc:'src/assets/images/mahelblashwar india.png',
    //         items:['Mahabaleshwar, India','Villa (Complete)','4 rooms with attached Sauna','$765 per night','4.5 star'],
    //     },
    //     {
    //         imgSrc:'src/assets/images/mahelblashwar india.png',
    //         items:['Mahabaleshwar, India','Villa (Complete)','4 rooms with attached Sauna','$765 per night','4.5 star'],
    //     },
    //     {
    //         imgSrc:'src/assets/images/mahelblashwar india.png',
    //         items:['Mahabaleshwar, India','Villa (Complete)','4 rooms with attached Sauna','$765 per night','4.5 star'],
    //     }
    // ];
    const [data, setData] = useState([]);
    useEffect(() => {
        // sending api request to backend to get all the cards info from database
        axios.get("http://localhost:3000/api/listing")
        .then((response)=>
        {
            console.log(response.data)
            setData(response.data); 
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, [])

    return (
        <div className="Row">
            {data.map((data_to_pass, index) => (
                <DisplayCard key={index} imageSrc={data_to_pass.imgSrc} items={data_to_pass.items} />
            ))
            }
        </div>
    );
}

export default Card_row;