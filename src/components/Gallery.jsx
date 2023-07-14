import cone from "../images/mobile/image-gallery-cone.jpg";
import milkbottles from "../images/mobile/image-gallery-milkbottles.jpg";
import orange from "../images/mobile/image-gallery-orange.jpg";
import sugarCubes from "../images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <img src={milkbottles} alt="/" />
      <img src={orange} alt="/" />
      <img src={cone} alt="/" />
      <img src={sugarCubes} alt="/" />
    </div>
  );
};

export default Gallery;
