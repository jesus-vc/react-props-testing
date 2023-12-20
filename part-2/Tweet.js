const Tweet = ({ date, message, name, username }) => {
  return (
    <div className="avatar">
      <li>{username}</li>
      <li>{name}</li>
      <li>{date}</li>
      <li>{message}</li>
    </div>
  );
};
