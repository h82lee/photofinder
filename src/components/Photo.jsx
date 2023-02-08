const Photo = ({ image }) => {
  const { description, urls } = image;
  return <img alt={description} src={urls.small} />;
};

export default Photo;
