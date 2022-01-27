# vuex-composition-maphooks
To support vuex-composition map* helper functions
[English Document](https://github.com/asasugar/vuex-composition-maphooks/blob/master/README.md)


```
yarn add vuex-composition-maphooks
```
```js
// *.vue
import { useState, useGetters, useMutations, useActions } from 'vuex-composition-maphooks';
...
```

## useState
- `namespace` 参数非必填，如果 `modules` 设置 `namespaced: true` 时必填
- `states` 可选类型：数组 ｜ 对象 （支持自定义states方法名）


- states 使用数组的用法

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useState } from 'vuex-composition-maphooks';

const { userinfo } = useState('A', ['userinfo']);
const user = ref(userinfo());
</script>

```

- states 使用对象的用法

```js
...
const { d } = useState('A', { userinfo: 'd' });
const user = ref(d());
```

## useGetters

- `namespace` 参数非必填，如果 `modules` 设置 `namespaced: true` 时必填
- `getters` 可选类型：数组 ｜ 对象 （支持自定义getters方法名）

- getters 使用数组的用法
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useGetters } from 'vuex-composition-maphooks';
const { unDoList, doList } = useGetters('A', ['unDoList', 'doList']);
// or
const { unDoList, doList } = useGetters(['A/unDoList', 'A/doList']);

const a = ref(unDoList());
const b = ref(doList());
</script>
```

- getters 使用对象的用法
```js
...
const { d, e } = useGetters('A',{ unDoList: 'd', doList: 'e'});
// or 
const { d, e } = useGetters({ 'A/unDoList': 'd', 'A/doList': 'e'});

const a = ref(d());
const b = ref(e());
...

```


## useMutations

- `namespace` 参数非必填，如果 `modules` 设置 `namespaced: true` 时必填
- `mutations` 可选类型：数组 ｜ 对象 （支持自定义mutations方法名）


- mutations 使用数组的用法

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useMutations } from 'vuex-composition-maphooks';

const { INCREMENT } = useMutations('A', ['INCREMENT']);
// or
const { INCREMENT } = useMutations(['A/INCREMENT']);

</script>

```
- mutations 使用对象的用法

```js
...
const { d } = useMutations('A', { 'INCREMENT': 'd'});
// or
const { d } = useMutations({ 'A/INCREMENT': 'd'});
...
```

## useActions
- `namespace` 参数非必填，如果 `modules` 设置 `namespaced: true` 时必填
- `actions` 可选类型：数组 ｜ 对象 （支持自定义actions方法名）


- actions 使用数组的用法

```vue
<script setup lang="ts">
import { useActions } from 'vuex-composition-maphooks';

// 场景一： A、B模块都不设置命明空间时
const { go, back } = useActions(['go','back']);

// 场景二：A模块设置命明空间，B模块不设置命明空间
const { go, back } = useActions(['A/go', 'back']);
// or
const { go } = useActions('A', ['go']);
const { back } = useActions(['back']);

// 场景三：A、B模块都设置命明空间
const { go, back } = useActions(['A/go', 'B/back']);
// or
const { go } = useActions('A', ['go']);
const { back } = useActions('B', ['back']);
</script>
```

- actions 使用对象的用法

```js
...
// 场景一： A、B模块不设置命明空间时
const { d, e } = useActions({ go: 'd', back: 'e' });

// 场景二：A模块设置命明空间，B模块不设置命明空间
const { d, e } = useActions({ 'A/go': 'd', back: 'e' });
// or
const { d } = useActions({ 'A/go': 'd' }); 
const { e } = useActions({ back: 'd' });

// 场景三：A、B模块都设置命明空间
const { d, e } = useActions({ 'A/go': 'd', 'B/back': 'e' });
// or
const { d } = useActions({ 'A/go': 'd' }); 
const { e } = useActions({ 'B/back': 'e' });
...

```

## 总结
- `namespace` 非必填，但是设置 `namespaced: true` 必填，并且强烈推荐设置 `namespaced` !!!
- `useState` 第二个参数的 `key` 不能是拼接 `modules name` 的字符串，必须是指定的`state`
- `useGetters` 、`useMutations` 、 `useActions` 第二个参数的 `key` 可以拼接是 `modules name` 的字符串，如上示例
