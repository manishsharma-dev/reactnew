import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const params = useParams();
    const productId = params.productId;
    return (
        <>
        <div>Product Details</div>
        <p>{productId}</p>
        </>
        
    )
}
