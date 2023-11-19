export interface FiltersOptions{
    brands: any[],
    rating: minMax,
    price: minMax
}
export interface FiltersValues{
    brands: any[],
    rating: minMax,
    price: minMax
}
export interface minMax{
    min: number,
    max: number
}