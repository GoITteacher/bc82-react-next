import css from "./AppleCounter.module.css";

interface AppleCounterProps {
  handleIncrement: () => void;
}

const AppleCounter = ({ handleIncrement }: AppleCounterProps) => {
  return (
    <div className={css["appleCounter"]}>
      <button onClick={handleIncrement}>Apples++</button>
    </div>
  );
};

export default AppleCounter;
