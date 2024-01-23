function popular() {
    return (
        <>
            <div class="popular-product">
                <div class="container">
                    <div class="row" >

                        <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="product-item-sm d-flex " >
                                <div class="thumbnail" >
                                    <img src="images/01.jpg" alt="Image" class="img-fluid" style={{borderRadius: "10px"}} />
                                </div>
                                <div class="pt-3" >
                                    <h3>พ่นโฟมผนัง</h3>
                                    <p>กันลามไฟ กั้กเสียง กันความร้อน </p>
                                    <p><a href="#">ติดต่อ</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="product-item-sm d-flex">
                                <div class="thumbnail">
                                    <img src="images/02.jpg" alt="Image" class="img-fluid" style={{borderRadius: "10px"}} />
                                </div>
                                <div class="pt-3">
                                    <h3>ฉีดโฟมช่องชาร์ป</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p><a href="#">ติดต่อ</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div class="product-item-sm d-flex">
                                <div class="thumbnail">
                                    <img src="images/03.jpg" alt="Image" class="img-fluid" style={{borderRadius: "10px"}} />
                                </div>
                                <div class="pt-3">
                                    <h3>พ่นหลังคา ฉนวนกันความร้อน</h3>
                                    <p>พ่นกันความร้อน ความหนาตามที่ลูกค้าต้องการ </p>
                                    <p><a href="#">ติดต่อ</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="testimonial-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 mx-auto text-center">
                            <h2 class="section-title">ติดต่อเรา</h2>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="testimonial-slider-wrap text-center">

                                <div id="testimonial-nav">
                                    <span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
                                    <span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
                                </div>

                                <div class="testimonial-slider">

                                    <div class="item">
                                        <div class="row justify-content-center">
                                            <div class="col-lg-8 mx-auto">

                                                <div class="testimonial-block text-center">
                                                    <blockquote class="mb-5">
                                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                    </blockquote>

                                                    <div class="author-info">
                                                        <div class="author-pic">
                                                            <img src="images/person-1.png" alt="Maria Jones" class="img-fluid" />
                                                        </div>
                                                        <h3 class="font-weight-bold">จีระยุทธ วงษ์คำเหลา</h3>
                                                        <span class="position d-block mb-3">ฝ่ายขาย</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default popular;