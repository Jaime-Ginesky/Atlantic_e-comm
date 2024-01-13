import ProductCard from '../product-card/product-card.component';
import { CpContainer, Preview, Title } from './category-preview.styles.js';


const CategoryPreview = ({ title, products }) => (
    <CpContainer>
        <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
            {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
        </Preview>
    </CpContainer>
)


export default CategoryPreview;