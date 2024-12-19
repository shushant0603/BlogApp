import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

function FormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: "",
    });
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value); // Debug state updates
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include', // Ensure cookies are sent and received
            });

            if (response.ok) {
                const data = await response.json(); // Assuming the response contains user data
                const { username } = data; // Extract the username from the response
                localStorage.setItem('username', username); // Store the username in local storage
                alert('Login successful!');
                navigate('/home');
            } else {
                alert('Error in backend');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error in frontend');
        }
    };
   
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create new account</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Submit
            </button>
           
            <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
        </form>
    );
}

export default FormComponent;