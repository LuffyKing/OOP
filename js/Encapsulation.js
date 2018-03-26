import SportTeam from './Encapsulation';
/**
 * A class that serves as the class for footbal teams
 */
class FootballTeam extends SportTeam {
  constructor(sportInfo) {
    super(sportInfo);
    let _formation = sportInfo.formation;
    let _styleOfPlay = sportInfo.styleOfPlay;
  }
  setFormation(newFormation) {
    const hasFormation = !!newFormation;
    if (hasFormation){
      _formation = newFormation;
    }
  }
  getFormation() {
    return _formation;
  }

  getStyleOfPlay(){
    return _styleOfPlay;
  }

  setStyle(newStyleOFplay){
    const hasFormation = !!newFormation;
    if (hasFormation){
      _formation = newFormation;
    }
  }
}
