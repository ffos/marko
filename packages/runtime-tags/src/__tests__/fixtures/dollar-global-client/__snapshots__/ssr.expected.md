# Write
```html
  <div><!--M_|1 #text/0--><span class=hidden>1</span><!--M_|1 #text/1 2--><button>Toggle</button><!--M_*1 #button/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[{x:1},{"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={},show:!1},_.a]),"__tests__/template.marko_0_show",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <!--M_|1 #text/0-->
      <span
        class="hidden"
      >
        1
      </span>
      <!--M_|1 #text/1 2-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[{x:1},{"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={},show:!1},_.a]),"__tests__/template.marko_0_show",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/span
INSERT html/body/div/span/#text
INSERT html/body/div/#comment1
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```