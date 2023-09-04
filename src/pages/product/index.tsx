import styles from './ProductPage.module.scss';

import ProductSlider from './productSlider';

import { useLoadProduct } from '../../app/appStore/hooks';

function ProductPage(): JSX.Element {
  const product = useLoadProduct();
  const { title, description, discount, imageLinks, quantity } = product || {};
  const actualPrice = product?.discountedPrice;
  const oldPrice = product?.originalPrice;
  const stockText = quantity ? 'In stock' : 'Sold Out';
  let weight = '';
  let color = '';
  let rating = '';
  product?.attributes.forEach((item) => {
    if (item.name === 'color') color = item.value.label;
    if (item.name === 'weight') weight = item.value.label;
    if (item.name === 'rating') rating = item.value.label;
  });

  const infArr = [
    { title: 'Name', content: title },
    { title: 'In stock', content: quantity },
    { title: 'Weight', content: weight },
    { title: 'Color', content: color },
    { title: 'Rating', content: rating },
  ];

  return (
    <div className={styles.product}>
      <div className={styles.sliderAndMenu}>
        {imageLinks ? <ProductSlider linksArr={imageLinks} /> : ''}
        <div className={styles.menu}>
          <div>
            <h2 className={styles.menutitle}>{title}</h2>
            <div className={styles.menuRating}>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          </div>
          <div>
            <div>
              <span className={styles.menuActualPrice}>{discount !== 0 ? actualPrice : oldPrice} €</span>
              {discount !== 0 ? <span className={styles.menuOldPrice}>{oldPrice} €</span> : null}
            </div>
            <div className={styles.menuStock}>{stockText}</div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionAndInf}>
        <h3 className={styles.title}>Product Description</h3>
        <p className={styles.description}>{description}</p>
        <h3 className={styles.title}>Specification</h3>
        <ul className={styles.inf}>
          {infArr.map((item: { title: string | undefined; content: string | number | undefined }) => {
            return (
              <li className={styles.infItem} key={item.title}>
                <div className={styles.itemtitle}>{item.title}</div>
                <div className={styles.itemPoints} />
                <div>{item.content}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductPage;
