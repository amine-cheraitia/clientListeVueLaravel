<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
        <div class="flex mb-3">
            <router-link
                :to="{ name: 'customers.create' }"
                class="bg-green-500 px-2 py-1 text-white rounded"
                >Create</router-link
            >
        </div>
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
                <div
                    class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                >
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Phone number
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Is Favourite ?
                                </th>

                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr
                                v-for="customer in customers"
                                :key="customer.id"
                            >
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <!--                                     <div class="flex-shrink-0 h-10 w-10">
                                            <img
                                                class="h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                                alt=""
                                            />
                                        </div> -->
                                        <div class="ml-4">
                                            <div
                                                class="text-sm font-medium text-gray-900"
                                            >
                                                {{ customer.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">
                                        {{ customer.tel }}
                                    </div>
                                    <!--                <div class="text-sm text-gray-500">
                                        Optimization
                                    </div> -->
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                                        v-bind:class="{
                                            'bg-green-100 text-green-800':
                                                customer.is_favourite,
                                        }"
                                    >
                                        {{ customer.is_favourite }}
                                    </span>
                                </td>

                                <td
                                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                                >
                                    <!--                            <a
                                        href="#"
                                        class="text-indigo-600 hover:text-indigo-900"
                                        >Edit</a
                                    > -->
                                    <router-link
                                        class="text-indigo-600 hover:text-indigo-900"
                                        :to="customerEdit(customer.id)"
                                        >Edit</router-link
                                    >
                                    |
                                    <button
                                        @click="deleteCustomer(customer.id)"
                                        class="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <!-- More people... -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            customers: null,
        };
    },

    methods: {
        async getCustomers() {
            let response = await axios.get("api/customers");
            /* console.log(response.data.data); */
            this.customers = response.data.data;
            /* console.log(this.customers);
             */
        },
        async deleteCustomer(id) {
            await axios.delete("api/customers/" + id);
            this.getCustomers();
            console.log("customer a bien était suprimer");
        },
        customerEdit(id) {
            /*  console.log({ name: "customers.edit", params: { id: id } }); */
            return { name: "customers.edit", params: { id: id } };
        },
    },
    /*     watch: {
        customers() {
            console.log("changed");
            this.getCustomers();
        },
    }, */
    mounted() {
        this.getCustomers();
    },
};
</script>
