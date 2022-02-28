<template>
    <form action="" class="space-y-6" @submit.prevent="submitForm">
        <div>
            <label for="name" class="block">Customer's name</label>
            <input type="text" id="name" v-model="form.name" />
        </div>
        <div>
            <label for="tel" class="block">Customer's phone number</label>
            <input type="text" id="tel" v-model="form.tel" />
        </div>
        <div>
            <label for="is_favourite" class="block">Favori ?</label>
            <input
                type="checkbox"
                id="is_favourite"
                v-model="form.is_favourite"
            />
        </div>
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">
            Create Customer
        </button>
    </form>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
    data() {
        return {
            form: {
                name: null,
                tel: null,
                is_favourite: false,
            },
        };
    },
    methods: {
        async submitForm() {
            let formdata = { ...this.form };
            /*  await console.log(k); */

            /*             console.log({
                name: this.form.name,
                tel: this.form.tel,
                is_favourite: this.form.is_favourite,
            }); */
            await axios.post("/api/customers", formdata);

            router.push({ name: "customers.index" });
        },
    },
    props: {},
};
</script>

<style scoped></style>
