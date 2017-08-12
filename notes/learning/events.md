# events

```js
var events = require('events')
var emitter = new events.EventEmitter()
emitter.on('chat', () => {
  console.log('ok')
})

emitter.emit('chat')
```

## 实例方法

```js
emitter.emit(name)
emitter.on(name, fn)
emitter.addListener(name, fn)
emitter.once(name, fn)
emitter.removeListener(name, fn)
emitter.removeAllListeners(name)

emitter.setMaxListeners(Number)
emitter.setAllMaxListeners(Nmuber)
emitter.getMaxListeners()

emitter.defaultMaxListeners = Number
// 优先级弱于 `setMaxListeners` 且会影响所有 `EventEmitter` 实例

emitter.eventNames() // 返回数组(监听器名)
emitter.listenerCount(name) // 返回监听器的数量
emitter.listeners(name) // 返回数组(监听器的副本), 区分 `emitter.eventNames`

emitter.prependListener(name, fn)
emitter.prependOnceListener(name, fn)
```

## 默认事件

* newListener
* removeListener

## 特殊事件

* error
