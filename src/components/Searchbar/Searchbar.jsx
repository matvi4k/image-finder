import { Component } from "react";
import s from './SearchBar.module.css'

import { IoIosSearch } from "react-icons/io";

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

    this.props.onSubmit(this.state.query)

    this.setState({
        query: ""
    })
  }

  render() {
    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <IoIosSearch />
          </button>

          <input
            className={s.input}
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