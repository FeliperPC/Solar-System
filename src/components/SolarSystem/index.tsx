import Title from '../Title';
import planetsList from '../../data/planets';
import PlanetCard from '../PlanetCard';

function SolarSystem() {
  return (
    <div className="solar-system">
      <Title headline="Planets" />
      {planetsList.map(({ name, image }, index) => (
        <PlanetCard key={ index } planetName={ name } planetImage={ image } />
      ))}
    </div>
  );
}

export default SolarSystem;
