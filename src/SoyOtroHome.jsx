import React from "react";
import { useState } from "react";

const SoyOtroHome = () => {
  const [changeB, setChangeB] = useState(false);

  function click() {
    setChangeB(true);
    console.log(" presionaste click");
    return;
  }

  return (
    <>
      {!changeB ? (
        <div>
          <button type="submit" onClick={click}>
            Soy un boton
          </button>
        </div>
      ) : (
        <div>
          <button type="submit" onClick={click} disabled>
            Soy un boton
          </button>
        </div>
      )}
    </>
  );
};

export default SoyOtroHome;
