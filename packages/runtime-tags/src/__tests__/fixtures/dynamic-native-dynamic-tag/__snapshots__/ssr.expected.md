# Write
```html
  <span class=A>body content</span><!--M_|1 #text/0 2--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"span",tagName:"span",className:"A"},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      body content
    </span>
    <!--M_|1 #text/0 2-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"span",tagName:"span",className:"A"},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```