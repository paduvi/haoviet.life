import Image from "next/image";
import Link from "next/link";
import landingData from "@/data/landing.json";
import ElementorWaypoints from "@/components/ElementorWaypoints";

export default function HomePage() {
  return (
    <main id="primary" className="site-main">
      <ElementorWaypoints />
      <article id="post-2" className="post-2 page type-page status-publish has-post-thumbnail hentry">
        <header className="entry-header">
          <div id="breadcrumbs"><span><span className="breadcrumb_last" aria-current="page">Trang chủ</span></span></div>
          <h1 className="page-title">Trang chủ</h1>
        </header>

        <div className="entry-content">
          <div data-elementor-type="wp-page" data-elementor-id="2" className="elementor elementor-2" data-elementor-settings="[]">
            <div className="elementor-section-wrap">
              {/* Hero Section */}
              <section className="elementor-section elementor-top-section elementor-element elementor-element-23694067 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="23694067" data-element_type="section" data-settings='{"background_background":"classic"}'>
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4b4acacc animated-slow elementor-invisible" data-id="4b4acacc" data-element_type="column" data-settings='{"animation":"fadeIn"}'>
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-ff0d39d has-box elementor-widget elementor-widget-image" data-id="ff0d39d" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="/assets/images/image-primary.png" className="attachment-large size-large" alt="Việt và Hảo Wedding" width={460} height={580} sizes="100vw" priority />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-a82cb3d float-horizontal elementor-widget elementor-widget-image" data-id="a82cb3d" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="/assets/images/title-text-2.png" className="attachment-large size-large" alt="Việt và Hảo" width={538} height={144} sizes="100vw" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-adaf77c elementor-absolute elementor-widget-tablet__width-auto elementor-widget elementor-widget-image" data-id="adaf77c" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <Image src="/assets/images/date-text.png" className="attachment-large size-large" alt="20.02.2022" width={130} height={112} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Start Text */}
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-53e8fab" data-id="53e8fab" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-7e95a80e animated-slow elementor-widget elementor-widget-text-editor elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="7e95a80e" data-element_type="widget" data-settings='{"_animation":"fadeInRight","_animation_delay":400}' data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Chào mọi người!</p>
                          <p><strong>Đây là đám cưới của Hảo và Việt – một đám cưới <span className="has-line">không đặc biệt</span>.</strong></p>
                        </div>
                      </div>
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-13ee1e8 animated-slow elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="13ee1e8" data-element_type="section" data-settings='{"animation":"fadeInUp","animation_delay":600}'>
                        <div className="elementor-container elementor-column-gap-default">
                          {/* Icon Box 1 - Không thiệp mời */}
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d8ad6d0" data-id="d8ad6d0" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-036647c svg-zoom-1 elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="036647c" data-element_type="widget" data-widget_type="icon-box.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                      <span className="elementor-icon elementor-animation-">
                                        <Image src="/assets/images/prohibition-1.svg" alt="Không thiệp mời" width={80} height={80} />
                                      </span>
                                    </div>
                                    <div className="elementor-icon-box-content">
                                      <div className="elementor-icon-box-title">
                                        <span>Không thiệp mời</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Icon Box 2 - Không phong bì */}
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b521aef" data-id="b521aef" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-6b88575 svg-zoom-2 elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="6b88575" data-element_type="widget" data-widget_type="icon-box.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                      <span className="elementor-icon elementor-animation-">
                                        <Image src="/assets/images/prohibition-2.svg" alt="Không phong bì" width={80} height={80} />
                                      </span>
                                    </div>
                                    <div className="elementor-icon-box-content">
                                      <div className="elementor-icon-box-title">
                                        <span>Không phong bì</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Icon Box 3 - Không xa lạ */}
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b7d48e5" data-id="b7d48e5" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-d3694b2 svg-zoom-3 elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="d3694b2" data-element_type="widget" data-widget_type="icon-box.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                      <span className="elementor-icon elementor-animation-">
                                        <Image src="/assets/images/prohibition-3.svg" alt="Không xa lạ" width={80} height={80} />
                                      </span>
                                    </div>
                                    <div className="elementor-icon-box-content">
                                      <div className="elementor-icon-box-title">
                                        <span>Không xa lạ</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="elementor-element elementor-element-a8b11d2 animated-slow elementor-widget elementor-widget-text-editor elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="a8b11d2" data-element_type="widget" data-settings='{"_animation":"fadeInUp","_animation_delay":800}' data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Khi bạn đọc được những dòng này, ít nhiều cũng đã biết đến chúng mình. Thật may mắn là chúng ta đã có cơ duyên để biết nhau, không quan trọng trước đó chúng ta đã gặp nhau hay chưa.</p>
                          <p>Chúng mình biết ơn sự có mặt của bạn tại đây để tham dự đám cưới của chúng mình. Đây là một sự kiện riêng tư, mời bạn tham gia vào hành trình này cùng chúng mình nhé!</p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-70891ea elementor-widget__width-auto elementor-fixed elementor-widget elementor-widget-button" data-id="70891ea" data-element_type="widget" id="scrollToForm" data-settings='{"_position":"fixed"}' data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link href="#registerForm" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon elementor-align-icon-right">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6L12 12L18 6" stroke="#4F3A14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 12L12 18L18 12" stroke="#4F3A14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </span>
                                <span className="elementor-button-text">Tham gia đám cưới</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Text */}

              {/* Image Gallery Section */}
              <section className="elementor-section elementor-top-section elementor-element elementor-element-a913e48 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="a913e48" data-element_type="section">
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a747110" data-id="a747110" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-76ca4f3 animated-slow elementor-widget elementor-widget-list-image elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="76ca4f3" data-element_type="widget" data-settings='{"_animation":"zoomIn","_animation_delay":200}' data-widget_type="list-image.default">
                        <div className="elementor-widget-container">
                          <div className="list-image-container">
                            <div className="row padding-lg-20">
                              <div className="col-auto order-2">
                                <div className="image-item item-order-1 main"><div className="image-wrap"><Image src={landingData.images.anhCuoi[0]} alt="Ảnh cưới 1" width={400} height={500} /></div></div>
                                <div className="circle-spin"></div>
                              </div>
                              <div className="col-sm-6 col-auto order-1 text-right">
                                <div className="image-item item-order-2 "><div className="image-wrap"><Image src={landingData.images.anhCuoi[1]} alt="Ảnh cưới 2" width={200} height={250} /></div></div>
                                <div className="image-item item-order-3 "><div className="image-wrap"><Image src={landingData.images.anhCuoi[2]} alt="Ảnh cưới 3" width={200} height={250} /></div></div>
                              </div>
                              <div className="col-sm-6 col-auto order-3">
                                <div className="image-item item-order-4 "><div className="image-wrap"><Image src={landingData.images.anhCuoi[3]} alt="Ảnh cưới 4" width={200} height={250} /></div></div>
                                <div className="image-item item-order-5 "><div className="image-wrap"><Image src={landingData.images.anhCuoi[4]} alt="Ảnh cưới 5" width={200} height={250} /></div></div>
                              </div>
                              <div className="col-sm-12 col-auto order-4">
                                <div className="image-item item-order-6 "><div className="image-wrap"><Image src={landingData.images.anhCuoi[5]} alt="Ảnh cưới 6" width={200} height={250} /></div></div>
                                <div className="image-item item-order-7 "><div className="image-wrap"><Image src={landingData.images.anhCuoi[6]} alt="Ảnh cưới 7" width={200} height={250} /></div></div>
                                <Link className="btn-curve" href="/anh-cuoi">Xem thêm <br />nhiều ảnh nữa</Link>
                              </div>
                              <div className="bg-text">
                                <div className="text-1">Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - </div>
                                <div className="text-2">Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - </div>
                                <div className="text-3">Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - Phan Đức Việt - Phạm Thanh Hảo - </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Letter Section */}
              <section className="elementor-section elementor-top-section elementor-element elementor-element-6563eb1 bg-letter elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6563eb1" data-element_type="section">
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0c8dc24" data-id="0c8dc24" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-e6f01e6 letter-box elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e6f01e6" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ab7a22b" data-id="ab7a22b" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-df15064 animated-slow elementor-widget elementor-widget-heading elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="df15064" data-element_type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">Đôi lời nhắn gửi</h2>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-35158aa has-quote animated-slow elementor-widget elementor-widget-text-editor elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="35158aa" data-element_type="widget" data-settings='{"_animation":"fadeIn","_animation_delay":600}' data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>Lời đầu tiên, cám ơn bạn đã dành thời gian cho chúng mình! Trước khi đi tiếp, rất mong bạn có thể dành chút thời gian cho vài dòng tâm sự nhé!</p>
                                  <p>Có thể hơi khác nhỉ, thay vì thiệp mời là việc đăng ký tham gia như này. Chúng mình thấu hiểu sự trân trọng qua mỗi tấm thiệp hay sự chúc phúc của chiếc phong bì. Nhưng hơn thế, chúng mình không muốn giới hạn hay ràng buộc giữa &quot;phải mời&quot; hay &quot;chỉ được mời&quot; và lựa chọn của chúng ta bị đóng khung trong những cách quen thuộc. Chuyện tình yêu của tụi mình thật ra…. cũng không có gì đặc biệt, nhưng chúng mình muốn ngày kỉ niệm này sẽ diễn ra theo cách đặc biệt nhất có thể. Chúng mình đã làm việc thật chăm chỉ, với mong muốn sẽ tạo ra một đêm đáng nhớ, và háo hức chia sẻ cột mốc này với người quan trọng – là bạn đó!</p>
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-894e759 animated-slow elementor-widget elementor-widget-image elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="894e759" data-element_type="widget" data-settings='{"_animation":"zoomIn","_animation_delay":600}' data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                  <Image src="/assets/images/cat.svg" className="attachment-large size-large" alt="Cat" width={30} height={30} />
                                </div>
                              </div>
                              <div className="elementor-element elementor-element-f08a674 animated-slow elementor-widget elementor-widget-text-editor elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="f08a674" data-element_type="widget" data-settings='{"_animation":"fadeInUp","_animation_delay":800}' data-widget_type="text-editor.default">
                                <div className="elementor-widget-container">
                                  <p>Vì thế nên, trước khi gặp nhau trực tiếp tại đám cưới, tụi mình có giao kèo nhỏ với nhau nhé, ngoắc tay, hứa đó nhé!</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Promises Section */}
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-54302a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="54302a2" data-element_type="section">
                        <div className="elementor-container elementor-column-gap-default">
                          {/* Promise 1 */}
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-29b603c" data-id="29b603c" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-d6a225d pinky-promise elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="d6a225d" data-element_type="widget" data-settings='{"_animation":"fadeInLeft","_animation_delay":1000}' data-widget_type="icon-box.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                      <span className="elementor-icon elementor-animation-">
                                        <Image src="/assets/images/pinky-promise.svg" alt="Giao kèo" width={60} height={60} />
                                      </span>
                                    </div>
                                    <div className="elementor-icon-box-content">
                                      <h3 className="elementor-icon-box-title">
                                        <span>Giao kèo <b>1</b></span>
                                      </h3>
                                      <p className="elementor-icon-box-description">Hãy đến với chúng mình khi bạn thực sự muốn</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Promise 2 */}
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-cc392b9" data-id="cc392b9" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-a371c5e pinky-promise elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="a371c5e" data-element_type="widget" data-settings='{"_animation":"fadeInUp","_animation_delay":1000}' data-widget_type="icon-box.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                      <span className="elementor-icon elementor-animation-">
                                        <Image src="/assets/images/pinky-promise.svg" alt="Giao kèo" width={60} height={60} />
                                      </span>
                                    </div>
                                    <div className="elementor-icon-box-content">
                                      <h3 className="elementor-icon-box-title">
                                        <span>Giao kèo <b>2</b></span>
                                      </h3>
                                      <p className="elementor-icon-box-description">Không mang theo phong bì, chỉ cần bạn đến, không nhất thiết phải áp lực mang theo quà mừng (dưới bất kỳ hình thức nào) sự có mặt của bạn là món quà lớn nhất rồi (thật đó)</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Promise 3 */}
                          <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9fcd31a" data-id="9fcd31a" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-5bcf0e5 pinky-promise elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="5bcf0e5" data-element_type="widget" data-settings='{"_animation":"fadeInRight","_animation_delay":1000}' data-widget_type="icon-box.default">
                                <div className="elementor-widget-container">
                                  <div className="elementor-icon-box-wrapper">
                                    <div className="elementor-icon-box-icon">
                                      <span className="elementor-icon elementor-animation-">
                                        <Image src="/assets/images/pinky-promise.svg" alt="Giao kèo" width={60} height={60} />
                                      </span>
                                    </div>
                                    <div className="elementor-icon-box-content">
                                      <h3 className="elementor-icon-box-title">
                                        <span>Giao kèo <b>3</b></span>
                                      </h3>
                                      <p className="elementor-icon-box-description">Sự kiện giản lược tối đa các nghi lễ câu nệ, hãy đến với tâm thế thật thoải mái nhé</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>

              {/* Register Form Section */}
              <section className="elementor-section elementor-top-section elementor-element elementor-element-a45dde0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a45dde0" data-element_type="section" data-settings='{"background_background":"classic"}'>
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7d26321" data-id="7d26321" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-0f7167f elementor-widget elementor-widget-menu-anchor" data-id="0f7167f" data-element_type="widget" data-widget_type="menu-anchor.default">
                        <div className="elementor-widget-container">
                          <div id="registerForm" className="elementor-menu-anchor"></div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-80ae592 elementor-widget elementor-widget-heading elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="80ae592" data-element_type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">Tham gia đám cưới</h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-b98f722 elementor-widget elementor-widget-text-editor elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="b98f722" data-element_type="widget" data-settings='{"_animation":"zoomIn","_animation_delay":400}' data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Và giao kèo đã thực hiện rồi, để chúng mình được đón bạn chu đáo, mời bạn điền các thông tin cơ bản nhé!</p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-61d0e90 animated-slow elementor-widget elementor-widget-spacer elementor-invisible initial-hidden" style={{ opacity: 0, visibility: "hidden" }} data-id="61d0e90" data-element_type="widget" data-settings='{"_animation":"fadeIn","_animation_delay":800}' data-widget_type="spacer.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner"></div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-7b3563a elementor-widget elementor-widget-text-editor" data-id="7b3563a" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p><strong>Thời gian: 17h00 – 20/02/2022</strong><br /><strong>Địa điểm: Tây Hồ – Hà Nội</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
