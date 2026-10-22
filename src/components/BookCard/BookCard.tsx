import css from "./BookCard.module.css";

interface BookCardProps {
  icon: string;
  section: string;
  currentSlide: number;
  totalSlides: number;
  title: string;
  description: string;
  isBestseller?: boolean;
  price?: number;
}

const BookCard = ({
  icon,
  section,
  currentSlide,
  totalSlides,
  title,
  description,
  isBestseller,
  price,
}: BookCardProps) => {
  return (
    <div className={css["bookCard"]}>
      <div>
        <div>
          <img src={icon} alt="" />
          <p>{section}</p>
        </div>

        <p>
          {currentSlide} / {totalSlides}
        </p>
      </div>

      <h5>{title}</h5>
      <p>{description}</p>
      {price && <p>price: {price}</p>}
      {isBestseller && <p>BESTSELLER</p>}

      <p>Ціна: {price ? <span>Платна</span> : <span>Безкоштовна</span>}</p>
    </div>
  );
};

export default BookCard;
