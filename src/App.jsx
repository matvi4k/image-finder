import { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Loader } from "./components/Loader/Loader";

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