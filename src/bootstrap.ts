import { Bootstrapper, ContainerBuilder } from 'react-habitat';

import { Juice } from './components/Juice/Juice';
import { NavBar } from './components/NavBar/NavBar';

export class Bootstrap extends Bootstrapper {
  constructor() {
    super();

    const builder = new ContainerBuilder();

    builder.register(NavBar).as('navbar');
    builder.register(Juice).as('juice');

    this.setContainer(builder.build());
  }
}
