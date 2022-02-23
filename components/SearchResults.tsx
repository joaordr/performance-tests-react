import { List, ListRowRenderer } from 'react-virtualized';

import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number
        title: string;
    }>
}

export function SearchResults({ results, totalPrice }: SearchResultsProps) {
    // const totalPrice = useMemo(() => {
    //     return results.reduce((total, product) => {
    //         return total + product.price;
    //     }, 0)
    // }, [results]);

    function onAddToWishList(id: number) {
        console.log(id);
    }

    // const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    //     <div key={key} style={style}>
    //         <ProductItem product={results[index]} onAddToWishList={() => onAddToWishList(results[index].id)} />
    //     </div>
    // }

    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} onAddToWishList={() => onAddToWishList(product.id)} />
                )
            })}

            {/* <List height={300} rowHeight={30} width={900} overscanRowCount={5} rowCount={results.length} rowRenderer={rowRenderer} /> */}

        </div>
    )
}