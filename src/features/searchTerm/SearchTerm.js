import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, selectTerm } from "./searchTermSlice";

export default function SearchTerm() {
    let term;
    const dispatch = useDispatch();

    // Function to change text value in Slice with every change
    const onChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
        term = useSelector(selectTerm);
    }

    // Bedore </header> add <Link to={mathcUrl/search:${term}} element={<Posts>} />
    return (
        <header>
            <div className="logo">
                <img />
                <p>RedditMinimal</p>
            </div>
            <div className="searchBar">
                <input id="search" type="text" value={term} onChange={onChange} />
                <img />
            </div>
        </header>
    )
} 