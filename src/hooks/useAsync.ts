import { useEffect, useState } from 'react';

type StatusType = 'idle' | 'pending' | 'success' | 'error';
const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<StatusType>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData(null);
    setStatus('pending');
    setError(null);
    asyncFunction().then((res) => {
      setData(res);
      setStatus('success');
      setError(null);
    });
  }, [asyncFunction]);
  return {
    data,
    error,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
};

export default useAsync;
