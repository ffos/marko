# Render
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        0
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        1
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "0" => "1"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        2
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "1" => "2"
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_*3 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment3 after html/body/div/#comment4
INSERT html/body/div/#comment3
REMOVE button after html/body/div/#comment3
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        2
      </button>
      <!--M_*3 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/button2
REMOVE #comment after html/body/div/button2
UPDATE html/body/div/button2/#text " " => "2"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        3
      </button>
      <!--M_*3 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "2" => "3"
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment1 after #text
INSERT html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
REMOVE button after html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
REMOVE button after html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
REMOVE #text after html/body/div/#comment1
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <button
        id="inner"
      />
      <button
        id="count"
      >
        3
      </button>
      <!---->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/button1, #text, html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
INSERT html/body/div/button2
REMOVE #text after html/body/div/button2
UPDATE html/body/div/button2/#text " " => "3"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <button
        id="inner"
      />
      <button
        id="count"
      >
        4
      </button>
      <!---->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "3" => "4"
```