const IsAdmin = (WrappedComponent) => {
  return function WithAdminTag({ ...props }) {
    const { user } = props;
    if (user.isAdmin) {
      return (
        <div className="relative inline-block overflow-x-visible">
          <span className="text-red-500">ADMIN</span>
          <WrappedComponent {...props} />
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default IsAdmin;
