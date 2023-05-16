import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import buttonJ from "./components/buttonJ";


const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };


  return (
    <>
    
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
