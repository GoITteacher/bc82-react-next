import BookCard from "../BookCard/BookCard";
import css from "./BookList.module.css";

const books = [
  {
    icon: "/icons/book.svg",
    section: "Художня література",
    currentSlide: 1,
    totalSlides: 12,
    title: "1984",
    description:
      "Антиутопічний роман Джорджа Орвелла про тоталітарне суспільство, контроль над інформацією та боротьбу за свободу.",
    isBestseller: true,
    price: 349,
  },
  {
    icon: "/icons/brain.svg",
    section: "Саморозвиток",
    currentSlide: 2,
    totalSlides: 15,
    title: "Атомні звички",
    description:
      "Джеймс Клір пояснює, як маленькі щоденні зміни допомагають формувати корисні звички та досягати великих результатів.",
    isBestseller: true,
    price: 420,
  },
  {
    icon: "/icons/money.svg",
    section: "Фінанси",
    currentSlide: 3,
    totalSlides: 10,
    title: "Багатий тато, бідний тато",
    description:
      "Роберт Кійосакі розповідає про фінансову грамотність, інвестування та різницю між активами й пасивами.",
    isBestseller: true,
    price: 390,
  },
  {
    icon: "/icons/rocket.svg",
    section: "Бізнес",
    currentSlide: 4,
    totalSlides: 14,
    title: "Від нуля до одиниці",
    description:
      "Пітер Тіль ділиться власним баченням створення стартапів, інновацій та побудови успішного бізнесу.",
    isBestseller: false,
    price: 450,
  },
  {
    icon: "/icons/heart.svg",
    section: "Романтика",
    currentSlide: 5,
    totalSlides: 11,
    title: "До зустрічі з тобою",
    description:
      "Зворушлива історія Джоджо Мойєс про кохання, складні життєві рішення та силу людських почуттів.",
    isBestseller: true,
    price: 320,
  },
  {
    icon: "/icons/planet.svg",
    section: "Наукова фантастика",
    currentSlide: 6,
    totalSlides: 16,
    title: "Дюна",
    description:
      "Френк Герберт створює масштабний фантастичний світ, у якому політика, релігія та екологія визначають долю людства.",
    isBestseller: true,
    price: 590,
  },
  {
    icon: "/icons/psychology.svg",
    section: "Психологія",
    currentSlide: 7,
    totalSlides: 13,
    title: "Мислення швидке й повільне",
    description:
      "Даніель Канеман досліджує два типи мислення та пояснює, як люди ухвалюють рішення й чому часто помиляються.",
    isBestseller: false,
    price: 480,
  },
  {
    icon: "/icons/history.svg",
    section: "Історія",
    currentSlide: 8,
    totalSlides: 12,
    title: "Sapiens. Людина розумна",
    description:
      "Ювал Ной Харарі розповідає історію людства від появи Homo sapiens до формування сучасної цивілізації.",
    isBestseller: true,
    price: 550,
  },
  {
    icon: "/icons/code.svg",
    section: "Програмування",
    currentSlide: 9,
    totalSlides: 18,
    title: "Чистий код",
    description:
      "Роберт Мартін пояснює принципи написання зрозумілого, підтримуваного та якісного програмного коду.",
    isBestseller: false,
    price: 620,
  },
  {
    icon: "/icons/mountain.svg",
    section: "Пригоди",
    currentSlide: 10,
    totalSlides: 12,
    title: "Гобіт",
    description:
      "Класична пригодницька історія Дж. Р. Р. Толкіна про подорож Більбо Торбина, небезпечні випробування та пошуки скарбів.",
    isBestseller: true,
    price: 410,
  },
];

const BookList = () => {
  return (
    <div className={css["bookList"]}>
      <ul>
        {books.map((item, i) => {
          return (
            <BookCard
              key={item.title}
              icon={item.icon}
              section={item.section}
              currentSlide={item.currentSlide}
              totalSlides={item.totalSlides}
              title={item.title}
              description={item.description}
              isBestseller={item.isBestseller}
              price={item.price}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
