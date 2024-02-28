function LoadMoreBtn({ onClick, hasMoreImages }) {
    return (
      hasMoreImages && (
        <button onClick={onClick}>Load more</button>
      )
    );
  }
  
  export default LoadMoreBtn;