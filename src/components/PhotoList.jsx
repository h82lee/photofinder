import Photo from "./Photo";

const PhotoList = ({ images }) => {
  const renderedPhotos = images.map((image) => {
    return <Photo key={image.id} image={image} />;
  });

  return <div>{renderedPhotos}</div>;
};

export default PhotoList;
