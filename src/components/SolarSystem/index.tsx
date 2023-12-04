import Title from '../Title';
import planetsList from '../../data/planets';
import PlanetCard from '../PlanetCard';
import './solarsystem.css';

function SolarSystem() {
  return (
    <div className="solar-system">
      <Title headline="PLANETAS" />
      <div className="planets-container">
        {planetsList.map(({ name, image }, index) => (
          <PlanetCard key={ index } planetName={ name } planetImage={ image } />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
