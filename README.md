# vuex-composition-maphooks
To support vuex-composition map* helper functions

```
yarn add vuex-composition-maphooks
```
```js
// *.vue
import { useState, useGetters, useMutations, useActions } from 'vuex-composition-maphooks';
...
```


[中文文档](https://github.com/asasugar/vuex-composition-maphooks/blob/master/README.zh-CN.md)
## useState
- `namespace` parameter is not required, it is required if `modules` is set to `namespaced: true`
- `states` optional type: Array | Object (supports custom states method name)


- states using Array usage

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useState } from 'vuex-composition-maphooks';

const { userinfo } = useState('A', ['userinfo']);
const user = ref(userinfo());
</script>

```

- states using Object usage

```js
...
const { d } = useState('A', { userinfo: 'd' });
const user = ref(d());
```

## useGetters

- `namespace` parameter is not required, it is required if `modules` is set to `namespaced: true`
- `getters` optional type: Array | Object (supports custom getters method name)

- getters using Array usage
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

- getters using Object usage
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

- `namespace` parameter is not required, it is required if `modules` is set to `namespaced: true`
- `mutations` optional type: Array | Object (supports custom mutations method name)

- mutations using Array usage

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useMutations } from 'vuex-composition-maphooks';

const { INCREMENT } = useMutations('A', ['INCREMENT']);
// or
const { INCREMENT } = useMutations(['A/INCREMENT']);

</script>

```
- mutations using Object usage

```js
...
const { d } = useMutations('A', { 'INCREMENT': 'd'});
// or
const { d } = useMutations({ 'A/INCREMENT': 'd'});
...
```

## useActions
- `namespace` parameter is not required, it is required if `modules` is set to `namespaced: true`
- `actions` optional type: Array | Object (supports custom actions method name)


- actions using Array usage

```vue
<script setup lang="ts">
import { useActions } from 'vuex-composition-maphooks';

// Scenario 1: Modules A and B do not set a clear space
const { go, back } = useActions(['go','back']);

// Scenario 2: Module A is set to indicate space, and module B is not set to indicate space
const { go, back } = useActions(['A/go', 'back']);
// or
const { go } = useActions('A', ['go']);
const { back } = useActions(['back']);

// Scenario 3: Both modules A and B are set to indicate the space
const { go, back } = useActions(['A/go', 'B/back']);
// or
const { go } = useActions('A', ['go']);
const { back } = useActions('B', ['back']);
</script>
```

- actions using Object usage

```js
...

// Scenario 1
const { d, e } = useActions({ go: 'd', back: 'e' });

// Scenario 2
const { d, e } = useActions({ 'A/go': 'd', back: 'e' });
// or
const { d } = useActions({ 'A/go': 'd' }); 
const { e } = useActions({ back: 'd' });

// Scenario 3
const { d, e } = useActions({ 'A/go': 'd', 'B/back': 'e' });
// or
const { d } = useActions({ 'A/go': 'd' }); 
const { e } = useActions({ 'B/back': 'e' });
...

```

## Summary
- `namespace` is not required, but setting `namespaced: true` is required, and setting `namespaced` is highly recommended!!!
- The `key` of the second parameter of `useState` cannot be a string concatenating `modules name`, it must be the specified `state`
- `useGetters` , `useMutations` , `useActions` The `key` of the second parameter can be concatenated as a string of `modules name`, as shown in the above example
