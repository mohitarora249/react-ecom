export default function AddProduct({
  updateProductInfo,
  product,
  submitCallback,
}) {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="productName"
        >
          Product Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productName"
          name="title"
          value={product.title}
          type="text"
          placeholder="Enter Product Name..."
          onChange={updateProductInfo}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="price"
        >
          Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          name="price"
          type="number"
          placeholder="Enter Price..."
          value={product.price}
          onChange={updateProductInfo}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          value={product.description}
          onChange={updateProductInfo}
          placeholder="Enter Description..."
        />
      </div>
      <button
        className="bg-gray-400 py-3 px-3 rounded"
        type="submit"
        onClick={submitCallback}
      >
        Submit
      </button>
    </form>
  );
}
