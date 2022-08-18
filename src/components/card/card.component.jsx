import "./card.styles.css";

const Card = (props) => {
  const { name, id } = props.monster;
  return (
    <div className="card-container">
      <img
        alt={`Monster: ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
