import { useState } from "react";
import Genres from "../assets/icons/genres.png";
import Home from "../assets/icons/home.png";
import Movies from "../assets/icons/movies.png";
import Search from "../assets/icons/search.png";
import TvShows from "../assets/icons/tv-shows.png";
import WatchLater from "../assets/icons/watch-later.png";
import Avatar from "../assets/avatar.png";

const sidebar = [
    { id: 1, name: "Search", icon: Search, isActive: false },
    { id: 2, name: "Home", icon: Home, isActive: true },
    { id: 3, name: "TV Shows", icon: TvShows, isActive: false },
    { id: 4, name: "Movies", icon: Movies, isActive: false },
    { id: 5, name: "Genres", icon: Genres, isActive: false },
    { id: 6, name: "Watch Later", icon: WatchLater, isActive: false },
];

const Sidebar = () => {
    const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

    return (
        <>
            <div
                className={`sidebar ${isSideBarExpanded ? "expanded" : ""}`}
            >
                { isSideBarExpanded ? (
                    <div className="avatar">
                        <img src={Avatar} alt="avatar" />
                        <span>Daniel</span>
                    </div>
                ) : null }
                { sidebar.map((item) => (
                    <div key={item.id} className={`item ${ item.isActive && isSideBarExpanded ? "expanded-active" : ""}`}>
                        <div
                            className={`${item.isActive ? "active" : ""} image-wrap`}
                            onMouseEnter={() => setIsSideBarExpanded(true)}
                            onMouseLeave={() => setIsSideBarExpanded(false)}
                        >
                            <img src={item.icon} alt={item.name} />
                        </div>
                        <span>{item.name}</span>
                    </div>
                )) }
                { isSideBarExpanded ? (
                    <div className="bottom-actions">
                        <a href="#">Language</a>
                        <a href="#">get help</a>
                        <a href="#">Exit</a>
                    </div>
                ) : null }
            </div>
            { isSideBarExpanded ? <div className="mask" /> : null }
        </>
    )
};

export default Sidebar;