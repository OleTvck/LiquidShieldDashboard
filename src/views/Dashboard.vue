<template>
    <main>
        <h1>Dashboard</h1>
        <div class="container">
            <div class="row align-items-center">
                <div class="col shadow">
                    <h5>Consulting Hours Left</h5>
                    <p class="display-1">5</p>
                </div>
                <div class="col shadow">
                    <h5>New Notifications</h5>
                    <ul class="list-group">
                        <!-- add scrolling to this  -->
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">An item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A second item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>

                    </ul>
                </div>
                <div class="col shadow">
                    <h5>Community Links</h5>
                    <p>Discord</p>
                    <p>Slack</p>
                    <p>Follow us on Twitter</p>

                </div>
                <div class="col shadow">
                    <h5>Users and Users Left</h5>
                    <p class="display-1">5</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h5>Vulnerable Systems</h5>
                    <BarChart />
                </div>
                <div class="col shadow">
                    <h5>Critical Systems 8+</h5>
                    <ul class="list-group">
                        <!-- add scrolling to this  -->
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">An item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A second item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                    </ul>
                </div>
                <div class="col shadow">
                    <h5>IOC List</h5>
                    <ul class="list-group">
                        <!-- add scrolling to this  -->
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">An item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A second item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col shadow">
                    <h5 class="mt-2">New CVE Feed</h5>
                    <!-- <DisplayAPI /> -->
                    <BarChart />
                </div>
                <div class="col shadow">
                    <h5>Relevent Training</h5>
                    <ul class="list-group">
                        <!-- add scrolling to this  -->
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">An item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A second item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                        <li class="list-group-item" style="background-color: var(--dark-alt); color: var(--primary); border:none; border-bottom: 1px solid var(--primary)">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script>


import BarChart from '../components/BarChart.vue';
import DisplayAPI from '../components/DisplayAPI.vue';
    export default {
    components: { BarChart, DisplayAPI }
}
</script>

<style>
    .container {
        background-color: var(--dark);
        color: var(--primary);
        border-radius: 10px;
        padding: 10px;
    }

    .col {
        background-color: var(--dark-alt);
        margin: 10px;
        border-radius: 10px;
        text-align: center;
    }
</style>