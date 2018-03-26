import SportTeam from './SportsTeam';

class FootballTeam extends SportTeam {
  constructor(sportInfo) {
    super(sportInfo);
    this.formation = sportInfo.formation;
    this.styleOfPlay = sportInfo.styleOfPlay;
    this.bonus = sportInfo.bonus;
  }
  payPlayers(){
    this.players.forEach((player) => {
      player.amount = player.baseSalary*((this.bonus.scoring+ this.bonus.tackling)+1);
    })
  }
}
