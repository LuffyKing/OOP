class SuperTeam{
  constructor() {
    if (this.constructor == SuperTeam) {
      throw new Error("Abstract classes are not to be instantiated.");
    }
  }
    bullySmallerClubs(){
      throw new Error("Method has not been Implemented");
    }
}

class RealMadrid extends SuperTeam{
  bullySmallerClubs(){
    console.log('Bought their best player');
  }
}
