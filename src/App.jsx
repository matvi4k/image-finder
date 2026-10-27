import { Component } from "react";
import SearchBar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    query: "",
  }
  
  onSubmit = (query) => {
    this.setState({
      query
    })
  }

  render() {
    const { query } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery query={query}/>
      </>
    );
  }
}

export default App;