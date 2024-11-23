function AddProduct(){
    return (
        <div className="p-2">
            <h1 className="text-lg font-bold  p-2">Add Product</h1>
            <form method="post" className="mt-4 panel p-2 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="">Product</label><br />
                    <input type="text" placeholder="Product Name" className="form-input"/>
                </div>
                <div>
                    <label htmlFor="">Product img</label><br />
                    <input type="file" placeholder="img" className="file" />
                </div>
            </form>
        </div>
    )
}

export default AddProduct;