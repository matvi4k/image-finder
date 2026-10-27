import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import api from "../../services/api";
import style from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    hits: [],
    searchQuery: "",
    isLoading: false,
    error: null,
    currentPage: 1,
    totalHits: 0,
    showModal: false,
    modalURL: ""
  };
  requestId = 0;
  
  openModal = ( largeURL ) => {
    this.setState({ modalURL: largeURL })
    this.toggleModal()
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.requestId += 1;
      this.setState(
        {
          searchQuery: this.props.query,
          hits: [],
          currentPage: 1,
          totalHits: 0,
          error: null,
        },
        () => {
          this.fetchImages();
        },
      );
    }
  }

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    if (!searchQuery) return;

    const requestId = this.requestId;
    this.setState({ isLoading: true, error: null });
    api({ searchQuery, currentPage })
      .then(({ data }) => {
        if (requestId !== this.requestId) return;
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...data.hits],
          currentPage: prevState.currentPage + 1,
          totalHits: data.totalHits,
        }));
      })
      .catch((error) => {
        if (requestId === this.requestId) this.setState({ error });
      })
      .finally(() => {
        if (requestId === this.requestId) this.setState({ isLoading: false });
      });
  };

  render() {
    const {
      hits,
      searchQuery,
      isLoading,
      error,
      totalHits,
      showModal,
      modalURL,
    } = this.state;

    return (
      <>
        <ul className={style.gallery}>
          {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags || "Image"}
              largeURL={largeImageURL}
              onClick={this.openModal}
            />
          ))}
        </ul>
        {isLoading && <Loader />}
        {!isLoading && searchQuery && (error || hits.length < totalHits) && (
          <Button onClick={this.fetchImages} />
        )}
        {error && <h2>Помилка!</h2>}
        {showModal && <Modal src={modalURL} onClose={this.toggleModal} />}
      </>
    );
  }
}

export default ImageGallery;