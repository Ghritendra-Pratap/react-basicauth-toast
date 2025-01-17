import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
 

type Iuser = {
    email: string,
    password: string
}

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user: Iuser = {
        email: "guest@gmail.com",
        password: "Guest@123"
    }

    const navigate = useNavigate()

    // Handle Guest Login Button Click
    const handleGuestbtn = (e: React.MouseEvent) => {
        e.preventDefault()
        setEmail(user.email)
        setPassword(user.password)
    }

    // Handle Form Submit (Login)
    const handleLoginBtn = (e: React.FormEvent) => {
        e.preventDefault()

        if (email === user.email && password === user.password) {
            toast.success("Login successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            navigate("/home")  // Navigate to the "home" route
        } else {
            toast.error("Invalid credentials", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <>
            {/* ToastContainer to hold the toast messages */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="text-3xl font-bold text-center mb-6">Login</div>
                    <form className="space-y-4" onSubmit={handleLoginBtn}>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  // Update email state
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}  // Update password state
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Login
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"  // Changed to "button" to avoid form submission
                                className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                onClick={handleGuestbtn}  // Pre-fill credentials for guest user
                            >
                                Get Guest Credentials
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
