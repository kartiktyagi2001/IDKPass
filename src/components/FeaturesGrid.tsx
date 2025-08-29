import React from 'react';

const featureData = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    title: 'Industry-Standard Security',
    description: 'Uses PBKDF2 with SHA-256, ensuring your passwords are protected with reliable, modern cryptographic standards.',
    bgColor: 'bg-blue-100',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Brute-Force Resistant',
    description: 'We run 100,000 hashing iterations, making it computationally expensive and slow for attackers to guess your master password.',
    bgColor: 'bg-purple-100',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12hr14M12 5l-7 7 7 7" /></svg>
    ),
    title: 'Ultimate Privacy',
    description: 'Everything happens in your browser. Your site names and master password never leave your device. We collect zero data.',
    bgColor: 'bg-pink-100',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
    ),
    title: 'Zero-Database Design',
    description: 'With no central server or database to attack, your information remains secure. It even works perfectly offline.',
    bgColor: 'bg-green-100',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'Synced, Without Sync',
    description: 'Get the same password on your phone, laptop, or tablet without needing to sync. Just use the same site name and cipher key.',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Radically Simple',
    description: 'No accounts, no extensions, no complexity. Just a simple, transparent tool that does one thing perfectly.',
    bgColor: 'bg-yellow-100',
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {featureData.map((feature, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl p-6 border-2 border-black transition-shadow duration-300 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)]"
        >
          <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${feature.bgColor}`}>
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
