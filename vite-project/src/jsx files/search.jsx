import { useState } from "react"
import "../css files/searchbar.css"

// TODO: Added button for Search but check wheather ENTER is also working for search

function SearchBar() {

    const [searchString, setSearchString] = useState('');

    const handleSearch = () => {
        // Replace this with your search logic
        console.log("Search for:", searchString);
    }

    return (
        <div className="Search">
            <input type="text"
                placeholder="Search Destinations"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
            />
            <button onClick={handleSearch} className="Search-button">Search</button>
        </div>

    )


}


export default SearchBar;