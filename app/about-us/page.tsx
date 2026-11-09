import OurCompany from "@/components/about-us/OurCompany/OurCompany";
import css from "./Page.module.css";
import Polices from "@/components/about-us/Polices/Polices";
import FAQ from "@/components/about-us/FAQ/FAQ";

const Page = () => {
  return (
    <div className={css["page"]}>
      <OurCompany />
      <Polices />
      <FAQ />
    </div>
  );
};

export default Page;
