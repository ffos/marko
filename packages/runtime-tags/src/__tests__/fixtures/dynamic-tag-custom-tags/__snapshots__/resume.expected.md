# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      Child 1 has 
      <!---->
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/0-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"__tests__/tags/child1.marko",tagName:_._["__tests__/tags/child1.marko"],val:3},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      Child 2 has 3
    </div>
    <!--M_]1 #text/0-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"__tests__/tags/child1.marko",tagName:_._["__tests__/tags/child1.marko"],val:3},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE #comment after html/body/div
REMOVE div after html/body/div
UPDATE html/body/div/#text1 "" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      Child 1 has 3
    </div>
    <!--M_]1 #text/0-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"__tests__/tags/child1.marko",tagName:_._["__tests__/tags/child1.marko"],val:3},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE div after html/body/div
UPDATE html/body/div/#text1 "" => "3"
```