<template>
    <!-- SUB HEADING -->
    <Heading @toggle-modal="handleModalToggle" />
    <!-- END -->

    <!-- START -->
    <section>
        <div class="all-weddpro all-jobs all-serexp chosenini">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <Sidebar :visible="isSidebarVisible" @close="handleSidebarClose" />
                    </div>
                    <div class="col-md-9">
                        <div class="short-all">
                            <div class="short-lhs">
                                Showing <b>32</b> profiles
                            </div>
                            <div class="short-rhs">
                                <ul>
                                    <li>
                                        Sort by:
                                    </li>
                                    <li>
                                        <div class="form-group">
                                            <select class="chosen-select">
                                                <option value="">Most relative</option>
                                                <option value="Men">Date listed: Newest</option>
                                                <option value="Men">Date listed: Oldest</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sort-grid sort-grid-1">
                                            <i class="fa fa-th-large" aria-hidden="true"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="sort-grid sort-grid-2 act">
                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="all-list-sh">
                            <ul>
                                <Card />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END -->

    <!-- CHAT CONVERSATION BOX START -->
    <ChatBox />
    <!-- END -->
</template>

<script setup>
import { ref } from 'vue';
import Heading from '../../components/Explore/Heading.vue'
import Sidebar from '../../components/Explore/Sidebar.vue';
import Card from '../../components/Explore/Card.vue';
import ChatBox from '../../components/Explore/ChatBox.vue';


const isSidebarVisible = ref(false);

function handleModalToggle() {
    isSidebarVisible.value = !isSidebarVisible.value;
}

function handleSidebarClose() {
    isSidebarVisible.value = false; // Close the sidebar when the close event is emitted
}
</script>