<!-- 
  <pre class="line-numbers language-json">
    <code>
      {@html highlighted}
    </code>
  </pre> -->


<div class="grid gap-4 grid-cols-2">
  <div class="code">
    <pre class="line-numbers language-json">
      {@html Prism.highlight(JSON.stringify(codeblock,null,2), Prism.languages[language])}
    </pre>
  </div>

  <div class="">
    <div class="ngl">
      <NGL height={"347px"} />
    </div>
  </div>

</div>




<script>
  import Prism from 'prismjs';
  // import 'prismjs/components/prism-json';

  import { browser } from '$app/env';
	import NGL from '$lib/components/Ngl.svelte';

  let language = 'javascript'

  let codeblock = {
    "input": [
      {
        "name": "gp47_tail",
        "sequence": "MTANHLESPNCDWKNNRMAIVHMVNVTPLRMMEEPRAAVEAAFEGIMEPAVVGDMVEYWNKMISTCCNYYQMGSSRSHLEEKAQMVDRFWFCPCIYYASGKWRNMFLNILHVWGHHHYPRNDLKPCSYLSCKLPDLRIFFNHMQTCCHFVTLLFLTEWPTYMIYNSVDLCPMTIPRRNTCRTMTEVSSWCEPAIPEWWQATVKGGWMSTHTKFCWYPVLDPHHEYAESKMDTYGQCKKGGMVRCYKHKQQVWGNNHNESKAPCDDQPTYLCPPGEVYKGDHISKREAENMTNAWLGEDTHNFMEIMHCTAKMASTHFGSTTIYWAWGGHVRPAATWRVYPMIQEGSHCQC",
        "parameters": {
          "max_template_date": "2022-01-01",
          "mode": "monomer_single",
          "weights_download_url": "https://storage.googleapis.com/alphafold/alphafold_params_2021-10-27.tar",
          "db": "full",
          "is_prokaryote": 0
        }
      }
    ]
  }

  // let highlighted = Prism.highlight(codeblock, Prism.languages.json, 'language-json')

  $: if(browser) {
    console.log('lol')
    Prism.highlightAll()
  }

</script>