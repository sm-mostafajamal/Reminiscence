import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      Posts
      <Post />
    </div>
  );
};

export default Posts;
