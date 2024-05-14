import Carousel from "../cpn/Carousel";
import Contact from "../cpn/Contact";
import Pagelayout from "../cpn/Pagelayout";
import Service from "../cpn/Services";
import Step from "../cpn/Step";
import MenuLayout from "./Menu/MenuLayout/MenuLayout";

function HomePage() {
  const foodList = [
    {
      "id": 1,
      "img": "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/75/75/8/NxhOU2TMa2ZhvnHCoobQ_0S9A8180.jpg",
      "name": "QUICK AND EASY CHICKEN ENCHILADAS",
      "price": 8,
      "size": "chicken breasts",
      "category": "ChickenRecipes",
      "description": "I made these using up some sliced cheese from my fridge. My family loved the chicken with the green sauce. I will make again; it's easy, cheap and tastes great."
    },
    {
      "id": 2,
      "img": "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/11/12/57/JYpNCleQTSwjLUjUstwg_DSC_0136.JPG",
      "name": "30 MINUTE CHICKEN AND DUMPLINGS",
      "price": 8,
      "size": "medium",
      "category": "ChickenRecipes",
      "description": "This is a Rachel Ray recipe I had in my file for quite awhile, and had to try it recently to satisfy a craving. It turned out really well."
    },
    {
      "id": 3,
      "img": "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/49/52/71/yqZVTfDRQ8KiFgrvSJRe_0S9A9577.jpg",
      "name": "SPINACH AND CHEESE STUFFED CHICKEN BREAST",
      "price": 9,
      "size": "medium",
      "category": "ChickenRecipes",
      "description": "Ready, Set, Cook! Hidden Valley Contest Entry. I love creating my own recipes and menus for people. I have been doing this since I was about 12 years old."
    },
    {
      "id": 4,
      "img": "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/39/78/Ve6XwMvToypkQvkIyESC_0S9A1605.jpg",
      "name": "CHICKEN QUESADILLAS",
      "price": 12,
      "size": "medium",
      "category": "ChickenRecipes",
      "description": "I have found that it works great to make the filling up a head of time. Just prep and put in the refrigerator until needed. This is one of our favorite meals."
    }
   

]

  return (
    <Pagelayout>
      <Carousel />
      <MenuLayout name='New Product' data={foodList}/>
      <Service/>
      <Step/>
      <Contact/>
    </Pagelayout>
  );
}

export default HomePage;
