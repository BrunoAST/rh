import { BreadcrumbsPaths } from "@innove/rh-core-ui/dist/types/components/breadcrumbs/types/breadcrumbs-paths";
import { APP_ROUTES } from "src/app/shared/routes/app-routes";

export const COMPETENCE_BREADCRUMBS: BreadcrumbsPaths[] = [
  {
    name: "Competências",
    pageUrl: APP_ROUTES.competence
  },
  {
    name: "Criar competência",
    pageUrl: `${APP_ROUTES.competence}/${APP_ROUTES.register}`
  }
];
