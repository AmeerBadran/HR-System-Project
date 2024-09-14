import { useState } from 'react';
import './../../src/App.css';
import p2 from './../assets/p2.jpg';
import { IoPersonOutline } from 'react-icons/io5';
import { VscLockSmall, VscEye, VscEyeClosed } from 'react-icons/vsc';
import { logIn } from '../api/endpoints/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState({
        username: false,
        password: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });
    const [apiError, setApiError] = useState(''); // لإظهار خطأ من الـ API

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        const newErrors = { username: '', password: '' };

        if (!formData.username) {
            newErrors.username = 'Username is required';
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            try {
                const response = await logIn({ name: formData.username, password: formData.password });
                if (response.data !== 0) {
                    localStorage.setItem('userData', JSON.stringify(response.data[0]));
                    toast.success('Login successfully');
                    navigate('/');
                } else {
                    toast.error('Login Failed');
                }
            } catch (error) {
                setApiError('Invalid username or password');
                console.error('Login failed:', error);
            }
        }
    };

    return (
        <div className="w-screen h-screen relative">
            <div
                className="w-screen h-screen bg-cover bg-center bg-fixed absolute" style={{ backgroundImage: `url(${p2})` }}>
                <div className="absolute inset-0 bg-black opacity-50 z-0 blur-md"></div>
            </div>
            <div className="flex flex-col items-center justify-center h-full p-4 relative z-10">
                <span className="text-3xl font-bold text-white text-shadow mb-8">
                    ACCOUNT LOGIN
                </span>
                <form className="bg-white p-8 rounded-2xl shadow-lg w-96" onSubmit={handleFormSubmit}>
                    <div className="relative mb-10 mt-6">
                        <div className="flex items-center">
                            <IoPersonOutline
                                className={`w-6 h-6 mr-3 transition-all duration-300 ${isFocused.username ? 'text-red-500' : 'text-gray-500'}`}
                            />
                            <input
                                id="username"
                                className={`w-full px-2 py-2 text-xl border-none outline-none bg-transparent ${isFocused.username ? 'text-black pl-8' : 'text-gray-900'}`}
                                type="text"
                                name="username"
                                placeholder="User name"
                                value={formData.username}
                                onChange={handleInputChange}
                                onFocus={() => setIsFocused(prev => ({ ...prev, username: true }))} onBlur={() => setIsFocused(prev => ({ ...prev, username: false }))} />
                        </div>
                        <div className={`w-full mt-4 transition-all duration-300 ${isFocused.username ? 'border-red-500' : 'border-gray-300'}`} style={{ borderBottomWidth: '2px' }}></div>
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>
                    <div className="relative mb-2 mt-6">
                        <div className="flex items-center">
                            <VscLockSmall
                                className={`w-8 h-6 mr-3 transition-all duration-300 ${isFocused.password ? 'text-red-500' : 'text-gray-500'}`}
                            />
                            <input
                                id="password"
                                className={`w-full px-2 py-2 text-xl border-none outline-none bg-transparent ${isFocused.password ? 'text-black pl-8' : 'text-gray-900'}`}
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))} onBlur={() => setIsFocused(prev => ({ ...prev, password: false }))} />
                            <div onClick={togglePasswordVisibility} className="cursor-pointer mr-1">
                                {showPassword ? <VscEyeClosed className="w-6 h-6 text-gray-500" /> : <VscEye className="w-6 h-6 text-gray-500" />}
                            </div>
                        </div>
                        <div className={`w-full mt-4 transition-all duration-300 ${isFocused.password ? 'border-red-500' : 'border-gray-300'}`} style={{ borderBottomWidth: '2px' }}></div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        className="mt-14 w-full py-6 px-6 bg-gradient-to-r to-[#d41459] from-[#911a6c] text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">
                        Login
                    </button>
                    {apiError && <p className="text-red-500 text-center mt-4">{apiError}</p>}
                </form>
            </div>
        </div>
    );
};

export default LogIn;
