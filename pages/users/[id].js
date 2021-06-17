import {useRouter} from "next/router";

export default function UserId() {
  const {query} = useRouter();
  return <div>User with ID {query.id}</div>
}
