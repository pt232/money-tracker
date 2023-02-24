import { MdMoreVert, MdNorthEast, MdSouthEast } from "react-icons/md";
import Card from "@/components/ui/Card";
import styles from "./OverviewCard.module.css";
import classNames from "@/utils/classNames";

type OverviewCardProps = {
  title: string;
  amount: string;
  difference: string;
  isPositiveDifference: boolean;
};

export default function OverviewCard({
  title,
  amount,
  difference,
  isPositiveDifference,
}: OverviewCardProps) {
  return (
    <Card>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
        <button className={styles.settingsBtn} aria-label="Open Card Settings">
          <MdMoreVert />
        </button>
      </div>
      <span className={styles.amount}>{amount}</span>
      <p
        className={classNames(styles.difference, {
          [styles.postiveDifference]: isPositiveDifference,
          [styles.negativeDifference]: !isPositiveDifference,
        })}
      >
        {isPositiveDifference ? (
          <MdNorthEast size="16" />
        ) : (
          <MdSouthEast size="16" />
        )}
        <span>
          <span className={styles.differenceAmount}>{difference}</span> from
          last month
        </span>
      </p>
    </Card>
  );
}
