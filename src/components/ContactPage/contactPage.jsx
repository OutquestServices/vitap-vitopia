import Head from 'next/head';
import { FaEnvelope, FaUserTie, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const coordinators = [
        { name: "Dr. M. Krishna Swamy", position: "Convenor", email: "convenor.vitopia@vitap.ac.in" },
        { name: "Dr. Karishma Bisht", position: "Co Convenor", email: "karishma.b@vitap.ac.in" },
        { name: "Dr. U M Gopala Krishna ", position: "Co Convenor", email: "gopalkrishna.um@vitap.ac.in", phone: "+91 81421 77143" },
    ];

    const sportsCoordinators = [
        { name: "Mr. Sathwik Sangani", position: "Sports Student Coordinator", email: "sathwik.22bce7808@vitapstudent.ac.in", phone: "+91 93813 58149" },
        { name: "Mr. Gujarathi Dheeraj", position: "Sports Student Coordinator", email: "dheeraj.22bce9581@vitapstudent.ac.in", phone: "+91 98851 29430" },
    ];

    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center pt-32">
            <Head>
                <title>Contact Page</title>
            </Head>
            <div className='flex flex-col relative'>
                <div className="p-6 w-full max-w-4xl">
                    <h1 className="text-4xl font-bold text-center mb-10"> Event Coordinators</h1>
                    <div className="grid md:grid-cols-2 gap-6">
                        {coordinators.map((coordinator, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl font-semibold flex items-center mb-1"><FaUserTie className="mr-2" />{coordinator.name}</h2>
                                <p className="text-lg mb-1">{coordinator.position} </p>
                                <p className="flex items-center mb-3"><FaEnvelope className="mr-2" />{coordinator.email}</p>
                                {coordinator.phone ? (
                                    <p className="flex items-center"><FaPhone className="mr-2" />{coordinator.phone}</p>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 w-full max-w-4xl">
                    <h1 className="text-4xl font-bold text-center mb-10"> Sports Coordinators</h1>
                    <div className="grid md:grid-cols-2 gap-6">
                        {sportsCoordinators.map((coordinator, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl font-semibold flex items-center mb-1"><FaUserTie className="mr-2" />{coordinator.name}</h2>
                                <p className="text-lg mb-1">{coordinator.position} </p>
                                <p className="flex items-center mb-3"><FaEnvelope className="mr-2" />{coordinator.email}</p>
                                {coordinator.phone ? (
                                    <p className="flex items-center"><FaPhone className="mr-2" />{coordinator.phone}</p>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
