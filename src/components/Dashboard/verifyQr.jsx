"use client";
import { generateToken } from "@/lib/jwttoken"; // Ensure this function is defined in your project
import QrReader from "modern-react-qr-reader";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";


const VerifyQR = () => {
    // Holds whether the popup modal is open
    const [popup, setPopup] = useState(false);
    // Holds the parsed data from the scanned QR code
    const [scannedData, setScannedData] = useState(null);
    // Holds any messages (error or success) to display in the popup
    const [message, setMessage] = useState("");

    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <motion.div
                    className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                ></motion.div>
            </div>
        );
    }

    if (!session) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
                <p className="text-xl text-gray-300">
                    You are not authenticated. Please sign in.
                </p>
                <button
                    onClick={() =>
                        signIn("google", { callbackUrl: "/auth/role-bridge" })
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Sign In
                </button>
            </motion.div>
        );
    }

    if (session?.user?.role !== "admin") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Unauthorized</h1>
                <p className="text-xl text-gray-300">
                    You are not authorized to view this page.
                </p>
                <Link
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Return to Home
                </Link>
            </motion.div>
        );
    }

    // Called if an error occurs while reading the QR code
    const handleError = (err) => {
        console.error(err);
        setMessage("Error reading QR. Try again.");
        setPopup(true);
    };

    // When a QR is scanned, parse the JSON string and store it.
    const handleScan = (data) => {
        if (data) {
            try {
                // Parse the scanned JSON string into an object.
                const parsedData = JSON.parse(data);
                setScannedData(parsedData);
                setPopup(true);
            } catch (error) {
                console.error("Error parsing QR data:", error);
                setMessage("Invalid QR Code data. Please try again.");
                setPopup(true);
            }
        }
    };

    // Closes the popup and resets state.
    const onPopUpClose = () => {
        setPopup(false);
        setScannedData(null);
        setMessage("");
    };

    // When the user clicks the Verify button, send the scanned data to your verify API.
    const handleSubmit = async () => {
        if (!scannedData) {
            setMessage("No scan data available.");
            return;
        }

        try {
            setMessage("");

            // Generate a token using the scanned data
            const generated_token = generateToken({ scannedData, adminEmail: session.user?.email }, 60 * 60 * 24 * 30);
            const response = await fetch("/api/verify", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_API_TOKEN}`,
                    "Token": generated_token,
                },
            });

            // Parse the JSON response from the API
            const result = await response.json();

            window.alert(result.message || "Verification successful!");

            setMessage(result.message || "Verification successful!");

            setPopup(false);
            setScannedData(null);
        } catch (error) {
            console.error("Verification error:", error);
            setMessage("Failed to verify. Try again.");
        }
    };

    return (
        <>
            {/* Popup Modal */}
            {popup && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center text-black">
                    <div className="p-4 bg-white shadow-xl rounded-lg relative max-w-md w-full text-black">
                        {/* Close Button */}
                        <IoMdClose
                            size={30}
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={onPopUpClose}
                        />
                        {scannedData ? (
                            <div className="text-black">
                                <h2 className="text-xl font-bold mb-2">Scan Details</h2>
                                <p>
                                    <strong>Name:</strong> {scannedData.name}
                                </p>
                                <p>
                                    <strong>Email:</strong> {scannedData.email}
                                </p>
                                <p>
                                    <strong>Event:</strong> {scannedData.event}
                                </p>
                                <p>
                                    <strong>Amount:</strong> {scannedData.amount}
                                </p>
                                <p>
                                    <strong>Invoice ID:</strong> {scannedData.invoiceId}
                                </p>
                                <p>
                                    <strong>Order ID:</strong> {scannedData.orderId}
                                </p>
                                <p>
                                    <strong>Receipt ID:</strong> {scannedData.receiptId}
                                </p>
                                <p>
                                    <strong>University:</strong> {scannedData.universityName}
                                </p>
                                <p>
                                    <strong>Coach Mobile:</strong> {scannedData.coachMobile}
                                </p>
                                <p>
                                    <strong>Coach Name:</strong> {scannedData.coachName}
                                </p>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={handleSubmit}
                                >
                                    Verify Ticket
                                </button>
                            </div>
                        ) : (
                            // In case no scanned data exists, display the message.
                            <p className="text-center">{message}</p>
                        )}
                    </div>
                </div>
            )}

            {/* Main view with QR Reader */}
            <div className="h-full w-full relative pb-28 bg-cover bg-black pt-48">
                <main className="px-4 py-2 text-center text-white">
                    <h1 className="text-2xl font-semibold">Ticket Verification</h1>
                    <QrReader
                        delay={300}
                        facingMode="environment"
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: "100%" }}
                    />
                </main>
                {message && <p className="mt-2 text-center">{message}</p>}
            </div>
        </>
    );
};

export default VerifyQR;
