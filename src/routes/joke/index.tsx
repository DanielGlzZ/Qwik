// import {
//     component$,
//     useSignal,
//     useStylesScoped$,
//     useTask$,
//   } from '@builder.io/qwik';
//   import {
//     routeLoader$,
//     Form,
//     routeAction$,
//     server$,
//   } from '@builder.io/qwik-city';
//   import STYLES from './index.css?inline';
   
//   export const useDadJoke = routeLoader$(async () => {
//     const response = await fetch('https://icanhazdadjoke.com/', {
//       headers: { Accept: 'application/json' },
//     });
//     return (await response.json()) as {
//       id: string;
//       status: number;
//       joke: string;
//     };
//   });
   
//   const useJokeVoteAction = routeAction$((props) => {
//     console.log('VOTE', props);
//   });
   
//   export default component$(() => {
//     useStylesScoped$(STYLES);
//     const isFavoriteSignal = useSignal(false);
//     // Calling our `useDadJoke` hook, will return a reactive signal to the loaded data.
//     const dadJokeSignal = useDadJoke();
//     const favoriteJokeAction = useJokeVoteAction();
//     useTask$(({ track }) => {
//       track(() => isFavoriteSignal.value);
//       console.log('FAVORITE (isomorphic)', isFavoriteSignal.value);
//       server$(() => {
//         console.log('FAVORITE (server)', isFavoriteSignal.value);
//       })();
//     });
//     return (
//       <section class="section bright">
//         <p>{dadJokeSignal.value.joke}</p>
//         <Form action={favoriteJokeAction}>
//           <input type="hidden" name="jokeID" value={dadJokeSignal.value.id} />
//           <button name="vote" value="up">👍</button>
//           <button name="vote" value="down">👎</button>
//         </Form>
//         <button
//           onClick$={() => (isFavoriteSignal.value = !isFavoriteSignal.value)}
//         >
//           {isFavoriteSignal.value ? '❤️' : '🤍'}
//         </button>
//       </section>
//     );
//   });

// import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
// import STYLES from './index.css?inline';

// export default component$(() => {
//     const count = useSignal(0);
//     useStylesScoped$(STYLES)
//     return (
//         <>
//         <p>Count: {count.value}</p>
//         <button onClick$={() => count.value++}> Increment </button>
//         <button onClick$={() => count.value--}> Decrement </button>
//         </>
//     );
// });

// const Child = component$(() => {
//     return <p>Child Text</p>;
// });

// import { component$ } from '@builder.io/qwik';

// interface ItemProps {
//     name?: string;
//     quantity?: number;
//     description?: string;
//     price?: number;
// }

// export const Item = component$<ItemProps>((props) => {
//     return (
//         <ul>
//             <li>name: {props.name}</li>
//             <li>quantity: {props.quantity}</li>
//             <li>description: {props.description}</li>
//             <li>price: {props.price}</li>
//         </ul>
//     );
// });

// export default component$(() => {
//     return (
//         <>
//             <h1>Props</h1>
//             <Item name="hammer" price={9.99} quantity={5} description="Esta es la mejor descripción" />
//         </>
//     );
// });

import { component$ } from '@builder.io/qwik';

interface Props {
    enabled?: boolean;
    placeholder?: string;
}

export default component$<Props>(({enabled = false, placeholder = ''}) => {
    return (
        <input disabled={!enabled} placeholder={placeholder} />
    )
})
