import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../../rtk/slices/productSlice";
import MenuLayout from "../MenuLayout/MenuLayout";

function SideDish() {
  const { chicken, pasta, sausage, bread, potato } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  return (
    <div>
      <MenuLayout name="Breakfast & Brunch Recipes" data={chicken} />
      <MenuLayout name="Lunch Recipes" data={pasta} />
      <MenuLayout name="Appetizers & Snack Recipes" data={sausage} />
      <MenuLayout name="Dinner Recipes" data={bread} />
      <MenuLayout name="Dessert Recipes" data={potato} />
    </div>
  );
}

export default SideDish;
