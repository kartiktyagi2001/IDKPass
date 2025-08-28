'use client'

import { useState } from 'react';
import { generatePassword } from '../lib/pwdGeneration';
import Link from 'next/link';

export default function Home() {
  const [siteName, setSiteName] = useState('');
  const [masterPassword, setMasterPassword] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteName || !masterPassword) return;

    setLoading(true);
    try {
      const password = await generatePassword(siteName, masterPassword);
      setGeneratedPassword(password);
    } catch (error) {
      alert('Error generating password');
    }
    setLoading(false);
  };

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(generatedPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      alert(generatedPassword); // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">IDK Password Manager</h1>
          <Link href="/about" className="text-blue-600 hover:text-blue-800">
            How it Works
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Deterministic Password Generator
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Same inputs = same password, always. No storage, no sync, just works.
          </p>
        </div>

        {/* Generator Form */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site Name
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="e.g., github, gmail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Master Password
              </label>
              <input
                type="password"
                value={masterPassword}
                onChange={(e) => setMasterPassword(e.target.value)}
                placeholder="Your master password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                minLength={8}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Generate Password'}
            </button>
          </form>

          {/* Generated Password */}
          {generatedPassword && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Generated Password
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={generatedPassword}
                  readOnly
                  className="flex-1 px-3 py-2 bg-gray-900 text-green-400 font-mono rounded-l-md"
                />
                <button
                  onClick={copyPassword}
                  className={`px-4 py-2 rounded-r-md ${
                    copied ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {copied ? '✓' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold mb-2">Deterministic</h3>
            <p className="text-gray-600 text-sm">
              Same inputs always generate the same password
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl mb-2">🚫</div>
            <h3 className="font-semibold mb-2">No Storage</h3>
            <p className="text-gray-600 text-sm">
              Everything happens in your browser, nothing stored
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Instant</h3>
            <p className="text-gray-600 text-sm">
              Works offline, no internet needed after loading
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}