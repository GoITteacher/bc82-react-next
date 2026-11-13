import { ChartCard, LineChartMock } from "@/components/ChartCard/ChartCard";

interface ChartCardProps {
  title: string;
  description: string;
  badge: string;
  delay: number;
}
const sleep = (s: number) => new Promise((res) => setTimeout(res, s));

const Chart = async ({ title, badge, description, delay }: ChartCardProps) => {
  await sleep(delay);

  return (
    <ChartCard badge={badge} description={description} title={title}>
      <LineChartMock />
    </ChartCard>
  );
};

export default Chart;
