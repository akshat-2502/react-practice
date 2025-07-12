const Loading = (WrappedComponent) => {
  return function WithLoading({ isLoading, ...rest }) {
    if (isLoading) {
      return <p>Loading Data....Please Wait...</p>;
    }

    return <WrappedComponent {...rest} />;
  };
};

export default Loading;
