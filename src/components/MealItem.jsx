import {currencyFormatter} from "../util/formatting.js";
import Button from "./UI/Button.jsx";

export default function MealItem({ meal : { id, name, image, price, description } }) {
    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${image}`} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p className='meal-item-price'>{currencyFormatter.format(price)}</p>
                    <p className='meal-item-description'>{description}</p>
                </div>
                <p className='meal-item-actions'>
                    <Button>Add to cart</Button>
                </p>
            </article>
        </li>
    );
}