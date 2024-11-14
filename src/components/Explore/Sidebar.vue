<template>
    <div class="fil-mob-view">
        <span class="filter-clo">+</span>
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