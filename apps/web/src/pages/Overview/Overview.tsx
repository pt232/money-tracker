import OverviewCard from "./OverviewCard";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <div className={styles.overviewCardContainer}>
      <OverviewCard
        title="Net worth"
        amount="€17.750,39"
        difference="7,8%"
        isPositiveDifference
      />
      <OverviewCard
        title="Income"
        amount="€875,99"
        difference="0,3%"
        isPositiveDifference={false}
      />
      <OverviewCard
        title="Expenses"
        amount="€275,20"
        difference="2,4%"
        isPositiveDifference={false}
      />
      <OverviewCard
        title="Savings"
        amount="€600,79"
        difference="7,8%"
        isPositiveDifference
      />
    </div>
  );
}
