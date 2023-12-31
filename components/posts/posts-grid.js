import React from "react";
import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

const PostsGrid = (props) => {
  return (
    <ul className={styles.grid}>
      {props.post.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
