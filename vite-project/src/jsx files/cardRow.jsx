import DisplayCard from "./card.jsx"
import "../css files/cardsRow.css"
import { useState, useEffect } from "react";
import axios from "axios"


function Card_row() {

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
        axios.get("http://localhost:3000/addhouse/getall")
            .then((response) => {
                console.log(response.data)
                setData(response.data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [])

    console.log(`data_to_pass: ${data[0]?.Housename}`)

    return (
        <div className="Row">
            {data.map((data_to_pass, index) => ( // TODO: check if this list is working fine
                <DisplayCard key={index} _Id={data_to_pass._id} imageSrc={data_to_pass.imgSrc} housename={data_to_pass.Housename} Bedrooms={data_to_pass.Bedrooms} Rate={data_to_pass.Rate} />
            ))
            }
        </div>
    );
}

export default Card_row;