import Title from '../Title';
import MissionCard from '../MissionCard';
import missionsList from '../../data/missions';

function Missions() {
  return (
    <div className="missions">
      <Title headline="Missions" />
      {missionsList.map((mission) => (
        <MissionCard key={ mission.name } mission={ mission } />
      ))}
    </div>
  );
}

export default Missions;
