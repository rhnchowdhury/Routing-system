import { useState } from "react";
import { blogsData } from "../../data";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const trunCate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div>
      <h1>This is Blog Page</h1>
      <br />
      <div>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <section key={id}>
              <h2>{title}</h2>
              <p>{trunCate(body, 350)}</p>
              {/* <Link to={title}>Learn More</Link> */}
              <Link to={title} state={{ id, title, body }}>
                Learn More
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
