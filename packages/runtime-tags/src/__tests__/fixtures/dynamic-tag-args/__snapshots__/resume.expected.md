# Render
```html
<html>
  <head />
  <body>
    <button>
      Count: 
      <!---->
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      false
    </div>
    <div>
      true
    </div>
    <div>
      "spread1"
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko",x:1},_.a]),"__tests__/template.marko_0_x",1];M._.w()
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
      Count: 
      <!---->
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      2
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      false
    </div>
    <div>
      true
    </div>
    <div>
      "spread1"
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko",x:1},_.a]),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "1" => "2"
UPDATE html/body/div0/#text "1" => "2"
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
      Count: 
      <!---->
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      false
    </div>
    <div>
      true
    </div>
    <div>
      "spread1"
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko",x:1},_.a]),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "2" => "3"
UPDATE html/body/div0/#text "2" => "3"
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
      Count: 
      <!---->
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      4
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <div>
      false
    </div>
    <div>
      true
    </div>
    <div>
      "spread1"
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"__tests__/tags/custom-tag.marko",x:1},_.a]),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text1 "3" => "4"
UPDATE html/body/div0/#text "3" => "4"
```