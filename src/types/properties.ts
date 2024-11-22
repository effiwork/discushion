export type PropertysStore = PropertyStore[];
export interface PropertyStore{
    title :string;
    type :PropertyTypes;
}
export enum PropertyTypes{
    text,
    status,
    boolean,
    single_select,
    multi_select,
    percentage,
    date,
    date_range
}