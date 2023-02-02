import { Component } from "react";
import "./search-box.component.css";
const SearchBox = function (props) {
  const { onChangeHandler, placeholder, className } = props;
  return (
    <div>
      <input
        type="search"
        onChange={onChangeHandler}
        className={`search-box ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};
/*
class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <div>
        <input
          type="search"
          onChange={onChangeHandler}
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
*/
export default SearchBox;
