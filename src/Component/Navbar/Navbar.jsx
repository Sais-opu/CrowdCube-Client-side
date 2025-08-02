import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userRole, setUserRole] = useState(null);

    const handleLogout = async () => {
        try {
            await signOutUser();
            console.log("User logged out successfully");
        } catch (error) {
            console.error("Logout error:", error.message);
            alert("Failed to log out. Please try again.");
        }
    };

    useEffect(() => {
        if (user?.email) {
            fetch(`https://edumanage-server-nine.vercel.app/users/role?email=${user.email}`)
                .then((response) => {
                    console.log(`Status: ${response.status}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("API Response Data:", data);
                    setUserRole(data.role);
                })
                .catch((error) => {
                    console.error("Error fetching user role:", error);
                });
        }
    }, [user]);

    const dashboardLink = () => {
        switch (userRole) {
            case "User":
                return "/dashboard/user";
            case "Admin":
                return "/dashboard/admin";
            case "Myprofile":
                return "/dashboard/myprofile"
            default:
                return null;
        }
    };

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const links = (
        <>
            <li>
                <NavLink to="/" activeclassname="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/campaigns" activeclassname="active">All Campaign</NavLink>
            </li>
            {user && user.displayName && (
                <>
                    <li>
                        <NavLink to="/addCampaign" activeclassname="active">Add New Campaign</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myCampaign" activeclassname="active">My Campaign</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" activeclassname="active">My Donations</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div>
            {user && user.displayName && (
                <div className="bg-gray-100 text-center py-2">
                    <span className="text-sm font-medium">Welcome, {user.displayName}!</span>
                </div>
            )}
            <div className="navbar bg-base-100">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost normal-case md:text-xl font-bold">
                        CrowdCube
                    </NavLink>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-4 flex items-center relative">
                    {user ? (
                        <>
                            <div className="relative group" onClick={toggleDropdown}>
                                <img
                                    src={user.photoURL}
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                                        <div className="px-4 py-2 text-sm text-gray-700">
                                            <p className="font-bold">{user.displayName}</p>
                                            <p>{user.email}</p>
                                        </div>
                                        <hr />
                                        {dashboardLink() && (
                                            <NavLink
                                                to={dashboardLink()}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Dashboard
                                            </NavLink>
                                        )}
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <NavLink to="/register" className="btn btn-outline btn-success">
                                Sign Up
                            </NavLink>
                            <NavLink to="/login" className="btn btn-outline btn-success">
                                Log In
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
