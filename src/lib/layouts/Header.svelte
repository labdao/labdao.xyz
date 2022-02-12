
<script>
	// import { page } from '$app/stores';
	import logo from '../../../static/labdao-full-2x.png'; // static necessary for ipfs

	import Desktop from '$lib/components/shared/MenuDesktop.svelte';
	import Mobile from '$lib/components/shared/MenuMobile.svelte';
  
</script>


<div class="_content mt-4">
  <Desktop {logo} />
</div>
<!-- <Mobile {logo} {page} /> -->

<!-- 
<style lang="postcss">
  /* .popover__menu {
    @apply bg-white shadow-md rounded-md p-2 w-32;
  } */
</style> -->
