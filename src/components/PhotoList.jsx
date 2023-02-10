import { ImageList } from "@mui/material";
import { Stack } from "@mui/system";
import Photo from "./Photo";

const PhotoList = ({ images }) => {
  const renderedPhotos = images.map((image) => {
    return <Photo key={image.id} image={image} />;
  });

  return (
    <div>
      <Stack spacing={4}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {renderedPhotos}
        </ImageList>
      </Stack>
    </div>
  );
};

export default PhotoList;
