import PostComponent from "../components/PostComponent";

export default function Homepage() {
  return (
    <div>
      <PostComponent
        username={"username"}
        createdAt={"createdAt"}
        postBody={"postBody"}
      />
    </div>
  );
}
