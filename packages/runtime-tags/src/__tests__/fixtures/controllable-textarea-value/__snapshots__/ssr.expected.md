# Write
```html
  <textarea>hello</textarea><!--M_*1 #textarea/0--><span>hello<!--M_*1 #text/1--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ControlledType:#textarea/0":2,value:"hello"}],_.a["ControlledHandler:#textarea/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <textarea>
      hello
    </textarea>
    <!--M_*1 #textarea/0-->
    <span>
      hello
      <!--M_*1 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,_.a={"ControlledType:#textarea/0":2,value:"hello"}],_.a["ControlledHandler:#textarea/0"]=_._["__tests__/template.marko_0/valueChange"](_.a),_.b),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/textarea
INSERT html/body/textarea/#text
INSERT html/body/#comment
INSERT html/body/span
INSERT html/body/span/#text
INSERT html/body/span/#comment
INSERT html/body/script
INSERT html/body/script/#text
```