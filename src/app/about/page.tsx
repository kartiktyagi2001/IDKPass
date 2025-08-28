'use client'

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
            ← IDK Password Manager
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            How IDK Works
          </h1>

          {/* Simple Explanation */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              The Simple Truth
            </h2>
            <p className="text-gray-700 mb-4">
              IDK uses <strong>deterministic password generation</strong>. This means same inputs 
              (site name + master password) always produce the same password. No database, no sync, 
              no complexity.
            </p>
          </div>

          {/* How it Works */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              What Happens When You Click Generate
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Your site name gets cleaned (e.g., "GitHub" becomes "github")</li>
              <li>We use PBKDF2 with your master password + site name</li>
              <li>100,000 iterations with SHA-256 hashing</li>
              <li>The hash gets converted to a readable password</li>
              <li>All happens in your browser - we see nothing</li>
            </ol>
          </div>

          {/* Security */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Security Details
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>PBKDF2 + SHA-256</strong> - Industry standard</li>
              <li><strong>100,000 iterations</strong> - Slow for attackers</li>
              <li><strong>Client-side only</strong> - Never leaves your device</li>
              <li><strong>No tracking</strong> - Zero data collection</li>
            </ul>
          </div>

          {/* Advantages */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Why Deterministic?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>No password database to hack</li>
              <li>Works offline once loaded</li>
              <li>Same password on any device</li>
              <li>No sync issues or data loss</li>
              <li>Simple and transparent</li>
            </ul>
          </div>

          {/* Important Warning */}
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-8">
            <h3 className="font-semibold text-yellow-800 mb-2">
              ⚠️ Important: Master Password is Everything
            </h3>
            <p className="text-yellow-700 text-sm">
              If you forget your master password, all generated passwords are gone forever. 
              There's no recovery by design. Write it down somewhere safe!
            </p>
          </div>

          {/* Technical Implementation */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Technical Details
            </h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <div>// Simplified implementation:</div>
              <div>cleanSite = siteName.toLowerCase().replace(/[^a-z0-9]/g, '')</div>
              <div>salt = encode(cleanSite)</div>
              <div>hash = PBKDF2(masterPassword, salt, 100000, SHA-256)</div>
              <div>password = mapHashToChars(hash)</div>
            </div>
          </div>

          {/* Why We Built This */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Why IDK Exists
            </h2>
            <p className="text-gray-700">
              Traditional password managers are complex, get hacked, and create vendor lock-in. 
              IDK is simple, transparent, and gives you full control. It's password management 
              without the management bullshit.
            </p>
          </div>

          {/* Back to Generator */}
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Back to Generator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}