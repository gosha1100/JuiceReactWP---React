import { Bootstrapper, ContainerBuilder } from 'react-habitat';

import { Footer } from './components/Footer/Footer';
import { Juice } from './components/Juice/Juice';
import { NavBar } from './components/NavBar/NavBar';

export class Bootstrap extends Bootstrapper {
  constructor() {
    super();

    const builder = new ContainerBuilder();

    builder.register(NavBar).as('navbar');
    builder.register(Juice).as('juice');
    builder.register(Footer).as('footer');

    this.setContainer(builder.build());
  }
}
