import { component$, useSignal, $ } from '@builder.io/qwik';
 
export default component$(() => {
  const count = useSignal(0);
  const print = $((ev) => console.log('CLICKED!', ev));
  const increment = $(() => count.value++);
 
  // The button when clicked will print "CLICKED!" to the console, increment the count and send a event to Google Analytics.
  return (
    <button
      onClick$={[print, increment, $(() => {
        ga.send('click', { label: 'increment' });
      })]}
    >
      Count: {count.value}
    </button>
  );
});