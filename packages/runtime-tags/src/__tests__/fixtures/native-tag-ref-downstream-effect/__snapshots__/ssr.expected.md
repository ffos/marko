# Write
```html
  <div></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={},{_:_.a}]),"__tests__/template.marko_1",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={},{_:_.a}]),"__tests__/template.marko_1",2];M._.w()
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
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```