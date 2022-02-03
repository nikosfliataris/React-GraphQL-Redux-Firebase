import React, { useState } from "react";
import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";
import { useSelector } from "react-redux";
function Directory() {
  const [sections, setSections] = useState();
  const section = useSelector((state) => state.directory.sections);
  console.log(section[0].title);
  return (
    <div className="directory-menu">
      {section.map((items) => (
        <MenuItem
          title={items.title}
          key={items.id}
          id={items.id}
          imageUrl={items.imageUrl}
          size={items.size}
          linkUrl={items.linkUrl}
        />
      ))}
    </div>
  );
}

export default Directory;
