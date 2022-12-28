import { getPoll } from '../../../data/data';

export default function Poll ({ params: { key } }) {
  const poll = getPoll (Number (key));
  if (poll) {
    return (
      <div className='max-w-screen-lg mx-auto p-2 mt-4'>
        <h1 className='mb-4 text-center'>{poll.title}</h1>
        <div className='max-w-screen-md mx-auto'>
          <ul className='space-y-2'>
            {poll.choices.map ((a) => (
              <li key={a.text}>
                <div>{a.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-screen-lg mx-auto p-2 mt-4'>
      <h1 className='mb-4'>Not Found</h1>
      <div className='max-w-screen-md mx-auto'>
        Poll was not found.
      </div>
    </div>
  );
}
