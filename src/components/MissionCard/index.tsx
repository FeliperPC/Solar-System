import './missionCard.css';
import { FaCalendarAlt, FaFlag } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

type MissionCardProps = {
  mission :{
    name:string,
    year:string,
    country:string,
    destination:string,
  }
};

function MissionCard({ mission }:MissionCardProps) {
  const { name, year, country, destination } = mission;
  return (
    <div className="mission-card">
      <h2 className="mission-planet-name">{name}</h2>
      <div className="line" />
      <div className="planet-info">
        <div className="mission-planet-year">
          <FaCalendarAlt className="icon" />
          <p>{year}</p>
        </div>
        <div className="mission-planet-country">
          <FaLocationDot className="icon" />
          <p>{country}</p>
        </div>
        <div className="mission-planet-destination">
          <FaFlag className="icon" />
          <p>{destination}</p>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
