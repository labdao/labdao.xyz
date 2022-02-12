

<!-- desktop nav -->
<script>
  export let logo
  // import { prefetch, prefetchRoutes } from '$app/navigation'

  // prefetch('/blog') // Loads the blog page in the background
  // prefetchRoutes() // Loads ALL routes in the background
</script>

<!-- <header class="menu-desktop hidden sm:block relative max-w-7xl mx-auto max-w-7xl md:flex items-center leading-6"> -->
<header class="menu-desktop sm:block sm:visible sm:relative max-w-[14rem] md:flex items-center leading-6">
  <div class="mr-4">
    <a sveltekit:prefetch class="decoration-transparent hover:fill-_hover" href='/'>
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <!-- <nav class="menu-items relative flex items-center flex-wrap gap-4 justify-between w-full px-8 pr-8"> -->
    <!-- <h2 class="font-light p-0">Decentralized scientific research</h2> -->
    <!-- <ul class="menu-items-left text-lg md:space-x-4 md:flex flex-row place-content-end pr-8 list-none">
      <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
      <li class:active={$page.url.pathname === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
    </ul> -->
    <!-- <ul class="menu-items-right text-lg md:space-x-4 md:flex flex-row items-baseline place-content-end mt-8 md:mt-0">
      <a href="/">Right side item</a>
    </ul> -->
  <!-- </nav> -->

  <div class="corner">
    <!-- TODO put something else here? github link? -->
  </div>
</header>








