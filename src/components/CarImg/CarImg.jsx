import { useEffect, useState } from 'react';
import { ImageCar } from './CarImg.styled';

export default function CarImg({ data }) {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);


  useEffect(() => {
    const img = new Image();

    img.src = data.img||data.photoLink;
     
    img.onload = () => {
      setImageLoading(true);
    };

    img.onerror = () => {
      setImageLoading(false);
      setImageError(true);
    };
  }, [data.img,data.photoLink]);

  return (
    <>
      {imageError ? (
        <ImageCar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQGLXqfrB-jiNF6UwmBg8W2NWgWF3oYVaKw&usqp=CAU" alt="Error Loading Image Car"/>
      ) : (
        imageLoading && <ImageCar src={data.img.length > 7?data.img : data.photoLink} alt="Car" />
      )}

    </>
  );
}