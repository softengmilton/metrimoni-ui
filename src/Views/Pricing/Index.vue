<template>

    <!-- PRICING PLANS -->
    <section>
        <div class="plans-ban">
            <div class="container">
                <div class="row">
                    <span class="pri">Pricing</span>
                    <h1>Get Started <br> Pick your Plan Now</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <span class="nocre">No credit card required</span>
                </div>
            </div>
        </div>
    </section>
    <!-- END -->

    <!-- PRICING PLANS -->
    <section>
        <div class="plans-main">
            <div class="container">
                <div class="row">
                    <ul>
                        <li>
                            <!---FREE CARD-->
                            <FreeCard />
                            <!---END-->
                        </li>
                        <li>
                            <!---GOLD CARD-->
                            <GoldCard />
                            <!---END-->
                        </li>
                        <li>
                            <!---GOLD CARD-->
                            <PlatinumCard />
                            <!---END-->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- END -->
</template>

<script setup>
import FreeCard from '../../components/Pricing/FreeCard.vue';
import GoldCard from '../../components/Pricing/GoldCard.vue';
import PlatinumCard from '../../components/Pricing/PlatinumCard.vue';


</script>

<style scoped></style>