'use client';
// /firebase/firestore/use-collection.tsx
import { useEffect, useState, useRef } from 'react';
import { onSnapshot, query, type Query, type DocumentData, type QuerySnapshot, type FirestoreError } from 'firebase/firestore';

interface UseCollectionOptions {
  initialData?: any[];
  // Add other options as needed
}

export function useCollection(q: Query | null, options?: UseCollectionOptions) {
  const [data, setData] = useState<DocumentData[] | null>(options?.initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  // Use a ref to store the query to avoid re-subscribing on every render
  // if the query object is created inline.
  const queryRef = useRef<Query | null>(q);
  useEffect(() => {
    // Only update if the query has actually changed.
    // A simple JSON.stringify might not work for complex queries, but it's a decent check.
    if (JSON.stringify(queryRef.current) !== JSON.stringify(q)) {
      queryRef.current = q;
    }
  }, [q]);

  useEffect(() => {
    // If the query is null, do nothing.
    if (!queryRef.current) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      queryRef.current,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const documents = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
        setLoading(false);
        setError(null);
      },
      (err: FirestoreError) => {
        console.error("Error fetching collection:", err);
        setError(err);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryRef.current]); // Re-run effect only when the queryRef changes

  return { data, loading, error };
}
