# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Id is 
      <!---->
      dynamic
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/1":_.a={},"ConditionalRenderer:#text/1":"__tests__/tags/child.marko",tagName:_._["__tests__/tags/child.marko"]},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
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
    <button />
    <!--M_*1 #button/0-->
    <div
      id="dynamic"
    />
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/1":_.a={},"ConditionalRenderer:#text/1":"__tests__/tags/child.marko",tagName:_._["__tests__/tags/child.marko"]},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE #comment after html/body/div
REMOVE div after html/body/div
UPDATE html/body/div[id] null => "dynamic"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <div>
      Id is dynamic
    </div>
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/1":_.a={},"ConditionalRenderer:#text/1":"__tests__/tags/child.marko",tagName:_._["__tests__/tags/child.marko"]},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE div after html/body/div
UPDATE html/body/div/#text1 "" => "dynamic"
```