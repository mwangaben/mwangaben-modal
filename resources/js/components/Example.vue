<template>
    <div class="">
        <button class="btn css" id="#my-modal">Click Me</button>
        <modal name="my-modal">
           <h1 v-text="message"></h1> 
           <button @click="$modal.hide('my-modal')" class="close">Close Modal</button>
         </modal>  
        <button class="btn js" @click="$modal.show('my-modal')">Click Me</button>

    </div>
</template>

<script>
export default {
    data(){
    	return {
    		message: 'Hello World',
    	}
    }
}
</script>

<style scoped>

</style>