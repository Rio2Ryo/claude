import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div id="footer_section_1">
        <a href="/about-us">私たちについて</a>
        <a href="#" onClick={() => alert('Coming Soon!')}>製品</a>
        <a href="/evidences">証拠</a>
        <a href="/sustainability">持続可能性</a>
        <a href="/news">ニュース</a>
      </div>
      <div id="footer_section_2">
        <div id="footer_logo_wrap">
          <a href="/">
            <img src="/Images/Assets/Logo/Terra_Plus_white_logo.png" alt="Logo" />
          </a>
        </div>
        <div id="copyright_notice">
          <span>© TerraPlus Co., Ltd.</span>
        </div>
        <div id="sub_navigation">
          <a href="/privacy-policy">プライバシーポリシー</a>
          <a href="/term-of-use">利用規約</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
