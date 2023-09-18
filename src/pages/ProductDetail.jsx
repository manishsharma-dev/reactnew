import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
    const params = useParams();
    const productId = params.productId;
    return (
        <>
        <div>Product Details</div>
        <p>{productId}</p>
        <p><Link to=".." relative='path'>Back</Link></p>
        </>
        
    )
}
