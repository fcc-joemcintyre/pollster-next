import { Header } from '../components/header/Header';

export default function HomePage () {
  return (
    <>
      <Header
        title={{
          text: 'Pollster',
          href: '/',
        }}
        items={[]}
      />
      <div className='max-w-screen-lg mx-auto p-2'>
        <p>Page Content</p>
      </div>
    </>
  );
}
