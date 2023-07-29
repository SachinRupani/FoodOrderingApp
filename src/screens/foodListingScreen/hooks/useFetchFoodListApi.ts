import {useGetFoodListQuery} from '../../../api/FoodApiService';

/**
 * Custom hook function to make API call
 * and return the different states - loading, error, data(on success)
 */
export const useFetchFoodListApi = () => {
  const {isLoading, error, data} = useGetFoodListQuery({});

  return {
    isFoodListLoading: isLoading,
    foodListError: error,
    arrayDataFoodList: data?.items ?? [],
    applicableTax: data?.tax_applicable ?? {type: 'percentage', value: 0},
  };
};
