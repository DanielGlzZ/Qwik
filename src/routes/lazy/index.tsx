import { component$ } from '@builder.io/qwik';
 
export const Child = component$(() => {
  return <p>child</p>;
});
 
export const Parent = component$(() => {
  return (
    <section>
      <Child />
    </section>
  );
});

// const Child = componentQrl(qrl('./chunk-a', 'Child_onMount'));
// const Parent = componentQrl(qrl('./chunk-b', 'Parent_onMount'));
// const Parent_onMount = () => qrl('./chunk-c', 'Parent_onRender');
// const Parent_onRender = () => (
//   <section>
//     <Child />
//   </section>
// );