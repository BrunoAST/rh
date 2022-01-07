import { ActionListFieldConfig } from "@innove/rh-core-ui";

export const COMPETENCE_LIST_FIELD_CONFIGS: ActionListFieldConfig[] = [
  {
    valueToBeShowed: (value) => value.name
  },
  {
    valueToBeShowed: (value) => value.email
  }
];
