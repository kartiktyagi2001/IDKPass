import { generatePassword } from "@/lib/pwdGeneration";
import { useState } from "react";
import { Button } from "./ui/button";


export function Form(){

    const [siteName, setSiteName] = useState('');
    const [cipherKey, setCipherKey] = useState('');
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!siteName || !cipherKey){
            alert('Please enter both site name and Cipher Key');
            return;
        }

        setLoading(true);
        try {
            const password = await generatePassword(siteName, cipherKey);
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
      alert(generatedPassword); //fallback
    }
  };

    return(
        <div>
            <form onSubmit={handleGenerate} className="flex flex-col gap-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
                <div className="flex flex-col">
                    <label htmlFor="siteName" className="mb-1 font-medium">Site Name</label>
                    <input
                    type="text"
                    id="siteName"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., example.com"
                    required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="cipherKey" className="mb-1 font-medium">Cipher Key</label>
                    <input
                    type="password"
                    id="cipherKey"
                    value={cipherKey}
                    onChange={(e) => setCipherKey(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your secret cipher key"
                    required
                    />
                </div>

                {generatedPassword && (
                    <div className="flex flex-col">
                    <label htmlFor="generatedPassword" className="mb-1 font-medium">Generated Password</label>
                    <div className="flex">
                        <input
                        type="text"
                        id="generatedPassword"
                        value={generatedPassword}
                        readOnly
                        className="border border-gray-300 rounded-l px-3 py-2 w-full focus:outline-none"
                        />
                        <Button 
                        type="button" 
                        onClick={copyPassword} 
                        className={`rounded-r ${copied ? 'bg-green-500' : 'bg-blue-500'} text-white px-4 py-2`}
                        >
                        {copied ? 'Copied!' : 'Copy'}
                        </Button>
                    </div>
                    </div>
                )}

                <Button type='submit' className='bg-blue-500 text-white'>
                    {loading ? 'Generating...' : 'Generate Password'}
                </Button>
            </form>
        </div>
    )
}