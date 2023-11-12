import Sidebar from "./components/Sidebar";
import data from "./data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import VideoContent from "./components/VideoContent";
import CallToAction from "./components/CallToAction";

function App() {
    const { Featured, TendingNow } = data;
    const [selectedMovie, setSelectedMovie] = useState(Featured);
    const [isVideoShown, setIsVideoShown] = useState(false);
    const trendingData = TendingNow.sort((a, b) => new Date(a.Date) - new Date(b.Date));

    const backgroundImage = require(`./assets/${selectedMovie.CoverImage}`);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        arrows: false
    };

    useEffect(() => {
        const selectedMovieId = localStorage.getItem("selected_movie");
        if (selectedMovieId) {
            const selectedItem = trendingData.find((item) => item.Id === selectedMovieId);
            setSelectedMovie(selectedItem);
        } else {
            setSelectedMovie(Featured);
        }
    }, []);

    const generateBgImage = (image) => {
        const backgroundImage = require(`./assets/${image}`);

        return `url("${backgroundImage}")`;
    };

    const handleTrendingItemClick = (item) => {
        localStorage.setItem("selected_movie", item.Id);
        setSelectedMovie(item);
        setIsVideoShown(false)

        setTimeout(() => {
            setIsVideoShown(true);
        }, 2000);
    };

    return (
        <div className={`main-content ${isVideoShown ? "bg-none" : ""}`} style={{ backgroundImage: `url("${backgroundImage}")` }}>
            { isVideoShown && <VideoContent url={selectedMovie.VideoUrl} /> }
            <Sidebar />
            <CallToAction selectedMovie={selectedMovie} />
            <div className="carousel-content">
                <div className="title">Trending Now</div>
                <Slider {...settings}>
                    { trendingData.slice(0, 50).map((item) => (
                        <div key={item.Id} className="slider-item" onClick={() => handleTrendingItemClick(item)}>
                           <div style={{ backgroundImage: generateBgImage(item.CoverImage) }} />
                        </div>
                    )) }
                </Slider>
            </div>

        </div>
  );
}

export default App;
