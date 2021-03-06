import { BreadcrumbsPaths } from "@innove/rh-core-ui/dist/types/components/breadcrumbs/types/breadcrumbs-paths";
import { APP_ROUTES } from "src/app/shared/routes/app-routes";

export const COMPETENCE_BREADCRUMBS: BreadcrumbsPaths[] = [
  {
    name: "CompetĂȘncias",
    pageUrl: APP_ROUTES.competence
  },
  {
    name: "Criar competĂȘncia",
    pageUrl: `${APP_ROUTES.competence}/${APP_ROUTES.register}`
  }
];
