/* eslint-disable prettier/prettier */


export type UserPagination<T> = {
    currentPage: number;
    totalPage: number;
    limit: number;
    items: T[] | T;
    totalItem: number
}