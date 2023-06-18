import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
     <div class="flex justify-center flex-col items-center h-screen">
      <h1 class="text-white text-5xl font-bold translate-y-[75px] translate-x-[-200px] drop-shadow-lg">Today Lets</h1>
      <img height={780} width={520} src="https://test.cdn.copy-travel.com/image/activity-8.jpeg" />
      <h1 class="text-white text-5xl font-bold translate-y-[-75px] translate-x-[200px] drop-shadow-lg">Go to Paris</h1>
     </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Paris',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
