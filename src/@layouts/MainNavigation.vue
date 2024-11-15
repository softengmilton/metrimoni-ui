<template>
    <!-- POPUP SEARCH -->
    <div class="pop-search">
        <span class="ser-clo">+</span>
        <div class="inn">
            <form>
                <input type="text" placeholder="Search here...">
            </form>
            <div class="rel-sear">
                <h4>Top searches:</h4>
                <a href="all-profiles.html">Browse all profiles</a>
                <a href="all-profiles.html">Mens profile</a>
                <a href="all-profiles.html">Female profile</a>
                <a href="all-profiles.html">New profiles</a>
            </div>
        </div>
    </div>
    <!-- END -->

    <!-- TOP MENU -->
    <div class="head-top">
        <div class="container">
            <div class="row">
                <div class="lhs">
                    <ul>
                        <li><a href="#!" class="ser-open"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="rhs">
                    <ul>
                        <li><a href="tel:+9704462944"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;+01 5312
                                5312</a></li>
                        <li><a href="mailto:info@example.com"><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;
                                help@company.com</a></li>
                        <li><a href="#!"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#!"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#!"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- END -->


    <!-- MAIN MENU -->
    <div class="hom-top">
        <div class="container">
            <div class="row">
                <div class="hom-nav">
                    <!-- LOGO -->
                    <div class="logo">
                        <span class="menu desk-menu">
                            <i></i><i></i><i></i>
                        </span>
                        <router-link to="/" class="logo-brand">
                            <a href="index.html" class="logo-brand"><img src="../assets/images/logo-b.png" alt=""
                                    loading="lazy" class="ic-logo">
                            </a>
                        </router-link>
                    </div>

                    <!-- EXPLORE MENU -->
                    <div class="bl">
                        <ul>
                            <li class="smenu-pare" v-for="(item, index) in leftNavigation" :key="index">
                                <RouterLink class="smenu" :to="item.url">
                                    {{ item.name }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                    <!-- USER PROFILE -->
                    <div class="al">
                        <div class="head-pro">
                            <img src="../assets/images/profiles/1.jpg" alt="" loading="lazy">
                            <b>Advisor</b><br>
                            <h4>Ashley emyy</h4>
                            <span class="fclick"></span>
                        </div>
                    </div>

                    <!--MOBILE MENU-->
                    <div class="mob-menu">
                        <div class="mob-me-ic">
                            <span class="ser-open mobile-ser">
                                <img src="../assets/images/icon/search.svg" alt="">
                            </span>
                            <span class="mobile-exprt" data-mob="dashbord">
                                <img src="../assets/images/icon/users.svg" alt="">
                            </span>
                            <!-- <span class="mobile-menu" data-mob="mobile">
                                <img src="../assets/images/icon/menu.svg" alt="">
                            </span> -->
                        </div>
                    </div>
                    <!--END MOBILE MENU-->
                </div>
            </div>
        </div>
    </div>
    <!-- END -->



    <nav class="mobile-nav">
        <ul class="nav-list">
            <li class="nav-item" v-for="(item, index) in leftNavigation" :key="index">
                <RouterLink class="nav-link" :to="item.url">
                    <img :src="item.icon" />
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>

import leftNavigation from '../@core/config/navigation.js';


</script>
<style scoped>
.mobile-nav {
    background-color: #1E2A78;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    border-radius: 10px 10px 0 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;
    display: none;
}

.nav-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-item {
    flex-grow: 1;
    text-align: center;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-link span {
    margin-top: 5px;
}

.icon-discover::before {
    content: '\\2764';
    font-size: 20px;
}

.icon-message::before {
    content: '\\2709';
    font-size: 20px;
}

.icon-match::before {
    content: '\\1F493';
    font-size: 20px;
}

.icon-activities::before {
    content: '\\1F4C8';
    font-size: 20px;
}

.icon-search::before {
    content: '\\1F50D';
    font-size: 20px;
}

@media (max-width: 990px) {
    .mobile-nav {
        padding: 15px 0;
        justify-content: space-evenly;
        display: block;
    }

    .nav-link {
        font-size: 14px;
    }

    .nav-link span {
        margin-top: 8px;
        font-size: 16px;
    }

    .icon-discover::before,
    .icon-message::before,
    .icon-match::before,
    .icon-activities::before,
    .icon-search::before {
        font-size: 24px;
    }
}
</style>