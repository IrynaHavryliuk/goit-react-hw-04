import Loader from 'react-loader-spinner';

function ImageLoader() {
  return (
    <Loader
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClass
    />
  );
}

export default ImageLoader;