// import { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import { blogsData } from "../../data";
import { useLocation } from "react-router-dom";

const AllBlog = () => {
  // const { title } = useParams();
  const location = useLocation();

  // const [bodyData, setBodyData] = useState("");
  // useEffect(() => {
  //   const data = blogsData.filter((blog) => blog.title === title);
  //   setBodyData(data[0].body);
  // }, [title]);

  return (
    <div>
      <h1>{location.state.title}</h1>
      <p>{location.state.body}</p>
    </div>
  );
};

export default AllBlog;
