<template>
    <main>
        <div style="height: 20rem; overflow-y:auto">
            <div class="b-list-group ">
                <div class="" v-for="result, index in result.CVE_Items" :key="`ID-${index}`">
                    <br />
                    <div class="b-list-group-item"
                        style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)"
                        :title="result.cve.description.description_data[0].value">
                        ID: {{ result.cve.CVE_data_meta.ID }} <br>
                        Impact Score:
                        {{ result.impact.baseMetricV2 ? result.impact.baseMetricV2.impactScore : `no impact` }}
                        <br>
                        <span v-for="tag in getTags(result.cve.references.reference_data)" :key="`ID-${tag}`">
                            <button class="shadow btn-warning m-1 p-1" style="border-radius: 3px;">{{ tag }}</button>
                        </span>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>



        <!-- </div> -->
    </main>
</template>

<script>
    import axios from "axios"
    import {
        ref
    } from 'vue'
    export default {
        data() {
            return {
                result: [],
            };
        },
        mounted() {
            axios
                .get('https://services.nvd.nist.gov/rest/json/cves/1.0', {
                    timeout: 30000
                })
                .then(res => {
                    this.result = res.data.result
                    console.log(res)
                })
                .then(() => {
                    console.log(this.result)
                })
                .catch(err => console.error(err));



        },
        methods: {
            getTags(reference_data) {
                const tags = []
                for (const rd of reference_data) {
                    for (const tag of rd.tags) {
                        if(!tags.includes(tag)) tags.push(tag)
                return tags
                    }
                }

                

            }
        }
    };
</script>

<style>

</style>