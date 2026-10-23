import css from "./LemonCounter.module.css";

interface LemonCounterProps {
  handleIncrement: () => void;
}

const LemonCounter = ({ handleIncrement }: LemonCounterProps) => {
  return (
    <div className={css["lemonCounter"]}>
      <button onClick={handleIncrement}>Lemons++</button>
    </div>
  );
};

export default LemonCounter;
