import { useRef } from 'react';

export default function useAutoScrollOnFocus<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const handleFocus = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return [ref, handleFocus] as const;
}
