import Play from "../assets/icons/play.svg";
import {convertSecondsToHoursMinutesSeconds} from "../helpers";

const CallToAction = ({ selectedMovie }) => {
    const duration = convertSecondsToHoursMinutesSeconds(Number(selectedMovie.Duration));
    const titleImage = require(`../assets/${selectedMovie.TitleImage}`);

    return (
        <div className="content">
            <div className="call-to-action">
                <span className="type">{selectedMovie.Category}</span>
                <img src={titleImage} alt={selectedMovie.Title} />
                <div className="title">{selectedMovie.Title}</div>
                <div className="details">
                    <div className="info">
                        <span>{selectedMovie.ReleaseYear}</span>
                        <span>{selectedMovie.MpaRating}</span>
                        <span>{duration}</span>
                    </div>
                    <div className="description">{selectedMovie.Description}</div>
                </div>
                <div className="actions">
                    <button className="btn btn-white">
                        <img src={Play} alt="play" />
                        Play
                    </button>
                    <button className="btn btn-blue">More Info</button>
                </div>
            </div>
        </div>
    )
};

export default CallToAction;