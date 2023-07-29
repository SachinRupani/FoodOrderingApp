/**
 * Props type to be used for the component SearchBar
 */
export type SearchBarPropTypes = {
  onSearchTextChange: (strSearchText: string) => void;
  shouldEmptyTextOnReset: boolean;
  placeholderText: string;
};
