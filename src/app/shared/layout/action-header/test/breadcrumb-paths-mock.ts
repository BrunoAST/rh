import { BreadcrumbsPaths } from "@innove/rh-core-ui";
import * as faker from "faker";

export const BREADCRUMBS_PATHS: BreadcrumbsPaths[] = [
  {
    name: faker.random.word(),
    pageUrl: faker.internet.url()
  },
  {
    name: faker.random.word(),
    pageUrl: faker.internet.url()
  }
];
