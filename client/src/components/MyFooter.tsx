import {Link} from "react-router-dom";

function MyFooter() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center bg-base-200 opacity-50">
            <Link to="/" className="flex justify-between items-center m-4">MATTIA</Link>
        </footer>
    )
}

export default MyFooter;