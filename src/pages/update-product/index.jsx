import Filters from "../../components/Filters";

export default function UpdateProductPage() {
  const selectedCategory = "";
  const categorySelected = () => {};

  return (
    <div className="grid grid-cols-12 p-10">
      <Filters
        categorySelect={categorySelected}
        selectedCategory={selectedCategory}
      />
      <div className="col-span-10">Edit</div>
    </div>
  );
}
