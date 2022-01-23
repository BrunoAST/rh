import { ActionListFieldConfig } from "@innove/rh-core-ui/dist/types/components/action-list/types/action-list-field-config";

export const COMPETENCE_LIST_FIELD_CONFIGS: ActionListFieldConfig[] = [
  {
    valueToBeShowed: (value) => value.name
  },
  {
    valueToBeShowed: (value) => value.email
  }
];
