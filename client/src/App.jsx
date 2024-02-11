import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Nav from "./components/Nav/navigationBar";
import User from "./pages/User/userPage";
import Access from "./pages/access/login";
import SignUp from "./pages/access/signUp";
import NavBar from "./components/Nav/NavBar";
import CreatePost from "./pages/post/post";
import Homepage from "./pages/homepage";
import { SinglePost } from "./components/Post/SinglePost";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<Homepage />} />
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Access />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            {/* Add more routes for other pages */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
