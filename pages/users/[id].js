import {useRouter} from "next/router";

export default function () {
    const {query} = useRouter();
    console.log(query)

    return (
        <div>
            User with ID {query.id}
        </div>
    )
}
