import DisplayCard from "./card.jsx"
//import "../css files/cardsRow.css"
import { useState, useEffect } from "react";



function Card_row() {

    const card_data = [
        {
            imgSrc:'src/assets/images/mahelblashwar india.png',
            items:['1','2','3','4'],
        },
        {
            imgSrc:'src/assets/images/mahelblashwar india.png',
            items:['1','2','3','4'],
        },
        {
            imgSrc:'src/assets/images/mahelblashwar india.png',
            items:['1','2','3','4'],
        }
    ];
    const [data, setData] = useState([]);
    useEffect(() => {
        //const data_to_pass = card_data.map(link => link);
        setData(card_data); 
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