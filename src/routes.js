import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
export default[
  {path:"/",component:ShowBlogs},
  {path:"/add",component:AddBlog},
  {path:"/blog/:id",component:SingleBlog},
]
// 导入外部文件   同时为他们设定导出路由
