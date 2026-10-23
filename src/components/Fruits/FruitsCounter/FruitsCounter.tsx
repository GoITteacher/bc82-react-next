import css from "./FruitsCounter.module.css";

interface FruitsCounterProps {
  apples: number;
  lemons: number;
  grapes: number;
}

const FruitsCounter = ({ apples, lemons, grapes }: FruitsCounterProps) => {
  return (
    <div className={css["fruitsCounter"]}>
      <p>Apples: {apples}</p>
      <p>Grapes: {grapes}</p>
      <p>Lemons: {lemons}</p>
    </div>
  );
};

export default FruitsCounter;
