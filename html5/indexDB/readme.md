- 数据的保存
1. localStorage
   适合存储小的，结构简单的数据
   复杂 结合 JSON.stringify()
   JSON.parse() 2-6M间大小
   中奖次数和奖品 不用去后端取 
2. cookie
uid=1000
cookie 就是一个字符串，可以以key = val; key2=val2 来存储一些非常重要的信息。并且在http请求时都会带上。

- res.json() 也是一个Promise
现实的返回一个promise对象，继续执行下去
不如await 优秀。
- indexDB 让前端释放野心的数据库 ，前端的 
mongodb
1. request
window.indexedDB().open(dbname,dbversion)
2. 异步的，
onsuccess 开始数据业务
onupgradeneeded 更新数据库
db.createObjectStore()
objectStore.createIndex('email','email',{unique:true}) 索引
3. 事务 transaction 让数据存储更加安全
add request onsuccess