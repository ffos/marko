# Render
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        0
        <!--M_*1 #text/0-->
      </span>
      , was=
      <!---->
      ‍
      <!--M_*1 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#increment")?.click();
```
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        1
        <!--M_*1 #text/0-->
      </span>
      , was=
      <!---->
      0
      <!--M_*1 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/span/#text "0" => "1"
UPDATE html/body/div/#text2 "‍" => "0"
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        2
        <!--M_*1 #text/0-->
      </span>
      , was=
      <!---->
      0
      <!--M_*1 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/span/#text "1" => "2"
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        2
        <!--M_*1 #text/0-->
      </span>
      , was=
      <!---->
      1
      <!--M_*1 #text/1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M_*1 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{x:0}]),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text2 "0" => "1"
```