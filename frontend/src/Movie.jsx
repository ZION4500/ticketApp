import { useParams } from "react-router";

export default function Movie() {
  const { id } = useParams();
  return <>{id}</>;
}
