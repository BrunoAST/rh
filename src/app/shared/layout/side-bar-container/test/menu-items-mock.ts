import { MenuItems } from "@innove/rh-core-ui";
import * as faker from "faker";

export const MENU_ITEMS_MOCK: MenuItems[] = [
  {
    name: faker.random.word(),
    url: faker.internet.url(),
    ionIconName: faker.random.word()
  },
  {
    name: faker.random.word(),
    url: faker.internet.url(),
    ionIconName: faker.random.word()
  }
];
