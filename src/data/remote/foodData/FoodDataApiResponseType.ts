import {FoodItemDataType} from './FoodItemDataType';
import {TaxApplicableType} from './TaxApplicableType';

/**
 * Interface representing the Food List API's response
 */
export interface FoodDataApiResponseType {
  items?: Array<FoodItemDataType> | undefined | null;
  tax_applicable?: TaxApplicableType | undefined | null;
  carousel_images?: Array<string> | undefined | null;
}
