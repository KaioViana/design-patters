import { Component } from "./Component";

/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 * 
 * Usually, it's the Leaf objects that do the actual work, whereas Composite
 * objects only delegate to their sub-components.
 */
class Leaf extends Component {
  public operation(): string {
    return 'Leaf'
  }
}

export { Leaf }
