import { useState } from "react";

const Input=(initialValue) =>{
  const [value, setValue] = useState(initialValue);

  function handelChange(event) {
    setValue(event.target.value);
  }
  return {
    value,
    onchange: handelChange,
  };
}

export default Input