function Product({ data, render }) {
    if (!data.length === 0) return <div>No data to show</div>;
    return <div>{data.map(render)}</div>;
}

export default Product;
