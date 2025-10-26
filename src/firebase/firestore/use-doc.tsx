'use client';

// /firebase/firestore/use-doc.tsx
import { useEffect, useState, useRef } from 'react';
import { onSnapshot, type DocumentReference, type DocumentData, type DocumentSnapshot, type FirestoreError } from 'firebase/firestore';

interface UseDocOptions {
  initialData?: any;
  // Add other options as needed
}

export function useDoc(ref: DocumentReference | null, options?: UseDocOptions) {
  const [data, setData] = useState<DocumentData | null>(options?.initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  // Use a ref to store the reference to avoid re-subscribing on every render
  const docRef = useRef<DocumentReference | null>(ref);
  useEffect(() => {
    // Only update if the query has actually changed.
    if (docRef.current?.path !== ref?.path) {
      docRef.current = ref;
    }
  }, [ref]);

  useEffect(() => {
    if (!docRef.current) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      docRef.current,
      (snapshot: DocumentSnapshot<DocumentData>) => {
        if (snapshot.exists()) {
          setData({ id: snapshot.id, ...snapshot.data() });
        } else {
          setData(null);
        }
        setLoading(false);
        setError(null);
      },
      (err: FirestoreError) => {
        console.error("Error fetching document:", err);
        setError(err);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docRef.current]); // Re-run effect only when the docRef changes

  return { data, loading, error };
}
