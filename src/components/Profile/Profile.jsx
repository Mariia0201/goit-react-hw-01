import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css.card}>
      <div className={css.generalInfo}>
    <img className={css.avatar}
      src="props.image"
      alt="User avatar"
    />
        <p className={css.name}>{props.name}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
  </div>

      <ul className={css.stats}>
    <li className={css.statsItem}>
      <span>Followers</span>
      <span>{props.stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span>Views</span>
      <span>{props.stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span>Likes</span>
      <span>{props.stats.likes}</span>
    </li>
  </ul>
    </div>
  )
}

export default Profile
