import {Link} from "react-router-dom";

export default function User(props) {

    let{item, url} = props;

    return (
        <div>
            {item.name}
            <Link to={url + '/' + item.id}> -> user details</Link>
        </div>
    );
}