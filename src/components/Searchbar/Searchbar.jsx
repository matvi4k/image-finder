import { Component } from "react";
import { IoIosSearch } from "react-icons/io";
import style from "./Searchbar.module.css";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    const {name, value} = e.currentTarget;
    this.setState({
        [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const query = this.state.query.trim()
    if (!query) return

    this.props.onSubmit(query)

    this.setState({
        query: ""
    })
  }

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.button} aria-label="Search">
            <IoIosSearch />
          </button>

          <input
            className={style.input}
            name="query"
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar