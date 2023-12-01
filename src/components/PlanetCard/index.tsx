type PlanetCardProps = {
  planetName : string,
  planetImage:string
};

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div>
      <p className="planetName">
        {planetName}
      </p>
      <img src={ planetImage } alt={ planetName } />
    </div>
  );
}

export default PlanetCard;
