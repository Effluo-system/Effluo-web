import { useRef, useState, useLayoutEffect } from 'react';
import ResponsiveAppBar from '../NavBar/Navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight); // Measure the height of the header
    }
  }, []); // Runs only on mount to measure the initial height

  return (
    <>
      <div ref={ref}>
        <ResponsiveAppBar />
      </div>
      <main style={{ height: `calc(100vh - ${headerHeight}px)` }}>
        {children}
      </main>
    </>
  );
};

export default AppLayout;
