<!-- desktop nav -->
<script>
  export let logo
  import githubLogo from '../../../../static/images/github-logo.svg'
  import twitterLogo from '../../../../static/images/twitter-logo.svg'
  // import { prefetch, prefetchRoutes } from '$app/navigation'

  // prefetch('/blog') // Loads the blog page in the background
  // prefetchRoutes() // Loads ALL routes in the background
</script>


<header class="menu-desktop relative flex items-center justify-between leading-6">
  <div class="">
    <div class="max-w-[12rem] mr-4">
      <a sveltekit:prefetch class="decoration-transparent hover:fill-_hover" href='/'>
        <img src={logo} alt="SvelteKit" />
      </a>
    </div>
  </div>
  <div class="corner">
    <a sveltekit:prefetch class="text-xl ml-2 decoration-transparent hover:fill-_hover" href='https://github.com/labdao'>
      <img src={githubLogo} class="inline w-6 h-6" alt="Github logo" />&nbsp;<div class="hidden md:inline">Github</div>
    </a>
    <a sveltekit:prefetch class="text-xl pl-6 decoration-transparent hover:fill-_hover " href='https://twitter.com/lab_dao'>
      <img src={twitterLogo} class="inline w-6 h-6" alt="Twitter logo" />&nbsp;<div class="hidden md:inline">Twitter</div>
    </a>
  </div>
</header>








