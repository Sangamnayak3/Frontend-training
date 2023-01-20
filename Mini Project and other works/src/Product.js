import { useState } from "react";

function Product()
{

    const [productname , setProuctname] = useState("");
    const [price , setPrice] = useState(0);
    const [quantity , setQuantity] = useState(0);
    const [result, setResult] = useState("");

    function productNameChange(event)
    {
        setProuctname(event.target.value);
    }

    function priceChange(event)
    {
        setPrice(event.target.value);
    }

    function quantityChange(event)
    {
        setQuantity(event.target.value);
    }

    function calculate()
    {
        setResult("The Price of " + quantity + " " + productname + "'s is " + (price*quantity) + ".");
    }

    return(
        <>
        <fieldset>
            <legend>Product Details</legend>

            Name of the Product : <input type= "text" onChange={productNameChange} />
            <br/><br/>
            Price : <input type="text" onChange={priceChange} />
            <br/><br/>
            Quantity : <input type="text" onChange={quantityChange} />
            <br/><br/>

            <button onClick={calculate}>Total</button>

            <h1>{result}</h1>
        </fieldset>
        </>
    )

    
}

export default Product;