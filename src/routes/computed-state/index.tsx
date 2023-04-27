import { component$, useComputed$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import STYLES from './index.css?inline';

export default component$(() => {
  useStylesScoped$(STYLES);
  const name = useSignal('Qwik');
  const capitalizedName = useComputed$(() => {
    // it will automatically reexecute when name.value changes
    return name.value.toUpperCase();
  });
 
  return (
    <>
      <input type="text" bind:value={name} />
      <p>Name: {name.value}</p>
      <p>Capitalized name: {capitalizedName.value}</p>
    </>
  );
});