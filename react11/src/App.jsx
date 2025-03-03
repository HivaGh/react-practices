import { useState, useEffect } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [completedRequests, setCompletedRequests] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    setCompletedRequests((c) => c + 1);

    await delay(3000);

    setCompletedRequests((c) => c - 1);
  }

  useEffect(() => {
    if (completedRequests === 0) {
      setPending(0);
      setCompleted((c) => c + pending);
    }
  }, [completedRequests]);

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
