import styles from "../styles/styles.module.scss";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

interface Props {
  children: JSX.Element;
}

export const ProductCardImage = () => {
  return (
    <img
      className={styles.productImg}
      src="./coffee-mug.png"
      alt="Coffee Mug"
    />
  );
};

export const ProductCardDescription = () => {
  return <span className={styles.productDescription}> </span>;
};

export const ProductCardTitle = () => {
  return (
    <h1>Titulo</h1>
  );
};

export const ProductCardButtons = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};

const ProductCard = ({ children }: Props) => {
  return <div className={styles.productCard}>{children}</div>;
};

export default ProductCard;

ProductCard.Image = ProductCardImage;
ProductCard.Title = ProductCardTitle;
ProductCard.Description = ProductCardDescription;
ProductCard.Buttons = ProductCardButtons;
