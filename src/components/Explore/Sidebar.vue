<template>
    <div class="fil-mob-view" id="fil-mob-view">
        <span class="filter-clo" @click="closeModal">+</span>
        <!-- START -->
        <div class="filt-com lhs-cate">
            <h4><i class="fa fa-search" aria-hidden="true"></i> I'm looking for</h4>
            <div class="form-group">
                <select class="chosen-select">
                    <option value="">I'm looking for</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
            </div>
        </div>
        <!-- END -->
        <!-- START -->
        <div class="filt-com lhs-cate">
            <h4><i class="fa fa-clock-o" aria-hidden="true"></i>Age</h4>
            <div class="form-group">
                <select class="chosen-select">
                    <option value="">Select age</option>
                    <option value="">18 to 30</option>
                    <option value="">31 to 40</option>
                    <option value="">41 to 50</option>
                    <option value="">51 to 60</option>
                    <option value="">61 to 70</option>
                    <option value="">71 to 80</option>
                    <option value="">81 to 90</option>
                    <option value="">91 to 100</option>
                </select>
            </div>
        </div>
        <!-- END -->
        <!-- START -->
        <div class="filt-com lhs-cate">
            <h4><i class="fa fa-bell-o" aria-hidden="true"></i>Select Religion</h4>
            <div class="form-group">
                <select class="chosen-select">
                    <option>Religion</option>
                    <option>Any</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Jain</option>
                    <option>Christian</option>
                </select>
            </div>
        </div>
        <!-- END -->
        <!-- START -->
        <div class="filt-com lhs-cate">
            <h4><i class="fa fa-map-marker" aria-hidden="true"></i>Location</h4>
            <div class="form-group">
                <select class="chosen-select" name="addjbmaincate">
                    <option value="Chennai">Chennai</option>
                    <option value="Bangaluru">Bangaluru</option>
                    <option value="Delhi">Delhi</option>
                </select>
            </div>
        </div>
        <!-- END -->
        <!-- START -->
        <div class="filt-com lhs-rati lhs-avail lhs-cate">
            <h4><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Availablity</h4>
            <ul>
                <li>
                    <div class="rbbox">
                        <input type="radio" value="" name="expert_avail" class="rating_check" id="exav1" checked>
                        <label for="exav1">All</label>
                    </div>
                </li>
                <li>
                    <div class="rbbox">
                        <input type="radio" value="" name="expert_avail" class="rating_check" id="exav2">
                        <label for="exav2">Available</label>
                    </div>
                </li>
                <li>
                    <div class="rbbox">
                        <input type="radio" value="" name="expert_avail" class="rating_check" id="exav3">
                        <label for="exav3">Offline</label>
                    </div>
                </li>
            </ul>
        </div>
        <!-- END -->

        <!-- START -->
        <div class="filt-com lhs-rati lhs-ver lhs-cate">
            <h4><i class="fa fa-shield" aria-hidden="true"></i>Profile</h4>
            <ul>
                <li>
                    <div class="rbbox">
                        <input type="radio" value="" name="expert_veri" class="rating_check" id="exver1" checked>
                        <label for="exver1">All</label>
                    </div>
                </li>
                <li>
                    <div class="rbbox">
                        <input type="radio" value="" name="expert_veri" class="rating_check" id="exver2">
                        <label for="exver2">Premium</label>
                    </div>
                </li>
                <li>
                    <div class="rbbox">
                        <input type="radio" value="" name="expert_veri" class="rating_check" id="exver3">
                        <label for="exver3">Free</label>
                    </div>
                </li>
            </ul>
        </div>
        <!-- END -->
        <!-- START -->
        <div class="filt-com filt-send-query">
            <div class="send-query">
                <h5>What are you looking for?</h5>
                <p>We will help you to arrage the best match to you.</p>
                <a href="#!" data-toggle="modal" data-target="#expfrm">Send your queries</a>
            </div>
        </div>
    </div>
    <!-- END -->
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
});
const isVisible = ref();

const emit = defineEmits(['close']);

function closeModal() {
    emit('close');
}







watch(() => props.visible, (newValue) => {
    isVisible.value = newValue;
    const element = document.getElementById('fil-mob-view');
    if (newValue === true) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});
</script>

<style scoped>
@media screen and (max-width: 769px) {
    .fil-mob-view {
        margin-top: 50px;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        bottom: 0;
        overflow-x: auto;
        padding: 40px 30px;
        background-color: #fff;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        border-radius: 0px 0 0 0;
        width: 100%;
        transform: translateY(0);
        opacity: 1;
        display: none;
        max-height: 90vh;

        /* Hidden by default */
    }

    .fil-mob-view[style*="display: block"] {
        display: block;
    }

    /* Improve select dropdown appearance */
    .chosen-select {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 14px;
        background-color: #f9f9f9;
    }

    .filter-clo {
        font-size: 28px;
        color: #333;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    /* Style headings and labels */
    h4 {
        font-size: 16px;
        color: #333;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .form-group select {
        background-color: #fafafa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        padding: 10px;
    }

    /* More polished radio button and label styles */
    .rbbox {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }

    .rbbox input[type="radio"] {
        margin-right: 10px;
    }

    .rbbox label {
        font-size: 14px;
        color: #555;
    }

    /* Smooth hover effects on query button */
    .filt-send-query a {
        display: inline-block;
        background-color: #007bff;
        color: #fff;
        padding: 10px 20px;
        border-radius: 30px;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    .filt-send-query a:hover {
        background-color: #0056b3;
    }
}
</style>