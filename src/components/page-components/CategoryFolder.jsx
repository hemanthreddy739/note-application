import React from "react";
import "../../css/CategoryFolder.css";
import { useNavigate } from "react-router-dom";

function CategoryFolder({ categoryName }) {
  const navigate = useNavigate();
  const handleDoubleClick = () => {
    const endpointName = "/allnotes/" + categoryName;
    navigate(endpointName);
    // alert(categoryName);
  };

  return (
    <div className="category-folder" onClick={handleDoubleClick}>
      <img src="FolderIcon.png" alt="Folder Icon" />
      <br />
      <p>{categoryName}</p>
    </div>
  );
}

export default CategoryFolder;
