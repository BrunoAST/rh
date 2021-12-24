import { MenuItems } from "@innove/rh-core-ui";
import * as faker from "faker";
import { APP_ROUTES } from "src/app/shared/routes/app-routes";

export const MENU_ITEMS_MOCK: MenuItems[] = [
  {
    name: faker.random.word(),
    url: APP_ROUTES.competenceRegister,
    ionIconName: faker.random.word()
  },
  {
    name: faker.random.word(),
    url: "/",
    ionIconName: faker.random.word()
  }
];
