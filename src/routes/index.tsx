import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';

export default component$(() => {
  return (
    <>
     <div class="flex justify-center flex-col items-center h-screen">
      <h1 class="text-5xl font-bold translate-y-[75px] translate-x-[-200px] drop-shadow-lg">Today Lets</h1>
      <img src="https://test.cdn.copy-travel.com/image/activity-8.jpeg" />
      <h1 class="text-5xl font-bold translate-y-[-75px] translate-x-[200px] drop-shadow-lg">Go to Paris</h1>
     </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
