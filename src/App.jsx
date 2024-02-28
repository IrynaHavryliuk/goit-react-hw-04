import { useState, useEffect } from 'react';
import axios from 'axios';
import { HotToastProvider, useToasts } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageLoader from './components/ImageLoader/ImageLoader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const { addToast } = useToasts();
  const accessKey = '6V-3GZ59GwW9BVTbyMeERWIU1-FRqCKmUEvLShWiSVg'; // Замініть на свій ключ доступу

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=nature&client_id=${accessKey}`);
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError(error);
        addToast('Error loading images', { appearance: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page, addToast, accessKey]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <HotToastProvider>
      <div className="App">
        {error && <ErrorMessage />}
        {loading && <ImageLoader />}
        <ImageGallery images={images} />
        <LoadMoreBtn onClick={handleLoadMore} hasMoreImages={!loading && !error && images.length > 0} />
      </div>
    </HotToastProvider>
  );
}

export default App;
