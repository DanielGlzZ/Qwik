import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const userData = useStore({ count: 0 });
  return <Child userData = { userData } />;
});

interface ChildProps {
  userData: { count: number };
}

export const Child = component$<ChildProps>(({ userData }) => {
  return (
    <>
      <p>Count: {userData.count}</p>
      <button onClick$={() => userData.count++}>Increment</button>
      <button onClick$={() => userData.count--}>Decrement</button>
    </>
  )
})