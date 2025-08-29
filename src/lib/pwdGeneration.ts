

export async function generatePassword(siteName: string, cipherKey: string): Promise<string> {
  //clean site name
  const site = siteName.toLowerCase().replace(/[^a-z0-9]/g, '');

  //create salt from site name
  const salt = new TextEncoder().encode(site); //since crypto subtle doesnot accept string values

  //import cipher key
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(cipherKey),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  //generate hash using PBKDF2
  const hash = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 1000,
      hash: 'SHA-256'
    },
    key,
    256
  );

  //hash to password logic
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const symbols = "!@#$%^&*";
  const all = lowers + uppers + digits + symbols;
  const bytes = new Uint8Array(hash);
  let password = '';

//   for (let i = 0; i < 8; i++) {
//     password += chars[bytes[i] % chars.length];
//   }

//ensure at least one of each
  const temp = [
    lowers[bytes[0] % lowers.length],
    uppers[bytes[1] % uppers.length],
    digits[bytes[2] % digits.length],
    symbols[bytes[3] % symbols.length],
  ];

  //fill the rest
  for (let i = 4; i < 8; i++) {
    temp.push(all[bytes[i] % all.length]);
  }
  
  password = temp.join('');

  return password;
}