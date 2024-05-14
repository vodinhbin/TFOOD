import { useDispatch, useSelector } from "react-redux";
import MenuLayout from "../MenuLayout/MenuLayout"
import { useEffect } from "react";
import { getListProduct } from "../../../rtk/slices/productSlice";

function Pizza() {
  const {favor , seafood, kid, traditional} = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getListProduct())
  },[])

  return (
    <div>
      <MenuLayout name='CHICKEN RECIPES' data={favor}/>
      <MenuLayout name='SALMON RECIPES' data={seafood}/>
      <MenuLayout name='PORK CHOP RECIPES' data={kid}/>
      <MenuLayout name='GROUND BEEF RECIPES' data={traditional}/>
    </div>
  )
}

export default Pizza;