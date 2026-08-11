import { createContext, useState, useContext, ReactNode } from 'react';

type CursorVariant = 'default' | 'project' | 'link';

interface CursorContextProps {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextProps>({
  cursorVariant: 'default',
  setCursorVariant: () => {},
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
