# Write
```html
  <!--M_[2--><div>1<!--M_*2 #text/0--></div><!--M_]1 #text/0--><button>1<!--M_*1 #text/2--></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.a={"ConditionalScope:#text/0":_.c={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer",x:1,MyTag:_.b={}},_.c],_.b.content=_._["__tests__/template.marko_1_renderer"](_.a),_.d),"__tests__/template.marko_0_x",1];M._.w()</script>
```

# Render End
```html
<!--M_[2-->
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/0-->
    <button>
      1
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.a={"ConditionalScope:#text/0":_.c={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer",x:1,MyTag:_.b={}},_.c],_.b.content=_._["__tests__/template.marko_1_renderer"](_.a),_.d),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/button/#comment
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```