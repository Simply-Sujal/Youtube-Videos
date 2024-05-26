import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const [data, setData] = useState({});
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(formData);
    };

    const toggleChange = () => {
        setToggle(prevToggle => !prevToggle);
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto mt-10 bg-gradient-to-r from-blue-400 to-purple-500 p-10 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-white">Registration Form</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type={toggle ? "password" : "text"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={toggle}
                            onChange={toggleChange}
                            className="mr-2 leading-tight"
                        />
                        <label className="text-sm text-gray-700" htmlFor="toggle">Show Password</label>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {Object.keys(data).length > 0 && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full">
                    <p className="text-lg"><strong>First Name:</strong> {data.firstname}</p>
                    <p className="text-lg"><strong>Last Name:</strong> {data.lastname}</p>
                    <p className="text-lg"><strong>Email:</strong> {data.email}</p>
                    <p className="text-lg"><strong>Password:</strong> {data.password}</p>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
