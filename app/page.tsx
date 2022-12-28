import { getPolls } from '../data/data';

export default async function HomePage () {
  const polls = await getData ();

  return (
    <>
      <div className='max-w-screen-lg mx-auto p-2'>
        {polls.map ((a) => (
          <p key={a.key}>{a.title}</p>
        ))}
      </div>
    </>
  );
}

async function getData () {
  const t = await getPolls ();
  return t;
}
