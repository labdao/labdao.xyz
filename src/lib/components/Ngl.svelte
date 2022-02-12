
<!-- <svelte:window bind:scrollY={y}/> -->

<div class="" id="viewport" style="width:{width}; height:{height};"></div>
  
<script>
	import { browser } from '$app/env';
	import { onMount } from "svelte";

  export let bgColor = 'white', width = '100%', height = '800px'
  let stage, ngl // , y

  onMount(async() => {
    if (browser) {
      ngl = (await import('ngl'))
      stage = new ngl.Stage("viewport")

      console.log('::: loading ngl::', ngl)
      stage.setParameters({backgroundColor: bgColor, clipFar: 1000})
      stage.setSpin(true)
      stage.loadFile("/gp47_relaxed.pdb", {defaultRepresentation: true});
      // stage.loadFile("/gp47_relaxed.pdb");

      // stage.loadFile("/gp47_relaxed.pdb").then(function (o) {
      //   o.addRepresentation("cartoon");
      //   var duration = 1000;  // optional duration for animation, defaults to zero
      //   o.autoView(duration);  // focus on the whole structure
      // });

      console.log('stage:', stage)
    }
  })

  // $: if(browser && ngl) {
  // }
  
</script>