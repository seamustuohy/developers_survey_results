---
layout: mybase
lang: fa
---


{% include header.html lang=page.lang %}

  <main class="mdl-layout__content">
    <div class="demo-container mdl-grid">
      <div class="all_content  fa_align">
        <div w3-include-html="trans/webpage_{{ page.lang }}.html"></div>
        <script>
          w3.includeHTML();
          region()
        </script>
        </div>
        </main>
        </div>
