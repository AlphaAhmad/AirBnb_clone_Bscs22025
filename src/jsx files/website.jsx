import Navbar from './nav.jsx';
import SearchBar from './search.jsx';
import ButtonList from './buttonlist.jsx';
import "../css files/buttonList.css"
import Card_row from './cardRow.jsx';
function Website() {
    return (
        <>
            <Navbar/>
            <SearchBar />
            <ButtonList/>
            <Card_row/>
            <Card_row/>
            {/* TODO: Pass data to card row dynamically from website.jsx*/}
        </>
    )
}
export default Website; 