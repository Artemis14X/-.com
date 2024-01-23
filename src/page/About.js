export default function Header() {
    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    <a className="navbar-brand" href="/">แพลอยน้ำ</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li class="nav-item ">
                                <a className="nav-link" href="/">หน้าแรก</a>
                            </li>
                            <li><a className="nav-link" href="Shop">สินค้า</a></li>
                            <li className="active"><a className="nav-link" href="About">เกี่ยวกับเรา</a></li>
                            <li><a className="nav-link" href="services.html">แจ้งปัญหา</a></li>
                            <li><a className="nav-link" href="blog.html">ผลงานของเรา</a></li>
                            <li><a className="nav-link" href="contact.html">ติดต่อเรา</a></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><a className="nav-link" href="#"><img src="images/user.svg" /></a></li>
                            <li><a className="nav-link" href="cart.html"><img src="images/cart.svg" /></a></li>
                        </ul>
                    </div>
                </div>

            </nav>

            {/* <!-- Start Hero Section --> */}
            <div class="hero">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                                <h1>About Us</h1>
                                <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="hero-img-wrap">
                                <img src="images/couch.png" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <div class="why-choose-section">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-6">
                            <h2 class="section-title">Why Choose Us</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                            <div class="row my-5">
                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/truck.svg" alt="Image" class="imf-fluid" />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/bag.svg" alt="Image" class="imf-fluid" />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/support.svg" alt="Image" class="imf-fluid" />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div class="col-6 col-md-6">
                                    <div class="feature">
                                        <div class="icon">
                                            <img src="images/return.svg" alt="Image" class="imf-fluid" />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-5">
                            <div class="img-wrap">
                                <img src="images/why-choose-us-img.jpg" alt="Image" class="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- End Why Choose Us Section -->

            <!-- Start Team Section --> */}
            <div class="untree_co-section">
                <div class="container">

                    <div class="row mb-5">
                        <div class="col-lg-5 mx-auto text-center">
                            <h2 class="section-title">Our Team</h2>
                        </div>
                    </div>

                    <div class="row">

                        {/* <!-- Start Column 1 --> */}
                        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_1.jpg" class="img-fluid mb-5" />
                                <h3 clas><a href="#"><span class="">Lawson</span> Arnold</a></h3>
                                <span class="d-block position mb-4">CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
                        </div>
                        {/* <!-- End Column 1 -->

                        <!-- Start Column 2 --> */}
                        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_2.jpg" class="img-fluid mb-5" />

                                <h3 clas><a href="#"><span class="">Jeremy</span> Walker</a></h3>
                                <span class="d-block position mb-4">CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>

                        </div>
                        {/* <!-- End Column 2 -->

                        <!-- Start Column 3 --> */}
                        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_3.jpg" class="img-fluid mb-5" />
                                <h3 clas><a href="#"><span class="">Patrik</span> White</a></h3>
                                <span class="d-block position mb-4">CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
                        </div>
                        {/* <!-- End Column 3 -->

                        <!-- Start Column 4 --> */}
                        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_4.jpg" class="img-fluid mb-5" />

                                <h3 clas><a href="#"><span class="">Kathryn</span> Ryan</a></h3>
                                <span class="d-block position mb-4">CEO, Founder, Atty.</span>
                                <p>Separated they live in.
                                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>


                        </div>
                        {/* <!-- End Column 4 --> */}



                    </div>
                </div>
            </div>
            {/* <!-- End Team Section --> */}
        </>
    )
}