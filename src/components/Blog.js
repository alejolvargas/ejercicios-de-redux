import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postsAction";

const Blog = (props) => {
  console.log(props);

  const click = () => {
    props.dispatch(fetchPosts());
  };

  return (
    <div>
      <h1>nueva entrada de blog</h1>

      <button onClick={click}>Cargar posts</button>
      {
        props.blog.isFetching ? (
          <h2>go</h2> // si es verdadero haga esto
        ) : (
          <ul>
            {props.blog.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) // si es falso haga esto
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Blog);
