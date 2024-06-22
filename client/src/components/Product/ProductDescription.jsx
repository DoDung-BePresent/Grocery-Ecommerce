const ProductDescription = ({ product }) => {
  return (
    <div className="p-4 text-base font-normal flex flex-col gap-2 dark:text-dark-l-1">
      <h2>
        <span className="font-semibold">Name:</span> {product.name}
      </h2>
      <h3>
        <span className="font-semibold">Brand:</span> {product.brand}
      </h3>
      <p>
        <span className="font-semibold">Description:</span>{" "}
        {product.description}
      </p>
      <p>
        <span className="font-semibold">Price:</span> {product.price}
      </p>
      <p>
        <span className="font-semibold">Rating:</span> {product.rating} / 5
      </p>
      <p>
        <span className="font-semibold">Region:</span> {product.region}
      </p>
      <p>
        <span className="font-semibold">Weight:</span> {product.weight}g
      </p>
      <p>
        <span className="font-semibold">Roast Level:</span>{" "}
        {product.roast_level}
      </p>
      <div>
        <h4>
          <span className="font-semibold">Flavor Profile:</span>{" "}
          {product.flavor_profile.join(", ")}
        </h4>
      </div>
      <div>
        <h4>
          <span className="font-semibold">Grind Options:</span>{" "}
          {product.grind_option.join(", ")}
        </h4>
      </div>
    </div>
  );
};

export default ProductDescription;
