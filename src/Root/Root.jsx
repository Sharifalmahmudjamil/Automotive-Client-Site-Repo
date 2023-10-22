import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins dark dark:bg-black">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;