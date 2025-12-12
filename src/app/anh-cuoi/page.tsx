import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { promises as fs } from 'fs';
import path from 'path';
import galleryConfig from '@/data/gallery.json';
import "./page.module.css";

export const metadata: Metadata = {
  title: "Ảnh cưới - Việt và Hảo Wedding",
  description: "Đây là đám cưới của Hảo và Việt. Cùng xem ảnh cưới của chúng mình nha.",
};

async function getGalleryData() {
  const albums = [];

  for (const album of galleryConfig.albums) {
    // Read images from directory
    const albumDir = path.join(process.cwd(), 'public', album.directory);
    let imageFiles: string[] = [];

    try {
      const files = await fs.readdir(albumDir);
      imageFiles = files
        .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
        .map(file => path.join(album.directory, file).replace(/\\/g, '/'));
    } catch (error) {
      console.error(`Error reading directory ${albumDir}:`, error);
    }

    // Combine cover image with directory images
    const allImages = Array.from(new Set([album.cover, ...imageFiles]));

    albums.push({
      ...album,
      images: allImages
    });
  }

  return albums;
}

export default async function AnhCuoiPage() {
  const albums = await getGalleryData();

  return (
    <>
      <main id="primary" className="site-main">
        <article id="post-29" className="post-29 page type-page status-publish has-post-thumbnail hentry">
          <header className="entry-header">
            <div id="breadcrumbs">
              <span>
                <span><Link href="/">Trang chủ</Link></span> » <span className="breadcrumb_last" aria-current="page">Ảnh cưới</span>
              </span>
            </div>
            <h1 className="page-title">Ảnh cưới</h1>
          </header>

          <div className="entry-content">
            <div data-elementor-type="wp-page" data-elementor-id="29" className="elementor elementor-29">
              <div className="elementor-section-wrap" style={{ overflow: "hidden" }}>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-3ca1a85 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3ca1a85" data-element_type="section" data-settings='{"background_background":"classic"}'>
                  <div className="elementor-container elementor-column-gap-default">

                    {albums.map((album, index) => {
                      // Dynamic Layout Generation
                      const animationDelay = index * 200;
                      // Staggered Layout logic: Odd indices pushed down (Wave effect)
                      const marginTop = index % 2 !== 0 ? "140px" : "30px";
                      // Generate a stable ID for the lightbox group
                      const carouselId = `gallery-carousel-${index}`;

                      return (
                        <div
                          key={index}
                          className={`elementor-column elementor-col-20 elementor-top-column elementor-element gallery-column animated-slow animated fadeInUp`}
                          style={{
                            marginTop,
                            animationDelay: `${animationDelay}ms`,
                            animationFillMode: 'both',
                            opacity: 0
                          }}
                          data-element_type="column"
                          data-settings={JSON.stringify({
                            animation: "fadeInUp",
                            animation_delay: animationDelay
                          })}
                        >
                          <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">

                            {/* Image Carousel Widget */}
                            <div
                              className={`elementor-element gallery-carousel has-border elementor-widget elementor-widget-image-carousel`}
                              data-element_type="widget"
                              data-settings='{"slides_to_show":"1","navigation":"none","autoplay":"no","infinite":"no","effect":"slide","speed":500}'
                              data-widget_type="image-carousel.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-image-carousel-wrapper swiper-container swiper-container-initialized swiper-container-horizontal" dir="ltr">
                                  <div className="elementor-image-carousel swiper-wrapper" style={{ transform: "translate3d(0px, 0px, 0px)" }}>

                                    {/* Render Slides */}
                                    {album.images.map((imagePath, imgIndex) => {
                                      let slideClass = "swiper-slide";
                                      if (imgIndex === 0) slideClass += " swiper-slide-active";
                                      else if (imgIndex === 1) slideClass += " swiper-slide-next";

                                      const imageTitle = path.basename(imagePath, path.extname(imagePath));

                                      return (
                                        <div key={imagePath} className={slideClass}>
                                          <a
                                            data-elementor-open-lightbox="yes"
                                            data-elementor-lightbox-slideshow={carouselId}
                                            data-elementor-lightbox-title={imageTitle}
                                            href={imagePath}
                                          >
                                            <figure className="swiper-slide-inner">
                                              {/* Only render img for the first slide (Cover) */}
                                              {imgIndex === 0 ? (
                                                <Image
                                                  className="swiper-slide-image"
                                                  src={imagePath}
                                                  alt={imageTitle}
                                                  width={0}
                                                  height={0}
                                                  sizes="100vw"
                                                  style={{ width: '100%', height: 'auto' }}
                                                />
                                              ) : null}
                                            </figure>
                                          </a>
                                        </div>
                                      );
                                    })}

                                  </div>
                                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                              </div>
                            </div>

                            {/* Heading Widget */}
                            <div
                              className={`elementor-element gallery-heading elementor-widget elementor-widget-heading`}
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  {album.title.map((line, i) => (
                                    <span key={i}>
                                      {i > 0 && <br />}
                                      <span>{line}</span>
                                    </span>
                                  ))}
                                </h2>
                              </div>
                            </div>

                          </div>
                        </div>
                      );
                    })}

                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Additional JS for this page (Swiper) */}
      <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/share-link.min.js" strategy="afterInteractive" />
    </>
  );
}
