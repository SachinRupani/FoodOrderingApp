import {CalculatedAmountDataType} from '../../data/CalculatedAmountDataType';

export type BottomBarCheckoutViewProps = {
  onCheckoutButtonClickEvent: () => void;
  calculatedAmountData: CalculatedAmountDataType;
  taxPercentage: number;
};
