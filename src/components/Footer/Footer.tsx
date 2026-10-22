import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css["footer"]}>
      <h2 className={css["title"]}>Title</h2>
      <p className={css["description"]}>Test</p>
    </div>
  );
};

export default Footer;
