"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";

export default function CloakRoom() {
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", regNo: "" });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });

        if (!formData.name || !formData.phone || !formData.email || !formData.regNo) {
            setMessage({ type: "error", text: "All fields are required." });
            setLoading(false);
            return;
        }

        const token = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substr(2, 9);

        try {
            const res = await fetch("/api/cloakroom", {
                method: "POST",
                headers: { 'Authorization': `Bearer ${process.env.NEXT_API_TOKEN}`, "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    token,
                    adminEmail: session?.user?.email
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to save data");
            }

            const data = await res.json();

            setMessage({ type: "success", text: `Token issued successfully! Room:${data.data.room} & Token:${data.data.locker} ` });
            setFormData({ name: "", phone: "", email: "", regNo: "" });
        } catch (err) {
            setMessage({ type: "error", text: "Error generating QR. Please try again." });
        }
        setLoading(false);
    };

    if (status === "loading" || loading) {
        return (
            <motion.div className="flex items-center justify-center min-h-screen bg-black">
                <div className="text-white text-lg animate-pulse">Loading...</div>
            </motion.div>
        );
    }

    if (!session) {
        return (
            <motion.div className="flex items-center justify-center min-h-screen bg-black">
                <div className="text-white">Access Denied. Please log in.</div>
            </motion.div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white mb-8">Cloak Room Details</h1>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-md w-full space-y-4">
                {message.text && (
                    <p className={message.type === "error" ? "text-red-500" : "text-green-500"}>{message.text}</p>
                )}
                <div>
                    <label className="block text-white mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-md bg-gray-800 text-white" placeholder="Enter your name" required />
                </div>
                <div>
                    <label className="block text-white mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-md bg-gray-800 text-white" placeholder="Enter your phone number" required />
                </div>
                <div>
                    <label className="block text-white mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-md bg-gray-800 text-white" placeholder="Enter your email" required />
                </div>
                <div>
                    <label className="block text-white mb-2">Registration Number</label>
                    <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} className="w-full p-3 rounded-md bg-gray-800 text-white" placeholder="Enter your registration number" required />
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={loading} className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out">
                    <FiUpload className="text-lg" />
                    {loading ? "Issueing..." : "Issue QR"}
                </motion.button>
            </form>
        </motion.div>
    );
}