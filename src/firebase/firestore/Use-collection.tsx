"use client";

import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore';

export default function useCollection(path: string) {
  const [docs, setDocs] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const db = getFirestore();
    const colRef = collection(db, path);
    const unsub = onSnapshot(
      colRef,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setDocs(items);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
    return () => unsub();
  }, [path]);

  return { docs, loading, error };
}
