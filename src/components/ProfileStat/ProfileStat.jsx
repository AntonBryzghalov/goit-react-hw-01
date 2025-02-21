import css from "./ProfileStat.module.css";

export default function ProfileStat({ name, value }) {
  return (
    <>
      <span className={css.name}>{name}</span>
      <span className={css.value}>{value}</span>
    </>
  );
}
