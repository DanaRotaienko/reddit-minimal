import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, selectTerm } from "./searchTermSlice";

function SearchTerm() {
    let term;
    const dispatch = useDispatch();
    term = useSelector(selectTerm);

    // Function to change text value in Slice with every change
    const onChange = (e) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    }

    // Bedore </header> add <Link to={mathcUrl{/search:${term}} element={<Posts>} />
    return (
        <div id="search-bar">
            <div className="logo">
                <img alt="icon"/>
                <p>RedditMinimal</p>
            </div>
            <div className="searchBar">
                <input id="search" type="text" value={term} onChange={onChange}/>
                <img alt="search"/>
            </div>
        </div>
    )
} 

export default SearchTerm;