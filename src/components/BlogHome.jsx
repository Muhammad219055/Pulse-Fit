import React from "react";
import HomeBlogCard from "./HomeBlogCard";
import blogImg from "../assets/blog-imgae.svg";
const BlogHome = () => {
  return (
    <div className="blog-home">
      <h1>Blog Posts</h1>
      <div className="blog-grid">
        <HomeBlogCard
          title={"Weight Loss"}
          content={
            "Discover effective workouts and strategies for shedding those extra pounds."
          }
          imageSrc={blogImg}
        />
        <HomeBlogCard
          title={"Weight Loss"}
          content={
            "Discover effective workouts and strategies for shedding those extra pounds."
          }
          imageSrc={blogImg}
        />
        <HomeBlogCard
          title={"Weight Loss"}
          content={
            "Discover effective workouts and strategies for shedding those extra pounds."
          }
          imageSrc={blogImg}
        />
        <HomeBlogCard
          title={"Weight Loss"}
          content={
            "Discover effective workouts and strategies for shedding those extra pounds."
          }
          imageSrc={blogImg}
        />
        <HomeBlogCard
          title={"Weight Loss"}
          content={
            "Discover effective workouts and strategies for shedding those extra pounds."
          }
          imageSrc={blogImg}
        />
        <HomeBlogCard
          title={"Weight Loss"}
          content={
            "Discover effective workouts and strategies for shedding those extra pounds."
          }
          imageSrc={blogImg}
        />
      </div>
    </div>
  );
};

export default BlogHome;
