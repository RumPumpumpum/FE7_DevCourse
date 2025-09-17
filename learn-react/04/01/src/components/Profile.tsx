export default function Profile({
  cardImg,
  profImg,
  alias,
  userId,
  clickHandler,
}: ProfProps) {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={cardImg} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={profImg} />
          <h3 className="alias">{alias}</h3>
          <p className="username">{userId}</p>
          <button onClick={clickHandler}>Follow</button>
        </div>
      </article>
    </>
  );
}
