import TotalTasks from "../../Tasks/TotalTasks/TotalTasks";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer center">
			<p>All rights reserved to Orel Ovadia &copy;</p>
            <TotalTasks/>
            {/* Moshe */}
        </div>
    );
}

export default Footer;
