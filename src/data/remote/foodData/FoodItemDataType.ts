import {FoodItemDietType} from './FoodItemDietType';

/**
 * Interface representing the Food Item data model
 * (coming inside the Food List API response)
 */
export interface FoodItemDataType {
  id: number;
  name: string;
  image?: string | undefined | null;
  description?: string | undefined | null;
  item_type: FoodItemDietType;
  category?: string | undefined | null;
  category_id?: number | undefined | null;
  price: number;
}
