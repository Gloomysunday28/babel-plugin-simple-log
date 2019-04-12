# 简化console.log()
> 将console以注释形式表示 
> // >s === console.log(s)

### 解决
<code>1. 以注释来表示,即使忘记删掉也没事<code>
<code>2. 简化了console.log()过于冗长的写法<code>

### 用法
```
  npm i babel-plugin-marsimple-log -D

  建立.babelrc文件

  {
    ...
    "env": {
      "development": {
        plugins: [[{
          "marsimple-log", {
            sign: '#' // sign字段改变了 // >s -> #s写法,只允许'{', '>', '?', ':', '*', '$', '%', '#', '@', '!'
          }
        }]]
      }
    }
  }
```
