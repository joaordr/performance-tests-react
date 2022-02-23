import dynamic from "next/dynamic";
import { AddProductToWishListProps } from './AddProductToWishList';
import { memo, useState } from "react";
// import { AddProductToWishList } from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => { return import('./AddProductToWishList').then(mod => mod.AddProductToWishList); },  {
    loading: () => <span>Carregando...</span>
});

interface ProductItemProps {
    product: {
        id: number;
        price: number
        title: string;
    },
    onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
            <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

            {isAddingToWishlist && (
                <AddProductToWishList onAddToWishlist={() => onAddToWishList(product.id)} onRequestClose={() => setIsAddingToWishlist(false)} />
            )}

        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
});