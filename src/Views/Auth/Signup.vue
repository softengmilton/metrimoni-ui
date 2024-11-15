<template>
    <section>
        <div class="login">
            <div class="container">
                <div class="row">
                    <div class="inn">
                        <div class="lhs">
                            <div class="tit">
                                <h2>Now <b>Find your life partner</b> Easy and fast.</h2>
                            </div>
                            <div class="im">
                                <img src="../../assets/images/login-couple.png" alt="" />
                            </div>
                            <div class="log-bg">&nbsp;</div>
                        </div>

                        <div class="rhs">
                            <div>
                                <div class="form-tit">
                                    <h4>Start for free</h4>
                                    <h1>Sign up to Matrimony</h1>
                                    <p>Already a member? <a href="login.html">Login</a></p>
                                </div>

                                <!-- Step Form -->
                                <!-- <el-steps :active="active" finish-status="success">
                                    <el-step title="Basic Info" />
                                    <el-step title="Personal Details" />
                                    <el-step title="Family Details" />
                                    <el-step title="Spouse Expectations" />
                                    <el-step title="Final Details" />
                                </el-steps> -->

                                <div class="form-login">
                                    <form @submit.prevent="submitForm">
                                        <!-- Step 1: Basic Info -->
                                        <div v-if="active === 0">
                                            <div class="form-group">
                                                <label class="lb">Mobile No:</label>
                                                <input type="number" v-model="basicInfo.mobile" class="form-control"
                                                    placeholder="Enter your mobile number" />
                                            </div>
                                            <div class="form-group">
                                                <label class="lb">Email:</label>
                                                <input type="email" v-model="basicInfo.email" class="form-control"
                                                    placeholder="Enter your email" />
                                            </div>
                                            <div class="form-group">
                                                <label class="lb">Password:</label>
                                                <input type="password" v-model="basicInfo.password" class="form-control"
                                                    placeholder="Enter your password" />
                                            </div>
                                            <div class="form-group">
                                                <label class="lb">Confirm Password:</label>
                                                <input type="password" v-model="basicInfo.confirmPassword"
                                                    class="form-control" placeholder="Confirm your password" />
                                            </div>
                                        </div>

                                        <!-- Step 2: Personal Details -->
                                        <div v-if="active === 1">
                                            <!-- Name Input -->
                                            <div class="form-group">
                                                <label class="lb">Name:</label>
                                                <input type="text" v-model="personalDetails.name" class="form-control"
                                                    placeholder="Enter your full name" />
                                            </div>

                                            <!-- Age Input (18-50) -->
                                            <div class="form-group">
                                                <label class="lb">Age (18-50):</label>
                                                <input type="number" v-model="personalDetails.age" class="form-control"
                                                    min="18" max="50" />
                                            </div>

                                            <!-- Height Input -->
                                            <div class="form-group">
                                                <label class="lb">Height:</label>
                                                <input type="text" v-model="personalDetails.height"
                                                    class="form-control" />
                                            </div>

                                            <!-- Skin Colour Input -->
                                            <div class="form-group">
                                                <label class="lb">Skin Colour:</label>
                                                <input type="text" v-model="personalDetails.skinColor"
                                                    class="form-control" />
                                            </div>

                                            <!-- Figure Input -->
                                            <div class="form-group">
                                                <label class="lb">Figure:</label>
                                                <input type="text" v-model="personalDetails.figure"
                                                    class="form-control" />
                                            </div>

                                            <!-- Citizenship Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Citizen:</label>
                                                <select v-model="personalDetails.citizen" class="form-control">
                                                    <option value="British Citizen">British Citizen</option>
                                                    <option value="Non-British">Non-British</option>
                                                </select>
                                            </div>

                                            <!-- Educational Qualification Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Educational Qualification:</label>
                                                <select v-model="personalDetails.education" class="form-control">
                                                    <option value="GCSE">GCSE</option>
                                                    <option value="A level">A level</option>
                                                    <option value="Undergraduate Degree">Undergraduate Degree</option>
                                                    <option value="Postgraduate Degree">Postgraduate Degree</option>
                                                    <option value="Doctorate Degree">Doctorate Degree</option>
                                                    <option value="Non-Degree Qualification">Non-Degree Qualification
                                                    </option>
                                                    <option value="Other education Level">Other education Level</option>
                                                </select>
                                            </div>

                                            <!-- Profession Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Profession:</label>
                                                <select v-model="personalDetails.profession" class="form-control">
                                                    <option value="Alim">Alim</option>
                                                    <option value="Accountant">Accountant</option>
                                                    <option value="Architect">Architect</option>
                                                    <option value="Banker">Banker</option>
                                                    <option value="Beautician">Beautician</option>
                                                    <option value="Restaurant Owner">Restaurant Owner</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Waiter">Waiter</option>
                                                    <option value="Chef">Chef</option>
                                                    <option value="Customer Service Advisor">Customer Service Advisor
                                                    </option>
                                                    <option value="Business Owner">Business Owner</option>
                                                    <option value="Delivery Driver">Delivery Driver</option>
                                                    <option value="Taxi Driver">Taxi Driver</option>
                                                    <option value="Engineer">Engineer</option>
                                                    <option value="IT Sector Employee">IT Sector Employee</option>
                                                    <option value="Dentist">Dentist</option>
                                                    <option value="Doctor">Doctor</option>
                                                    <option value="Teacher">Teacher</option>
                                                    <option value="Professor">Professor</option>
                                                    <option value="Warehouse Worker">Warehouse Worker</option>
                                                    <option value="Government Employee">Government Employee</option>
                                                    <option value="NHS Worker">NHS Worker</option>
                                                    <option value="Healthcare Professional">Healthcare Professional
                                                    </option>
                                                    <option value="Lawyer">Lawyer</option>
                                                    <option value="Medical Professional">Medical Professional</option>
                                                    <option value="Remote Work">Remote Work</option>
                                                    <option value="Hybrid Work">Hybrid Work</option>
                                                    <option value="Nurse">Nurse</option>
                                                    <option value="Pharmacist">Pharmacist</option>
                                                    <option value="Police">Police</option>
                                                    <option value="Army">Army</option>
                                                    <option value="Politician">Politician</option>
                                                    <option value="Sales Assistant">Sales Assistant</option>
                                                    <option value="Self-Employed">Self-Employed</option>
                                                    <option value="Sportsman">Sportsman</option>
                                                    <option value="Student">Student</option>
                                                    <option value="Unemployed">Unemployed</option>
                                                    <option value="Imam">Imam</option>
                                                    <option value="Benefit Seeker">Benefit Seeker</option>
                                                </select>
                                            </div>

                                            <!-- Yearly Salary/Income Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Yearly Salary/Income:</label>
                                                <select v-model="personalDetails.salary" class="form-control">
                                                    <option value="10k">10k</option>
                                                    <option value="15k">15k</option>
                                                    <option value="20k">20k</option>
                                                    <option value="25k">25k</option>
                                                    <option value="30k">30k</option>
                                                    <option value="35k">35k</option>
                                                    <option value="40k">40k</option>
                                                    <option value="45k">45k</option>
                                                    <option value="50k">50k</option>
                                                    <option value="55k">55k</option>
                                                    <option value="60k">60k</option>
                                                    <option value="65k">65k</option>
                                                    <option value="70k">70k</option>
                                                    <option value="75k">75k</option>
                                                    <option value="80k">80k</option>
                                                    <option value="100k+">100k+</option>
                                                    <option value="disclose later">Disclose later</option>
                                                </select>
                                            </div>

                                            <!-- Location/Region Input -->
                                            <div class="form-group">
                                                <label class="lb">Location/Region:</label>
                                                <input type="text" v-model="personalDetails.location"
                                                    class="form-control" placeholder="Enter your region" />
                                            </div>

                                            <!-- Council Input -->
                                            <div class="form-group">
                                                <label class="lb">Council:</label>
                                                <input type="text" v-model="personalDetails.council"
                                                    class="form-control" placeholder="Enter your council" />
                                            </div>

                                            <!-- House Type Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">House Type:</label>
                                                <select v-model="personalDetails.houseType" class="form-control">
                                                    <option value="Own property">Own property</option>
                                                    <option value="Rented property">Rented property</option>
                                                    <option value="Council property">Council property</option>
                                                </select>
                                            </div>

                                            <!-- Marital Status Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Marital Status:</label>
                                                <select v-model="personalDetails.maritalStatus" class="form-control">
                                                    <option value="Never married">Never married</option>
                                                    <option value="Divorced with no kid">Divorced with no kid</option>
                                                    <option value="Divorced with kid">Divorced with kid</option>
                                                    <option value="Widowed">Widowed</option>
                                                </select>
                                            </div>

                                            <!-- Gender Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Gender:</label>
                                                <select v-model="personalDetails.gender" class="form-control">
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>

                                            <!-- Religious Mazhab Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Religious Mazhab:</label>
                                                <select v-model="personalDetails.religiousMazhab" class="form-control">
                                                    <option value="Hanafi">Hanafi</option>
                                                    <option value="Maliki">Maliki</option>
                                                    <option value="Shafi">Shafi</option>
                                                    <option value="Hanbali">Hanbali</option>
                                                </select>
                                            </div>

                                            <!-- Religious Practice Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Religious Practice:</label>
                                                <select v-model="personalDetails.religiousPractice"
                                                    class="form-control">
                                                    <option value="Very religious">Very religious</option>
                                                    <option value="Moderately practising">Moderately practising</option>
                                                    <option value="Not practising">Not practising</option>
                                                </select>
                                            </div>

                                            <!-- Prayers Frequency Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Prayers:</label>
                                                <select v-model="personalDetails.prayers" class="form-control">
                                                    <option value="Weekly minimum of 35 salah">Weekly minimum of 35
                                                        salah</option>
                                                    <option value="Weekly minimum of 30 salah">Weekly minimum of 30
                                                        salah</option>
                                                    <option value="Weekly minimum of 25 salah">Weekly minimum of 25
                                                        salah</option>
                                                    <option value="Weekly minimum of 20 salah">Weekly minimum of 20
                                                        salah</option>
                                                    <option value="Weekly minimum of 15 salah">Weekly minimum of 15
                                                        salah</option>
                                                    <option value="Weekly minimum of 10 salah">Weekly minimum of 10
                                                        salah</option>
                                                    <option value="Weekly minimum of 05 salah">Weekly minimum of 05
                                                        salah</option>
                                                    <option value="Masha-Allah only Jummah">Masha-Allah only Jummah
                                                    </option>
                                                </select>
                                            </div>

                                            <!-- Disability Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Disability:</label>
                                                <select v-model="personalDetails.disability" class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Umrah/Hajj Completed Input -->
                                            <div class="form-group">
                                                <label class="lb">Umrah/Hajj:</label>
                                                <select v-model="personalDetails.umrahHajj" class="form-control">
                                                    <option value="Completed">Completed</option>
                                                    <option value="Not yet">Not yet</option>
                                                </select>
                                            </div>

                                            <!-- Language Preference Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Language:</label>
                                                <select v-model="personalDetails.language" class="form-control">
                                                    <option value="English & Sylheti">English & Sylheti</option>
                                                    <option value="Only English">Only English</option>
                                                </select>
                                            </div>

                                            <!-- Marriage Plan Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Marriage Plan:</label>
                                                <select v-model="personalDetails.marriagePlan" class="form-control">
                                                    <option value="As soon as possible">As soon as possible</option>
                                                    <option value="Within 3 months">Within 3 months</option>
                                                    <option value="Within 6 months">Within 6 months</option>
                                                </select>
                                            </div>

                                            <!-- Islamic Dress Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Islamic Dress:</label>
                                                <select v-model="personalDetails.islamicDress" class="form-control">
                                                    <option value="Modest">Modest</option>
                                                    <option value="Hijab">Hijab</option>
                                                    <option value="Niqab">Niqab</option>
                                                    <option value="Jilbab">Jilbab</option>
                                                    <option value="No religious dress">No religious dress</option>
                                                </select>
                                            </div>

                                            <!-- Smoking Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Smoking:</label>
                                                <select v-model="personalDetails.smoking" class="form-control">
                                                    <option value="Smoker">Smoker</option>
                                                    <option value="Non-smoker">Non-smoker</option>
                                                </select>
                                            </div>
                                        </div>
                                        <!-- Step 3: Family Details -->
                                        <div v-if="active === 2">
                                            <!-- Parents Status Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Parents:</label>
                                                <select v-model="familyDetails.parents" class="form-control">
                                                    <option value="Both Alive">Both Alive</option>
                                                    <option value="One Parent Alive">One Parent Alive</option>
                                                    <option value="Both Passed">Both Passed</option>
                                                </select>
                                            </div>

                                            <!-- Siblings Input -->
                                            <div class="form-group">
                                                <label class="lb">Siblings:</label>
                                                <input type="text" v-model="familyDetails.siblings" class="form-control"
                                                    placeholder="Enter number of siblings" />
                                            </div>

                                            <!-- Foreigner in Family Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Foreigner in Family:</label>
                                                <select v-model="familyDetails.foreignerInFamily" class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Castle Input -->
                                            <div class="form-group">
                                                <label class="lb">Castle:</label>
                                                <input type="text" v-model="familyDetails.castle" class="form-control"
                                                    placeholder="Enter family castle (if any)" />
                                            </div>

                                            <!-- Backhome City Input -->
                                            <div class="form-group">
                                                <label class="lb">Backhome City:</label>
                                                <input type="text" v-model="familyDetails.backhomeCity"
                                                    class="form-control" placeholder="Enter your city back home" />
                                            </div>

                                            <!-- Backhome Upazila Input -->
                                            <div class="form-group">
                                                <label class="lb">Backhome Upazila:</label>
                                                <input type="text" v-model="familyDetails.backhomeUpazila"
                                                    class="form-control" placeholder="Enter your upazila back home" />
                                            </div>
                                        </div>


                                        <!-- Step 4: Spouse Expectations -->
                                        <div v-if="active === 3">
                                            <!-- Citizenship Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Citizen:</label>
                                                <select v-model="spouseExpectations.citizen" class="form-control">
                                                    <option value="British citizen">British Citizen</option>
                                                    <option value="Non-british">Non-British</option>
                                                </select>
                                            </div>

                                            <!-- Profession Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Profession:</label>
                                                <select v-model="spouseExpectations.profession" class="form-control">
                                                    <option value="Any">Any</option>
                                                    <option>Alim</option>
                                                    <option>Accountant</option>
                                                    <option>Architect</option>
                                                    <option>Banker</option>
                                                    <option>Beautician</option>
                                                    <option>Restaurant Owner</option>
                                                    <!-- Continue adding all listed options here -->
                                                    <option>Unemployed</option>
                                                </select>
                                            </div>

                                            <!-- Skin Color Input -->
                                            <div class="form-group">
                                                <label class="lb">Skin Colour:</label>
                                                <input type="text" v-model="spouseExpectations.skinColor"
                                                    class="form-control" placeholder="Enter preferred skin color" />
                                            </div>

                                            <!-- Height Preference Input -->
                                            <div class="form-group">
                                                <label class="lb">Height Preference:</label>
                                                <input type="text" v-model="spouseExpectations.heightPreference"
                                                    class="form-control"
                                                    placeholder="Enter minimum height (e.g., 5')" />
                                            </div>

                                            <!-- Education Preference Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Education Preference:</label>
                                                <input type="text" v-model="spouseExpectations.educationPreference"
                                                    class="form-control"
                                                    placeholder="Enter preferred education level" />
                                            </div>

                                            <!-- Occupation Preference Input -->
                                            <div class="form-group">
                                                <label class="lb">Occupation Preference:</label>
                                                <input type="text" v-model="spouseExpectations.occupationPreference"
                                                    class="form-control"
                                                    placeholder="Enter preferred occupation (e.g., stable job, £25k+)" />
                                            </div>

                                            <!-- Appearance Preference Input -->
                                            <div class="form-group">
                                                <label class="lb">Appearance Preference:</label>
                                                <input type="text" v-model="spouseExpectations.appearancePreference"
                                                    class="form-control" placeholder="Describe preferred appearance" />
                                            </div>

                                            <!-- Age Preference Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Age Preference:</label>
                                                <input type="text" v-model="spouseExpectations.agePreference"
                                                    class="form-control"
                                                    placeholder="Enter preferred age range (e.g., 18-30)" />
                                            </div>

                                            <!-- Area of Choice Input -->
                                            <div class="form-group">
                                                <label class="lb">Area of Choice:</label>
                                                <input type="text" v-model="spouseExpectations.areaOfChoice"
                                                    class="form-control" placeholder="Enter preferred area/region" />
                                            </div>

                                            <!-- Marital Status Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Marital Status:</label>
                                                <input type="text" v-model="spouseExpectations.maritalStatus"
                                                    class="form-control"
                                                    placeholder="Enter marital status preference" />
                                            </div>

                                            <!-- Consider Divorce Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Consider a Divorce:</label>
                                                <select v-model="spouseExpectations.considerDivorce"
                                                    class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Consider Divorce with Children Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Consider Divorce with Children:</label>
                                                <select v-model="spouseExpectations.considerDivorceWithChildren"
                                                    class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Consider with Disabilities Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Consider with Disabilities:</label>
                                                <select v-model="spouseExpectations.considerDisabilities"
                                                    class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Consider Non-UK Citizen Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Consider a Non-UK Citizen:</label>
                                                <select v-model="spouseExpectations.considerNonUkCitizen"
                                                    class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Willing to Relocate Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Willing to Relocate:</label>
                                                <select v-model="spouseExpectations.willingToRelocate"
                                                    class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Agree to Live with In-Laws Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Agree to Live with In-Law’s:</label>
                                                <select v-model="spouseExpectations.agreeToLiveWithInLaws"
                                                    class="form-control">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>

                                            <!-- Wedding Plan Dropdown -->
                                            <div class="form-group">
                                                <label class="lb">Wedding Plan:</label>
                                                <select v-model="spouseExpectations.weddingPlan" class="form-control">
                                                    <option>According to Sunnah</option>
                                                    <option>Expensive Wedding</option>
                                                    <option>Normal Wedding</option>
                                                </select>
                                            </div>
                                        </div>


                                        <!-- Step 5: Final Details -->
                                        <div v-if="active === 4">
                                            <!-- Bio Section -->
                                            <div class="form-group">
                                                <label class="lb">Bio (10-300 words):</label>
                                                <textarea v-model="agreeMent.bio" class="form-control" rows="5"
                                                    placeholder="Write a short bio..."></textarea>
                                            </div>

                                            <!-- Guardian Information -->
                                            <div class="form-group">
                                                <label class="lb">Guardian Name:</label>
                                                <input type="text" v-model="agreeMent.guardianName" class="form-control"
                                                    placeholder="Enter guardian's name" />
                                            </div>
                                            <!-- Guardian WhatsApp Number -->
                                            <div class="form-group">
                                                <label class="lb">Guardian WhatsApp Number:</label>
                                                <input type="tel" v-model="agreeMent.guardianWhatsApp"
                                                    class="form-control"
                                                    placeholder="Enter guardian's WhatsApp number" />
                                            </div>
                                            <!-- Photo -->
                                            <div class="form-group">
                                                <label class="lb">Photo</label>
                                                <ElFormItem>
                                                    <ElUpload action="#" :on-change="handleImageSelect"
                                                        :file-list="state.fileList" list-type="picture-card"
                                                        :auto-upload="false" :limit="1">
                                                        <ElIcon>
                                                            <Plus />
                                                        </ElIcon>
                                                        <template #file="{ file }">
                                                            <div>
                                                                <img class="el-upload-list__item-thumbnail"
                                                                    :src="file?.url" alt="">
                                                                <span class="el-upload-list__item-actions">
                                                                    <span class="el-upload-list__item-preview"
                                                                        @click="handlePictureCardPreview(file)">
                                                                        <ElIcon>
                                                                            <ZoomIn />
                                                                        </ElIcon>
                                                                    </span>
                                                                    <span class="el-upload-list__item-delete"
                                                                        @click="handleRemove(file)">
                                                                        <ElIcon>
                                                                            <Delete />
                                                                        </ElIcon>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </template>
                                                    </ElUpload>
                                                    <ElDialog v-model="dialogVisible">
                                                        <ElImage w-full :src="dialogImageUrl" alt="Preview Image" />
                                                    </ElDialog>
                                                </ElFormItem>
                                            </div>


                                            <!-- Agreement Checkbox -->
                                            <div class="form-group form-check">
                                                <input type="checkbox" v-model="agreeMent.agreement"
                                                    class="form-check-input" id="agreementCheck" />
                                                <label class="form-check-label" for="agreementCheck">
                                                    I agree everything is correct & I am over 18.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="form-actions">
                                            <button v-if="active > 0" type="button" class="btn btn-secondary"
                                                @click="previous">
                                                Previous
                                            </button>
                                            <button type="button" class="btn btn-primary" @click="next">
                                                {{ active === 4 ? 'Submit' : 'Next step' }}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const active = ref(0)


const basicInfo = ref({
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
})

const personalDetails = ref({
    name: '',
    age: null,
    height: '',
    skinColor: '',
    figure: '',
    citizen: 'British Citizen', // Default value
    education: 'GCSE', // Default value
    profession: 'Accountant', // Default value
    salary: '20k',
    location: '',
    council: '',
    houseType: 'Own property',
    maritalStatus: 'Never married',
    gender: 'Male',
    religiousMazhab: 'Hanafi',
    religiousPractice: 'Very religious',
    prayers: 'Weekly minimum of 35 salah',
    disability: 'No',
    umrahHajj: 'Not yet',
    language: 'English & Sylheti',
    marriagePlan: 'As soon as possible',
    islamicDress: 'Modest',
    smoking: 'Non-smoker'
})

const familyDetails = ref({
    parents: 'Both Alive',
    siblings: '',
    foreignerInFamily: 'No',
    castle: '',
    backhomeCity: '',
    backhomeUpazila: ''
})

const spouseExpectations = ref({
    citizen: 'British citizen',
    profession: 'Any',
    skinColor: '',
    heightPreference: '',
    educationPreference: '',
    occupationPreference: '',
    appearancePreference: '',
    agePreference: '18-30',
    areaOfChoice: '',
    maritalStatus: '',
    considerDivorce: 'No',
    considerDivorceWithChildren: 'No',
    considerDisabilities: 'No',
    considerNonUkCitizen: 'No',
    willingToRelocate: 'No',
    agreeToLiveWithInLaws: 'No',
    weddingPlan: 'Normal Wedding'
})

const agreeMent = ref({
    bio: "",
    guardianName: "",
    guardianWhatsApp: "",
    agreement: "",
    photo: null
})


const state = reactive({
    fileList: [],
    images: [],
})


const handleImageSelect = (file, fileList) => {
    state.fileList = [...fileList]
    state.images = [...fileList]

    agreeMent.value.photo = file.raw
}

const handlePictureCardPreview = file => {
    dialogImageUrl.value = file?.url
    dialogVisible.value = true
}

const handleRemove = file => {
    state.fileList.splice(state.fileList.indexOf(file), 1)
    agreeMent.value.photo = null
}


// Step 2 (Personal Details)
const name = ref('')
const age = ref(null)
const height = ref('')
const skinColor = ref('')
const figure = ref('')
const citizen = ref('')
const education = ref('')
const profession = ref('')
const salary = ref('')

// Step 3 (Family Details)
const parents = ref('')
const siblings = ref('')
const foreignerFamily = ref('')
const castle = ref('')
const backHomeCity = ref('')
const backHomeUpazila = ref('')

// Step 4 (Spouse Expectations)
const spouseProfession = ref('')
const spouseAge = ref('')
const spouseSkinColor = ref('')
const marriagePlan = ref('')
const agree = ref(false)

const next = () => {
    if (active.value < 4) {
        active.value++
    } else {
        submitForm()
    }
}

const previous = () => {
    if (active.value > 0) {
        active.value--
    }
}

const submitForm = () => {

}
</script>

<style scoped>
/* Add your styling here */
.form-actions {
    display: flex;
    justify-content: space-between;
}

.btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.login .inn {
    width: 1280px !important;
}
</style>
