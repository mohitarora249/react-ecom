import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-56 object-contain"
        src={product.image}
        alt="Mountain"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <div className="font-bold text-xl mb-2">${product.price}</div>
        <p className="text-gray-700 text-base line-clamp-3">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-5">
        <Link
          to={`/edit-product/${product.id}`}
          className="bg-red-500 p-4 rounded"
        >
          Edit Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
