# Render
```html
<html>
  <head />
  <body>
    <div
      data-children="1"
    >
      Before 
      <!--M_[2-->
      Child
      <!--M_]1 #text/1-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"LoopScopeMap:#text/1":new Map(_.a=[[0,_.b={}]]),children:[1]},_.b]),"__tests__/template.marko_0_children",1];M._.w()
    </script>
  </body>
</html>
```


# Render ASYNC
```html
<html>
  <head />
  <body>
    <div
      data-children="2"
    >
      Before 
      <!--M_[2-->
      ChildChild
      <!--M_]1 #text/1-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"LoopScopeMap:#text/1":new Map(_.a=[[0,_.b={}]]),children:[1]},_.b]),"__tests__/template.marko_0_children",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[data-children] "1" => "2"
INSERT html/body/div/#text2
```