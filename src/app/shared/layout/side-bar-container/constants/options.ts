import { MenuItems } from "@innove/rh-core-ui";
import { APP_ROUTES } from "src/app/shared/routes/app-routes";

export const OPTIONS: MenuItems[] = [
  {
    name: "Início",
    url: APP_ROUTES.home,
    ionIconName: "apps"
  },
  {
    name: "Competências",
    url: APP_ROUTES.competence,
    ionIconName: "extension-puzzle"
  }
];
