<template>
    <nav class="NavBar">
        <div class="tittle">
            <h4> {{ title }}</h4>
        </div>
        <ul>
            <li>
                <router-link :to= " { name: 'home' } ">Home</router-link>
            </li>
            <li>
                <router-link :to= " { name: 'profile' } ">Profile</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang= "ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NavBar",
    props:{
        title: {
            type: String,
            required: true,
        }
    }
})
</script>

<style scoped>
nav {
    min-height: 50px;
    background-color: teal;
}
ul{
    display: flex;
    justify-content: center;
    list-style: none;
}
li{
    padding: 2rem;
    font-weight: bold;

}
a {
    color: white;
    text-decoration: none;
}
a:visited{
    color: white;
}
</style>