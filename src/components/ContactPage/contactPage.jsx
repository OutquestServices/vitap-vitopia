import Head from 'next/head';
import { FaEnvelope, FaUserTie, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const coordinators = [
        { name: "Dr. M. Krishna Swamy", position: "Convenor", email: "convenor.vitopia@vitap.ac.in", phone: "+91 xxxxx xxxxx" },
        { name: "Dr. Karishma Bisht", position: "Co Convenor", email: "xxxxxxxxxxxxx@vitap.ac.in", phone: "+91 xxxxx xxxxx" },
        { name: "Dr. U M Gopala Krishna ", position: "Co Convenor", email: "xxxxxxxxxxxxx@vitap.ac.in", phone: "+91 81421 77143" },
    ];

    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
            <Head>
                <title>Contact Page</title>
            </Head>
            <div className="p-6 w-full max-w-4xl">
                <h1 className="text-4xl font-bold text-center mb-10">Contact Our Event Coordinators</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    {coordinators.map((coordinator, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold flex items-center mb-1"><FaUserTie className="mr-2" />{coordinator.name}</h2>
                            <p className="text-lg mb-1">{coordinator.position} </p>
                            <p className="flex items-center mb-3"><FaEnvelope className="mr-2" />{coordinator.email}</p>
                            <p className="flex items-center"><FaPhone className="mr-2" />{coordinator.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
