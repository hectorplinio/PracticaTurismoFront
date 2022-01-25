import { useRouter } from 'next/router'

function ProductDetail() {
        const router = useRouter()
        const queryString = router.query;
        console.log(queryString);
        return queryString
      }
      
 export default ProductDetail