import { useState } from "react";
import { Container } from "@mui/system";
import unsplash from "./api/unsplash";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PhotoList from "./components/PhotoList";

const App = () => {
  const [images, setImages] = useState([]);

  const fetchPhotos = async (term) => {
    const response = await unsplash.get("/search/photos?per_page=30", {
      params: { query: term },
    });

    const results = response.data.results;
    setImages(results);
    console.log(images);
  };

  return (
    <>
      <Header />
      <SearchBar onSubmit={fetchPhotos} />
      <PhotoList images={images} />
    </>
  );
};

export default App;
