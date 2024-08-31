import { useState } from "react";
import TechnologyItem from "./TechnologyItem";

const Technology = ({ technology }) => {
  // set technology to arry  id of  1
  const [seletedtechnology, setSelectedTechnology] = useState(technology[0]);

  return (
    <div>
      <TechnologyItem
        seletedtechnology={seletedtechnology}
        setSelectedTechnology={setSelectedTechnology}
        technology={technology}
      />
    </div>
  );
};

export default Technology;
