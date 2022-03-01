<template>
    <form action="" class="space-y-6" @submit.prevent="submitForm">
        <div>
            <label for="name" class="block">Customer's name</label>
            <input type="text" id="name" v-model="form.name" />
            <div v-if="errorsName" class="text-sm text-red-500">
                {{ errorsName }}
            </div>
        </div>
        <div>
            <label for="tel" class="block">Customer's phone number</label>
            <input type="text" id="tel" v-model="form.tel" />
            <div v-if="errorsTel" class="text-sm text-red-500">
                {{ errorsTel }}
            </div>
        </div>
        <div>
            <label for="is_favourite" class="block">Favori ?</label>
            <input
                type="checkbox"
                id="is_favourite"
                v-model="form.is_favourite"
            />
            <div v-if="errorsFav" class="text-sm text-red-500">
                {{ errorsFav }}
            </div>
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
                name: "",
                tel: "",
                is_favourite: false,
            },
            errorsName: "",
            errorsTel: "",
            erreur: false,
            errorsFav: "",
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
            try {
                await axios.post("/api/customers", formdata);
                await router.push({ name: "customers.index" });
            } catch (error) {
                this.erreur = true;
                const Err = error.response.data.errors;
                /*                 for (const key in Err) {
                    this.errorsName = Err["name"];
                    this.errorsTel = Err["tel"];
                } */
                this.errorsName = Err.name[0];
                this.errorsTel = Err.tel[0];
                this.errorsFav = Err.is_favourite[0];
                console.log(this.errorsName);
                /*                 this.errors.name = error.response.data.errors.name[0];
                this.errors.tel = error.response.data.errors.tel[0]; */
            }
        },
    },
    props: {},
};
</script>

<style scoped></style>
