const signTemplate = ['{', '>', '?', ':', '*', '$', '%', '#', '@', '!']

module.exports = function SimpleLog({types: t}) {
  return {
    visitor: {
      Program(path, state /* babel的选项配置 */) { // 访问全部(主体)代码
        let {sign = '\\>'} = state.opts // \\字符串模板解析 (\ \>)
        console.log(sign)
        if (!signTemplate.includes(sign)) return
        console.log(123, sign)
        if (!sign.includes('\\>')) sign = `\\${sign}`
        const reg = new RegExp(`${sign}(.*?)$`, 'g') // 搜索注释匹配正则的规则
        path.traverse({ // 遍历Program下面的所有子节点
          enter(path) {
            if (path.node.trailingComments) {
              for (let comment of path.node.trailingComments) {
                const value = []
                comment.value.replace(reg, (_, c) => {
                  if (c) value.push(t.Identifier(c))
                })
                // console.log(n) AST树结构如下
                /*
                  {
                    "type": "Program",
                    "start": 0,
                    "end": 208,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 178,
                        "end": 192,
                        "expression": {
                          "type": "CallExpression",
                          "start": 178,
                          "end": 192,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 178,
                            "end": 189,
                            "object": {
                              "type": "Identifier",
                              "start": 178,
                              "end": 185,
                              "name": "console"
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 189,
                              "name": "log"
                            },
                            "computed": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 190,
                              "end": 191,
                              "name": "n"
                            }
                          ]
                        }
                      }
                    ],
                    "sourceType": "module"
                  }
                */
               if (value.length) {
                  path.insertAfter(t.expressionStatement(t.callExpression(t.memberExpression({
                    type: 'Identifier',
                    name: 'console'
                  }, {
                    type: 'Identifier',
                    name: 'log'
                  }), value)))
                }
              }
            }
          }
        })
      }
    }
  }
}