import { Bootstrapper, ContainerBuilder } from 'react-habitat';

import { Test } from './components/Test/Test';

export class Bootstrap extends Bootstrapper {
  constructor() {
    super();

    const builder = new ContainerBuilder();

    builder.register(Test).as('Test');

    this.setContainer(builder.build());
  }
}
