<!-- desktop nav -->
<script>
  export let logo

  import NavLink from '../NavLink.svelte'

  import githubLogo from '../../../../static/images/github-logo.svg'
  import twitterLogo from '../../../../static/images/twitter-logo.svg'
  import snapshotLogo from '../../../../static/images/snapshot-logo.png'
  import discourseLogo from '../../../../static/images/discourse-logo.png'
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
    <NavLink logo={githubLogo} alt="Github logo" text="Github" href="https://githubLogo.com/labdao" className="ml-2" />
    <NavLink logo={twitterLogo} alt="Twitter logo" text="Twitter" href="https://twitter.com/lab_dao" className="pl-4" />
    <NavLink logo={snapshotLogo} alt="Snapshot logo" text="Snapshot" href="https://snapshot.org/#/labdao.eth" className="pl-4" />
    <NavLink logo={discourseLogo} alt="Discourse logo" text="Forum" href="https://forum.labdao.com" className="pl-4" />
  </div>
</header>








