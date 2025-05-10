import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from '../components/Navbar';

const products = [
    {
        id: '11',
        name: 'Samsung Galaxy S24',
        price: 50999,
        image: 'https://images.samsung.com/uk/smartphones/galaxy-s24/images/galaxy-s24-highlights-kv.jpg?imbypass=true',
        tag: 'No.1 Selling Android Smartphone',
    },
    {
        id: '22',
        name: 'Motorola G85 5G',
        price: 14999,
        image: 'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g85-1.jpg',
        tag: 'Just ₹14,999*',
    },
    {
        id: '33',
        name: 'Apple iPhone 13',
        price: 39999,
        image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large_2x.jpg',
        tag: 'From ₹39,999*',
    },
    {
        id: '44',
        name: 'OnePlus 12R',
        price: 39999,
        image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12r-1.jpg',
        tag: 'Flagship Killer',
    },
    {
        id: '55',
        name: 'Google Pixel 7a',
        price: 34999,
        image: 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-7a-1.jpg',
        tag: 'Best Camera in Segment',
    },
    {
        id: '66',
        name: 'Nothing Phone (2)',
        price: 44999,
        image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_7A_Colors_1.width-1000.format-webp.webp',
        tag: 'Unique Transparent Design',
    },
];



const ProductList = () => {
    return (
        <>
            <Navbar />
            <div className="p-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} id={product.id}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ProductList;
