// Write your classes here

class Tree {
  construct(species) {
    this.species = species
  }
  
  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  }
}

class Deciduous extends Tree {
  construct(name) {
    super(species)
    this.name = name
  }
  
  static definition {
    return `${super.definition()} + `
  }
}