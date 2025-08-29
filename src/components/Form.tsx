import { generatePassword } from "@/lib/pwdGeneration";
import { useState } from "react";
// import { Button } from "./ui/button";
import { ThumbsUp } from "lucide-react";


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

        <div className="relative min-w-[22rem] bg-[#f5f5dc] rounded-lg border-2 border-black p-6">
        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-lg -z-10"></div>
        
        <form
            onSubmit={handleGenerate}
            className="flex flex-col gap-10 py-6"
        >
            <div className="flex flex-col">
            <label htmlFor="siteName" className="mb-1 text-sm font-medium text-gray-700">
                Site Name
            </label>
            <input
                type="text"
                id="siteName"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                placeholder="e.g., example.com"
                required
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="cipherKey" className="mb-1 text-sm font-medium text-gray-700">
                Cipher Key
            </label>
            <input
                type="password"
                id="cipherKey"
                value={cipherKey}
                onChange={(e) => setCipherKey(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                placeholder="Your secret cipher key"
                required
            />
            </div>

            {generatedPassword && (
            <div className="flex flex-col">
                <label htmlFor="generatedPassword" className="mb-1 text-sm font-medium text-gray-700">
                Generated Password
                </label>

                <div className="flex">
                <input
                    type="text"
                    id="generatedPassword"
                    value={generatedPassword}
                    readOnly
                    className="border border-gray-300 rounded-l px-3 py-2 w-full focus:outline-none bg-gray-50"
                />
                <button
                    type="button"
                    onClick={copyPassword}
                    className={`rounded-r px-4 py-2 text-white hover:cursor-pointer ${copied ? 'bg-[#44ad95]' : 'bg-[#44ad95]'}`}
                >
                    {copied ? <ThumbsUp /> : 'Copy'}
                </button>
                </div>
            </div>
            )}

            <button
            type="submit"
            className="mt-2 w-full bg-[#44ad95] text-green-950 font-semibold py-3 rounded-lg shadow-sm hover:cursor-pointer"
            >
            {loading ? 'Generating...' : 'Generate Password'}
            </button>
        </form>
        </div>

    )
}