import { ActionListFieldConfig } from "@innove/rh-core-ui/dist/types/components/action-list/types/action-list-field-config";

export const AFFIRMATION_LIST_FIELD_CONFIGS: ActionListFieldConfig[] = [
  {
    valueToBeShowed: (value) => value.affirmation
  }
];
