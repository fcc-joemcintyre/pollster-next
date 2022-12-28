export type PollChoice = {
  text: string,
  votes: number,
};

export type Poll = {
  key: number,
  creator: number,
  title: string,
  choices: PollChoice[],
};
