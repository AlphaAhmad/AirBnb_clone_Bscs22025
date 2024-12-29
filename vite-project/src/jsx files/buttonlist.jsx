import { useEffect, useState } from 'react';


function ButtonList() {

    const paths = [
        '/public/BeachLogo.jpg',
        '/public/MansionLogo.jpg',
        '/public/CabinLogo.jpg',
        '/public/GuestHouse.jpg',
    ];

    const [imgs, setImgs] = useState([]); // initializing an empty array in the start

    useEffect(() => {
        // Load images Dynamically from paths
        const LoadImages = paths.map(path => path);
        setImgs(LoadImages);
    }, []);

    return (
        <div className="buttonsContainer">
            <button onClick={() => scroll(-150)} className='ScrollBtn'>
                &#60;
            </button>
            <div className="scroleableList">
                <button>
                    <img src={imgs[0]} alt="no img found" />
                    Beachfronts
                </button>
                <button>
                    <img src={imgs[1]} alt="no img found" />
                    Mansions
                </button>
                <button>
                    <img src={imgs[2]} alt="no img found" />
                    Cabins
                </button>
                <button>
                    <img src={imgs[3]} alt="no img found" />
                    Guest Houses
                </button>
            </div>
            <button onClick={() => scroll(150)} className='ScrollBtn'>
                &#62;
            </button>
        </div>

    )
}



export default ButtonList;