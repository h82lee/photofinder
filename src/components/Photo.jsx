import { ImageListItem } from "@mui/material";

const Photo = ({ image }) => {
  const { description, urls } = image;
  return (
    <ImageListItem>
      <img
        alt={description}
        src={`${urls.regular}?w=300&h=300&fit=crop&auto=format`}
        srcSet={`${urls.regular}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default Photo;
