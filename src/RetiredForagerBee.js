class RetiredForagerBee extends ForagerBee {

  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.color = 'grey';
    this.canFly = false;
  }

  forage (treasure) {
    return 'I am too old, let me play cards instead'
  }

  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
  // TODO..
};
