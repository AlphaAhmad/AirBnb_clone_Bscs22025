import { useEffect, useState } from 'react';


function ButtonList() {

    const paths = [
        'src/assets/images/boat.png',
        'src/assets/images/boat.png',
        'src/assets/images/boat.png',
        'src/assets/images/boat.png',
        'src/assets/images/boat.png',
        'src/assets/images/boat.png',
        'src/assets/images/boat.png',
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
                    Beachfront
                </button>
                <button>
                    <img src={imgs[1]} alt="no img found" />
                    Camping
                </button>
                <button>
                    <img src={imgs[2]} alt="no img found" />
                    Desert
                </button>
                <button>
                    <img src={imgs[3]} alt="no img found" />
                    Windmills
                </button>
                <button>
                    <img src={imgs[4]} alt="no img found" />
                    Towers
                </button>
                <button>
                    <img src={imgs[5]} alt="no img found" />
                    Boats
                </button>
                <button>
                    <img src={imgs[6]} alt="no img found" />
                    Barns
                </button>
            </div>
            <button onClick={() => scroll(150)} className='ScrollBtn'>
                &#62;
            </button>
        </div>

    )
}



export default ButtonList;