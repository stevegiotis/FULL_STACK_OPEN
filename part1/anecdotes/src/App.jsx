import { useState } from 'react'

function indexOfMax(array) {
  const max = Math.max(...array)
  return array.indexOf(max)
}

function Anecdote({ title, body, votes, onVote }) {
  const suffix = votes => (votes === 1) ? '' : 's'
  return (
    <>
      <h1>{title}</h1>
      <div>{body}</div>
      <div>Has {votes} vote{suffix(votes)}</div>
      <button onClick={onVote}>vote</button>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

function App() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const mostVoted = indexOfMax(votes);

  function nextAnecdote() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * anecdotes.length);
    } while (newIndex === selected);

    setSelected(newIndex);
  }

  function vote(anecdoteIndex) {
    setVotes((prevVotes) => {
      const newVotes = [...prevVotes];
      newVotes[anecdoteIndex] += 1;
      return newVotes;
    });
  }

  return (
    <div className="app">
      <Anecdote
        title="Anecdote of the day"
        body={anecdotes[selected]}
        votes={votes[selected]}
        onVote={() => vote(selected)}
      />

      <button onClick={nextAnecdote}>Next Anecdote</button>

      <Anecdote
        title="Anecdote with most votes"
        body={anecdotes[mostVoted]}
        votes={votes[mostVoted]}
        onVote={() => vote(mostVoted)}
      />
    </div>
  );
}

export default App;