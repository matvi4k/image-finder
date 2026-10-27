import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import pixabayApi from "../../services/pixabay-api";

import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    hits: [],
    searchQuery: "",
    isLoading: false,
    error: null,
    currentPage: 1,
    showModal: false,
    modalURL: ""
  };
  
  openModal = ( largeURL ) => {
    this.setState({ modalURL: largeURL })
    this.toggleModal()
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.setState(
        { searchQuery: this.props.query, hits: [], currentPage: 1 },
        () => {
          this.fetchImages();
        },
      );
    }
  }

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    pixabayApi({ searchQuery, currentPage })
      .then(({ data }) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { hits, isLoading, error, showModal, modalURL } = this.state;

    return (
      <>
        <ul className={s.gallery}>
          {hits.map(({ id, webformatURL, largeImageURL, name }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={name}
              largeURL={largeImageURL}
              onClick={this.openModal}
            />
          ))}
        </ul>
        {isLoading && <Loader />}
        {!isLoading && <Button onClick={this.fetchImages} />}
        {error && <h2>Помилка!</h2>}
        {showModal && <Modal src={modalURL} onClose={this.toggleModal} />}
      </>
    );
  }
}

export default ImageGallery;