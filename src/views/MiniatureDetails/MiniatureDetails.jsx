// css
import "../MiniatureDetails/MiniatureDetails.css"

//components
import AppTitle from "../../components/AppTitle/AppTitle";
import AppMiniatureDetails from "../../components/AppMiniatureDetails/AppMiniatureDetails";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextProduct } from '../../context/ProductContext';
import { ContextFavourite } from '../../context/FavouriteContext';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function MiniatureDetails() {
  const { miniatures } = useContext(ContextProduct);
  const navigate = useNavigate();
  const { addFavourites, deleteFavourites } = useContext(ContextFavourite);

  // ------------------------------------
  const params = useParams()
  const [product, setProduct] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);


  useEffect(() => {
    const getProductById = (id) =>
      miniatures.find((product) => product.id === parseInt(id));
    const foundProduct = getProductById(params.id);
    setProduct(foundProduct);
    setIsPageLoaded(true);
  }, [miniatures, params]);

  useEffect(() => {
    if (isPageLoaded && product === null) {
      navigate("/gallery-miniatures");
    }
  }, [isPageLoaded, product, navigate]);

  return (
    <div className="productDetails-container">
      <AppTitle title="PRODUCT DETAILS" />

      {product && (
        <AppMiniatureDetails
          key={product.id}
          productId={product.id}
          productUser={product.user}
          productTitle={product.title}
          productCategory={product.category}
          productPrice={product.price.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
          productImg={product.img}
          productDescription={product.description}
          productQuantity={product.quantity.toString()}
          onClickFavourite={() => {
            const product = miniatures.find((item) => item.id === parseInt(params.id));
            if (product.fav) {
              product.fav = false;
              deleteFavourites(product.id);
            } else {
              product.fav = true;
              addFavourites(product);
            }
          }}
          favouriteIconShow={
            product.fav ? (
              <FavoriteIcon color="white" className="iconInfo-style" />
            ) : (
              <FavoriteBorderIcon
                size="large"
                color="white"
                className="iconInfo-style"
              />
            )
          }
          favouriteInfo={product.fav ? "GUARDADO EN FAVORITOS" : "GUARDAR EN FAVORITOS"}
        />
      )}
    </div>
  );
}