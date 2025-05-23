import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: React.ReactElement;
};

export const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      document.body.style.overflow = 'hidden';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.userSelect = 'text';
    }
  }, [router]);

  return <div>{children} </div>;
};