// /app/error.tsx
'use client'; 

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Une erreur s'est produite!</h2>
      <button onClick={() => reset()}>Réessayer</button>
    </div>
  );
}
