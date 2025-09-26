// /team/1
// /team/2
// /team/3
import { useParams } from "react-router";

export default function Team() {
  const params = useParams();
  const id = params.id;
  const groupId = params.groupId;
  return (
    <>
      <h1>Team Component</h1>
      <h2>TeamId: {id}</h2>
      <h2>GroupId: {groupId}</h2>
    </>
  );
}
