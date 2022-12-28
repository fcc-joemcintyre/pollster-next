import NextLink from 'next/link';
import { getPolls } from '../data/data';

export default async function HomePage () {
  const polls = await getData ();

  return (
    <>
      <div className='max-w-screen-lg mx-auto p-2'>
        <h1 className='my-4'>Open Polls</h1>
        <ul className='space-y-2'>
          {polls.map ((a) => (
            <div key={a.key}>
              <NextLink href={`/poll/${a.key}`}>
                <li>
                  <div>{a.title}</div>
                  <div className='text-sm'>
                    {`${a.choices.reduce ((acc, b) => acc + b.votes, 0)} votes`}
                  </div>
                </li>
              </NextLink>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

async function getData () {
  const t = await getPolls ();
  return t;
}
