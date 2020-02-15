
## Installation


```bash
$ npm install mwangaben-modal --save-dev
```



## Usage


```js
  import Vue from 'vue'
  import Modal from 'mwangaben-modal'

  Vue.use(Modal)
```


#### Anywhere in your App where Vue is accessible you can use it as 

```js
    <a href="#my-modal">Ask me</a>
    <modal name="my-modal">
      <h1>Are you Okay today ? </h1>
    </modal>

```

#### You can also trigger the modal via $modal.show('nameOFTheModal') as follows

```js
    <button @click="$modal.show('my-modal')">Ask me</button>
    <modal name="my-modal">
      <h1>Are you Okay today ? </h1>
    </modal>

```

#### Likewise you can also hide the modal via $modal.hide('nameOFTheModal') as follows

```js
    <button @click="$modal.show('my-modal')">Ask me</button>
    <modal name="my-modal">
      <h1>Are you Okay today ? </h1>
      <btton @click="$modal.hide('my-modal)">Leave Alone</btton>
    </modal>


```

#### You can also opt in a name for your modal if you want to as follows 
```js
  import Vue from 'vue'
  import Modal from 'mwangaben-modal'

  Vue.use(Modal, {
      name: 'nice-modal'
  })
```