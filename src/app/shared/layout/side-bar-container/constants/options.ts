import { MenuItems } from "@innove/rh-core-ui/dist/types/shared/types/menu-items";
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
  },
  {
    name: "Afirmações",
    url: APP_ROUTES.affirmation,
    ionIconName: "list"
  }
];
