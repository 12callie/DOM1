const div = dom.create("<div>newDiv</div>")
dom.after(test,div)

const div2 = dom.create("<div>newDiv2</div>")
dom.before(test, div2)


const div3 = dom.create("<div>newChild</div>")
dom.append(div2, div3)


const div4 = dom.create("<div>newDiv4</div>")
dom.wrap(div3, div4)


const div5 = dom.create("<div id='parent'>newDiv5</div>")
dom.after(div, div5)
dom.remove(div5)


const nodes = dom.empty(window.empty)
console.log(nodes)


dom.attr(empty, 'title', 'Hi, I am Jack')
const title = dom.attr(empty, 'title')
console.log(`title: ${title}`)

dom.text(test, '新文本内容')
const text = dom.text(test)
console.log(`文本: ${text}`)

dom.html(empty, '<p>新段落</p>')
console.log(dom.html(empty))


dom.style(test, {border: '1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'red')
console.log(dom.class.contains(test, 'red'))


const fn = ()=>{
  console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)


console.log(dom.find('#red', f2)[0])


console.log(dom.parent(dom.find('#c2')[0]))
console.log(dom.children(dom.find('#f1')[0]))

const c2 = dom.find('#c2')[0]
console.log(dom.siblings(c2))
console.log(dom.next(c2))
console.log(dom.previous(c2))


const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=>dom.style(n, 'color', 'red'))

console.log(dom.index(dom.find('#t3')[0]))

