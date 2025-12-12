import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://haoviet.life"),
  title: "Việt và Hảo Wedding",
  description: "Chào mọi người! Đây là đám cưới của Hảo và Việt – một đám cưới không đặc biệt.",
  openGraph: {
    locale: "vi_VN",
    type: "website",
    title: "Việt và Hảo Wedding",
    description: "Chào mọi người! Đây là đám cưới của Hảo và Việt – một đám cưới không đặc biệt.",
    url: "https://haoviet.life/",
    siteName: "Việt và Hảo Wedding",
    images: [
      {
        url: "/assets/images/image-primary.png",
        width: 460,
        height: 580,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/assets/images/cropped-favicon-32x32.png", sizes: "32x32" },
      { url: "/assets/images/cropped-favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/assets/images/cropped-favicon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* CSS from index.html */}
        <link rel="stylesheet" id="wp-block-library-css" href="/assets/css/style.min.css" media="all" />
        <link rel="stylesheet" id="clickpaint-style-css" href="/assets/css/style.css" media="all" />
        <link rel="stylesheet" id="elementor-icons-css" href="/assets/css/elementor-icons.min.css" media="all" />
        <link rel="stylesheet" id="elementor-frontend-css" href="/assets/css/frontend-lite.min.css" media="all" />
        <link rel="stylesheet" id="elementor-post-4-css" href="/assets/css/post-4.css" media="all" />
        <link rel="stylesheet" id="elementor-pro-css" href="/assets/css/frontend-lite(1).min.css" media="all" />
        <link rel="stylesheet" id="elementor-post-2-css" href="/assets/css/post-2.css" media="all" />
        <link rel="stylesheet" id="elementor-post-425-css" href="/assets/css/post-425.css" media="all" />
        <link rel="stylesheet" id="google-fonts-1-css" href="/assets/css/google-fonts.css" media="all" />
        <link rel="stylesheet" id="e-animations-css" href="/assets/css/animations.min.css" media="all" />
      </head>
      <body data-rsssl="1" className="home wp-singular page-template page-template-templates page-template-full-width page-template-templatesfull-width-php page page-id-2 wp-theme-viethao elementor-default elementor-kit-4 elementor-page elementor-page-2">
        <header id="masthead" className="site-header">
          <div className="container-header">
            <div className="row justify no-padding">
              <div className="site-branding col-auto">
                <Link href="/" rel="home">
                  <div className="logo">
                    <img src="/assets/images/logo.svg" alt="Việt và Hảo Wedding" />
                  </div>
                </Link>
              </div>
              <div className="site-gallery col-auto">
                <Link className="gallery-page hidden-xs" href="/anh-cuoi">
                  <i className="clkimg-gallery"></i>Xem bộ ảnh cưới
                </Link>
              </div>
              <div className="site-facebook col-auto">
                <Link href="#" rel="facebook">
                  <div className="facebook-flag">
                    <img src="/assets/images/facebook.svg" alt="Facebook" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer id="colophon" className="site-footer text-center">
          <i className="clkimg-couple"></i>
          <p>Hảo &amp; Việt with love</p>
        </footer>

        {/* JavaScript */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-migrate.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/scripts.js" strategy="afterInteractive" />
        <Script src="/assets/js/webpack.runtime.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/webpack-pro.runtime.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/frontend-modules.min.js" strategy="afterInteractive" />

        {/* Elementor Pro Config - must be before frontend.min.js */}
        <Script id="elementor-pro-frontend-config" strategy="afterInteractive">
          {`var ElementorProFrontendConfig = {"ajaxurl":"/wp-admin/admin-ajax.php","nonce":"755b5bf8ec","urls":{"assets":"/assets/elementor-pro/","rest":"/wp-json/"},"i18n":{"toc_no_headings_found":"No headings were found on this page."},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"facebook_sdk":{"lang":"vi","app_id":""},"lottie":{"defaultAnimationUrl":"/assets/elementor-pro/modules/lottie/assets/animations/default.json"}};`}
        </Script>
        <Script src="/assets/js/frontend.min.js" strategy="afterInteractive" />

        <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/core.min.js" strategy="afterInteractive" />

        {/* Elementor Frontend Config - must be before frontend.min(1).js */}
        <Script id="elementor-frontend-config" strategy="afterInteractive">
          {`var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Chia sẻ trên Facebook","shareOnTwitter":"Chia sẻ trên Twitter","pinIt":"Ghim nó","download":"Tải xuống","downloadImage":"Tải hình ảnh","fullscreen":"Toàn màn hình","zoom":"Thu phóng","share":"Chia sẻ","playVideo":"Chơi Video","previous":"Previous","next":"Next","close":"Đóng"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Thiết bị di động","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Máy tính bảng","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.5.3","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"e_import_export":true,"additional_custom_breakpoints":true,"e_hidden_wordpress_widgets":true,"theme_builder_v2":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true,"form-submissions":true},"urls":{"assets":"/assets/elementor/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":2,"title":"Việt và Hảo Wedding","excerpt":"","featuredImage":"/assets/images/image-primary.png"}};`}
        </Script>
        <Script src="/assets/js/frontend.min(1).js" strategy="afterInteractive" />

        <Script src="/assets/js/elements-handlers.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/dialog.min.js" strategy="afterInteractive" />
      </body>

    </html>
  );
}
