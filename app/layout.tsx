import { ReactNode } from 'react';
import { Header } from '../components/header/Header';
import './globals.css';

type Props = {
  children: ReactNode,
};

export default function RootLayout (
  { children }: Props
) {
  return (
    <html>
      <body>
        <Header
          title={{ text: 'Pollster', href: '/' }}
          items={[
            { text: 'About', href: '/about' },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
