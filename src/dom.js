window.dom = {
  create (string) { //创建复杂的元素时<div><span>123</span></div>，将该html内容写到标签里面就会自动变成元素
    const container = document.createElement("template"); //template标签专门用来容纳任意元素，不会显示在页面中
    container.innerHTML = string.trim(); //trim()函数可以去掉字符串左右两侧的空格
    return container.content.firstChild;
  },
  after (node, node2) { //新增弟弟
      node.parentNode.insertBefore(node2, node.nextSibling);//即使node已经是最后一个节点，代码也可以用
  },
  before (node, node2) {  //新增哥哥
    node.parentNode.insertBefore(node2, node);
  },
  append (parent, child) { //新增儿子
      parent.appendChild(child);
  },
  wrap (node, parent) { //新增爸爸
      dom.before(node, parent);
      dom.append(parent,node);
  },
  remove(node){ //会删掉自己连同自己的后代
    node.parentNode.removeChild(node);
    return node; //保留node的引用，万一后续用得到
  },
  empty(node){ //删掉node的后代，但不删自己
    const array = [];
    let x = node.firstChild;
    while(x){
      array.push(dom.remove(x));
      x = node.firstChild;
    }
    return array;
  },
  attr(node, name, value) {  //读、写属性  //重载
    if(arguments.length === 3) {
      node.setAttribute(name, value)
    }else if(arguments.length === 2){
      return node.getAttribute(name)
    }
  },
  text(node, string) {
    if(arguments.length ===2){
      if('innerText' in node) {
        node.innerText = string
      }else{
        node.textContent = string
      }
    }else if(arguments.length ===1){
      if('innerText' in node) {
        return node.innerText
      }else{
        return node.textContent
      }
    } 
  },
  html(node, string) {
    if(arguments.length === 2){
      node.innerHTML = string
    }else if (arguments.length === 1){
      return node.innerHTML
    }
  },
  style(node, name, value){
    if(arguments.length === 3){
      //dom.style(test, 'color', 'yellow')，修改
      node.style[name] = value
    }else if (arguments.length === 2){
      
      
      if(typeof name === 'string'){
        //dom.style(test, 'border')，读取
        return node.style[name]
      }else if (name instanceof Object){ //name是Object的实例
        //dom.style(test, {color: 'green'})，修改
        for(let key in name){ //遍历object即name
          node.style[key] = name[key]
        }
      }
    }
  },
  class: {
    add(node, className){
      node.classList.add(className)
    },
    remove(node, className){
      node.classList.remove(className)
    },
    contains(node, className){  //判断node是否包含className
      return node.classList.contains(className)
    }
  },
  on(node, eventName, fn){ //添加事件监听
    node.addEventListener(eventName, fn)
  },
  off(node, eventName, fn){ //删除事件监听
    node.removeEventListener(eventName, fn)
  },
  find(selector, scope){ //获取标签
    return (scope || document).querySelectorAll(selector)
  },
  parent(node){
    return node.parentNode
  },
  children(node){
    return node.children
  },
  siblings(node){
    return Array.from(node.parentNode.children).filter(n=>n!==node)
    //filter()方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
  },
  next(node){
    let x = node.nextSibling
    while(x && x.nodeType === 3){
      x = x.nextSibling
    }
    return x
  },
  previous(node){
    let x = node.previousSibling
    while(x && x.nodeType === 3){
      x = x.previousSibling
    }
    return x
  },
  each(nodeList, fn){
    for(let i = 0;i<nodeList.length;i++){
      fn.call(null, nodeList[i])
    }
  },
  index(node){
    const list = dom.children(node.parentNode)
    let i
    for(i=0;i<list.length;i++){
      if(list[i] === node){
        break
      }
    }
    return i
  }
}