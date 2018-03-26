import SportTeam from './SportsTeam';
/**
 * A class that serves as the class for footbal teams
 */

class FootballTeam extends SportTeam {
  constructor(sportInfo) {
    super(sportInfo);
    this.formation = sportInfo.formation;
    this.styleOfPlay = sportInfo.styleOfPlay;
  }
}
/**
 * A class that serves as the class for American football
 */

class AmericanFootballTeam extends SportTeam {
  constructor(sportInfo) {
    super(sportInfo);
    this.specialTeams = sportInfo.specialTeams;
    this.offence = sportInfo.offence;
    this.defence = sportInfo.defence;
  }
}
