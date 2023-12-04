import Title from '../Title';
import MissionCard from '../MissionCard';
import missionsList from '../../data/missions';
import './missions.css';

function Missions() {
  return (
    <div className="missions-container">
      <Title headline="MISSÕES" />
      <div className="missions">
        {missionsList.map((mission) => (
          <MissionCard key={ mission.name } mission={ mission } />
        ))}
      </div>
    </div>
  );
}

export default Missions;
