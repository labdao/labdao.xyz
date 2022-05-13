<script>
  export let logo
  export let alt
  export let text
  export let href
  export let className
</script>

<div class={`inline-flex items-center ${className}`}>
  <a sveltekit:prefetch href={href}>
    <img src={logo} class="inline1 w-6 h-6" alt={alt} />
  </a>
  &nbsp;
  <a sveltekit:prefetch class="text-xl decoration-transparent hover:fill-_hover" href={href}>{text}</a>  
</div>
