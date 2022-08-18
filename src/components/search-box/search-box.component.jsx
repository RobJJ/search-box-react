import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <input
      className={`search-box ${props.className}`}
      type="search"
      placeholder="search monsters"
      onChange={props.handleChange}
    />
  );
};

export default SearchBox;
