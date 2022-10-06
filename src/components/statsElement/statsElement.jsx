export const StatsElement = ({ statsElement: { label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>
    </>
  );
};
