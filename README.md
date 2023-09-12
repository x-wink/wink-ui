# wink-ui

## 一个 Vue3 组件库，[点击这里](https://xiangwenke.love/wink-ui/) 查看文档

## 仅供学习参考，请勿随意在生产环境使用，否则后果自负

---

## 开发手册

### 模板生成组件

可以运行以下命令模板生成组件基础代码和文档  
其中 `--` 后面部分是生成脚本的两个必填参数  
第一个是组件中文名，第二个是组件英文名/目录名（**使用分割线命名法**）

语法：

```shell
pnpm gen -- 中文名 english-name
```

示例：

```shell
pnpm gen -- 测试 test
pnpm gen -- 数字输入框 input-number
```

### 取消跟踪 `sftp` 配置文件的修改

本地环境需要运行以下命令忽略配置文件  
确保自己服务器的登录信息不会被提交到 `git` 仓库

```shell
git update-index --assume-unchanged ./docs/sftp.json
```

运行以下命令可以恢复跟踪文件修改

```shell
git update-index --no-assume-unchanged ./docs/sftp.json
```
