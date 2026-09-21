import { FoodTestItem } from "./types";
import { NDC_WHIPPING_CREAM_TESTS } from "./ndc-whipping-cream-content";
import { CEREALS_GRAINS_TESTS } from "./cereals-grains-content";
import { BAKERY_CONFECTIONERY_TESTS } from "./bakery-confectionery-content";
import { PROCESSED_PACKAGED_TESTS } from "./processed-packaged-content";
import { BEVERAGES_TESTS } from "./beverages-content";
import { PULSES_OILS_SPICES_TESTS } from "./pulses-oils-spices-content";
import { MEAT_POULTRY_TESTS } from "./meat-poultry-content";
import { NAMKEENS_SNACKS_TESTS } from "./namkeens-snacks-content";

export * from "./types";
export * from "./ndc-whipping-cream-content";
export * from "./cereals-grains-content";
export * from "./bakery-confectionery-content";
export * from "./processed-packaged-content";
export * from "./beverages-content";
export * from "./pulses-oils-spices-content";
export * from "./meat-poultry-content";
export * from "./namkeens-snacks-content";
export * from "./products-data";

export const FOOD_TESTING_DATABASE: FoodTestItem[] = [
  ...NDC_WHIPPING_CREAM_TESTS,
  ...CEREALS_GRAINS_TESTS,
  ...BAKERY_CONFECTIONERY_TESTS,
  ...PROCESSED_PACKAGED_TESTS,
  ...BEVERAGES_TESTS,
  ...PULSES_OILS_SPICES_TESTS,
  ...MEAT_POULTRY_TESTS,
  ...NAMKEENS_SNACKS_TESTS,
];
