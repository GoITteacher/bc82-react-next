import css from "./GrapesCounter.module.css";

interface GrapesCounterProps {
  handleIncrement: () => void;
}

const GrapesCounter = ({ handleIncrement }: GrapesCounterProps) => {
  return (
    <div className={css["grapesCounter"]}>
      <button onClick={handleIncrement}>Grapes++</button>
    </div>
  );
};

export default GrapesCounter;
