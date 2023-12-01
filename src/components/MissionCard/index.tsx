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
      <p className="mission-planet-year">{year}</p>
      <p className="mission-planet-country">{country}</p>
      <p className="mission-planet-destination">{destination}</p>
    </div>
  );
}

export default MissionCard;
