<template>
    <form action="" class="space-y-6" @submit.prevent="saveForm">
        <div>
            <label for="name" class="block">Customer's name</label>
            <input type="text" id="name" v-model="customer.name" />
            <div v-if="errorsName" class="text-sm text-red-500">
                {{ errorsName }}
            </div>
        </div>
        <div>
            <label for="tel" class="block">Customer's phone number</label>
            <input type="text" id="tel" v-model="customer.tel" />
            <div v-if="errorsTel" class="text-sm text-red-500">
                {{ errorsTel }}
            </div>
        </div>
        <div>
            <label for="is_favourite" class="block">Favori ?</label>
            <input
                type="checkbox"
                id="is_favourite"
                v-model="customer.is_favourite"
            />
            <div v-if="errorsFav" class="text-sm text-red-500">
                {{ errorsFav }}
            </div>
        </div>
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">
            Update Customer
        </button>
    </form>
</template>

<script>
import axios from "axios";
import router from "../router/index.js";
export default {
    data() {
        return {
            customer: {
                name: "",
                tel: "",
                is_favourite: false,
            },
            errorsName: "",
            errorsTel: "",

            errorsFav: "",

            /* CustomerId: null, */
        };
    },
    methods: {
        async saveForm() {
            const data = { ...this.customer };
            try {
                await axios.put(`/api/customers/${this.id}`, data);
                await router.push({ name: "customers.index" });
            } catch (error) {
                const Err = error.response.data.errors;
                console.log(Err);

                if ("name" in Err) {
                    this.errorsName = Err.name[0];
                } else {
                    console.log("ok");
                }
                if ("tel" in Err) {
                    this.errorsTel = Err.tel[0];
                }
                if ("is_favourite" in Err) {
                    this.errorsFav = Err.is_favourite[0];
                }
            }
        },
        async getCustomer() {
            const response = await axios.get(`/api/customers/${this.id}`);
            this.customer.name = response.data.data.name;
            this.customer.tel = response.data.data.tel;
            this.customer.is_favourite = response.data.data.is_favourite;
            /* console.log(response.data.data[0]); */
        },
    },
    created() {
        this.getCustomer();
    },
    props: {
        id: {
            /* required: true,
            type: String,
 */
        },
    },
};
</script>

<style scoped></style>
