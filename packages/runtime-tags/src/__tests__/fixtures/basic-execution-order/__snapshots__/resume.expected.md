# Render
```html
<html>
  <head />
  <body>
    <button>
      hide
    </button>
    <!--M_*1 #button/0-->
    hi
    <!--M_*2 #text/0-->
    <!--M_|1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={},message_text:"hi"},_.b],_.b._=_.a,_.c),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      hide
    </button>
    <!--M_*1 #button/0-->
    <!--M_|1 #text/1 2-->
    <!--M_*2 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={},message_text:"hi"},_.b],_.b._=_.a,_.c),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment1 after html/body/#comment2
INSERT html/body/#comment1
REMOVE #text after html/body/#comment1
```