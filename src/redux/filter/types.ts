export enum SortPropertyEnum {
	RATING_DESС = 'rating',
	RATING_ASC = '-rating',
	TITLE_DESС = 'title',
	TITLE_ASC = '-title',
	PRICE_DESС = 'price',
	PRICE_ASC = '-price',
}

export type Sort = {
	name: string;
	sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
	searchValue: string;
	categoryId: number;
	currentPage: number;
	sort: Sort;
}