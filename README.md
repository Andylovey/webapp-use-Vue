# myapp 

# 整个app的数据都是向第三方(阿凡达)获取数据的

## 这是用 Vue 开发的移动app

### 采用了vue-cli搭脚手架

## 新闻列表的详细内容图片使用了缩略图 `vue-preview`


### 项目完成用npm run build 打包出了dist文件 之后再用 Hbuilder 打包成移动app

### Hbuilder打包成移动app详细步骤看`收藏夹文件`

### 使用这个Hbuilder打包 `E:\BaiduNetdiskDownload\传智播客前端完整版\17-移动APP(待情况)\12.移动app\课程相关软件和资料\HBuilder.6.8.2.windows`

### npm run build 注意打包后的跨域问题和资源路径问题(包括字体文件等等)

### 资源路径问题 a) css => 修改config/index 把 assetsPublicPath 的值修改为 './' (注意是第二个assetsPublicPath) 

### b) 字体文件 => 修改build/webpack.prod.conf 把 extract 的值修改为 false