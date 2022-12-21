import NextLink from 'next/link';

type Props = {
  title: {
    text: string,
    href: string,
  },
  items: {
    text: string,
    href: string,
  }[],
};

export const Header = ({ title, items }: Props) => (
  <div>
    <header className='fixed z-10 top-0 bg-white w-full py-2 border-b border-gray-300'>
      <nav className='flex max-w-screen-lg px-1 m-auto justify-between'>
        <NextLink href={title.href}>
          <span className='text-xl text-blue-400'>
            <em>{title.text}</em>
          </span>
        </NextLink>
        {items.map ((a) => (
          <div key={a.href} className='flex px-2 space-x-1'>
            <NextLink href={a.href}>
              <span>{a.text}</span>
            </NextLink>
          </div>
        ))}
      </nav>
    </header>
    <div className='h-11' />
  </div>
);
