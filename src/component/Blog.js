function blog() {
    return (
        <>
            <div class="blog-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <h2 class="section-title">ผลงานที่ผ่านมา</h2>
                        </div>
                        <div class="col-md-6 text-start text-md-end">
                            <a href="#" class="more">ดูทั้งหมด</a>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail" ><img src="images/แพบ้าน.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำแบบมีห้อง</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">จีระยุทธ วงษ์คำเหลา</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/แพ2.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลยน้ำแบบ โล่งมีสะพาน</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">จีระยุทธ วงษ์คำเหลา</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/แพ1.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แบลอยน้ำ แบบหลังคาจั่ว</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">จีระยุทธ วงษ์คำเหลา</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
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

export default blog;