import { BreadcrumbsPaths } from "@innove/rh-core-ui/dist/types/components/breadcrumbs/types/breadcrumbs-paths";
import { APP_ROUTES } from "src/app/shared/routes/app-routes";

export const AFFIRMATION_REGISTER_BREADCRUMBS: BreadcrumbsPaths[] = [
  {
    name: "Afirmações",
    pageUrl: APP_ROUTES.affirmation
  },
  {
    name: "Criar afirmação",
    pageUrl: `${APP_ROUTES.affirmation}/${APP_ROUTES.register}`
  }
];
