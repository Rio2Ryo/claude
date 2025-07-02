
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <section className="hero-section text-center mb-5 p-5 bg-light rounded-3">
        <h1 className="display-4">Oldest Plant, Newest Power.</h1>
        <h2 className="lead">“地球のはじまりの植物” で世界を満たす。</h2>
        <p className="fs-5">私たちは、食、美容、健康、 そして環境までを支える あたらしい循環のかたちを届けています。</p>
        <p className="fs-5">「足りない」を“奪い合う”時代から、 “育てて満たす”時代へ。 あなたと地球がともに満たされる仕組みを、 私たちはかたちにしていきます。</p>
      </section>

      <section className="mother-vegetables-section mb-5">
        <h2 className="text-center mb-4">What is Mother Vegetables?</h2>
        <h3 className="text-center mb-4 text-muted">― それが育つほど、あなたも地球も満たされる。</h3>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>マザーベジタブルは、食、美しさ、 そして環境をも支える、未来の恵みです。</p>
            <p>あるものは食となり、あるものは美を整え、あるものは空気を浄化して地球を癒す。 人と地球をケミカルから解き放ち、 オーガニックな恵みで健やかさを育てながら、CO₂削減にも貢献します。</p>
            <p>30億年にわたり姿を保ち続けてきた、あらゆる生命の起源となる “地球のはじまりの植物たち”が、これからの生き方を変えていきます。</p>
            <Link to="/mother-vegetables" className="btn btn-primary">詳しくはこちら</Link>
          </div>
          <div className="col-md-6">
            {/* <img src="/path/to/mother-vegetables-image.jpg" alt="Mother Vegetables" className="img-fluid rounded" /> */}
            <div className="bg-secondary rounded" style={{ height: '300px' }}></div> {/* Placeholder */}
          </div>
        </div>
      </section>

      <section className="mv-factory-section mb-5 bg-light p-5 rounded-3">
        <h2 className="text-center mb-4">What is MVファクトリー?</h2>
        <h3 className="text-center mb-4 text-muted">― 太陽光に頼らず、30倍の速さで育つ次世代モジュール。</h3>
        <div className="row align-items-center flex-row-reverse">
          <div className="col-md-6">
            <p>MVファクトリーは、食・美容・健康に活用されるMother Vegetablesを、 世界最速かつ安定的に育てるための再現可能な育成環境です。</p>
            <p>太陽光に頼らない「新常識」で、季節や天候にも左右されず、最適な生育条件を常に保ちます。 都市部や未開発地にも展開でき、限られたスペースでの効率的な生産が可能。</p>
            <p>従来の約30倍という驚異的な育成スピードと、国際特許取得済の技術により、 MVファクトリーは持続可能な供給システムの新しい基準となっています。</p>
            <Link to="/mv-factory" className="btn btn-primary">詳しくはこちら</Link>
          </div>
          <div className="col-md-6">
            {/* <img src="/path/to/mv-factory-image.jpg" alt="MV Factory" className="img-fluid rounded" /> */}
            <div className="bg-secondary rounded" style={{ height: '300px' }}></div> {/* Placeholder */}
          </div>
        </div>
      </section>

      <section className="departments-section mb-5">
        <h2 className="text-center mb-4">を支える2つの部門</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">マザーベジタブル研究開発部（R&D）</h3>
                <p className="card-text">Mother Vegetablesの栽培技術や 用途素材の研究・開発を行い、 育成モジュールMVファクトリーの 設計や改良も担います。</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">マザーベジタブル推進事業部</h3>
                <p className="card-text">Mother Vegetablesを社会に届ける部門で、 商品展開や育成モジュールの 建築・導入も行います。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section mb-5 bg-light p-5 rounded-3">
        <h2 className="text-center mb-4">Algae International Japanが推進する 国内外の連携プロジェクト</h2>
        <p className="text-center fs-5">Algae International Japanは、日本の公的機関や海外政府・大学とも連携し、 研究・開発・社会実装を進めています。 国境を越えた協働体制が、 Mother Vegetablesのグローバルな可能性を支えています。</p>
        <div className="text-center">
          <Link to="/sustainable-vision" className="btn btn-primary">詳しくはこちら</Link>
        </div>
      </section>

      <section className="brand-story-section mb-5">
        <h2 className="text-center mb-4">あなただけの ブランドを育てる場所。</h2>
        <h3 className="text-center mb-4 text-muted">Algae International Japanに込めた想い</h3>
        <p className="text-center fs-5">マザーベジタブルがあれば、 あなた好みの“食”も“美”も、“未来の暮らし”だってつくれる。</p>
        <p className="text-center fs-5">Algae International Japan（ドットピービー）は、そんな自由でオーガニックな “あなただけのプライベートブランド（Private Brand）”のはじまりです。</p>
        <p className="text-center fs-5">マザーベジタブルを選ぶこと、それは、 あなたの健康と地球の未来を守る確かな一歩です。</p>
        <div className="text-center">
          <Link to="/sustainable-vision" className="btn btn-primary">サステナブルな取り組みについてはこちら</Link>
        </div>
      </section>

      <section className="shop-section text-center mb-5 p-5 bg-primary text-white rounded-3">
        <h2 className="mb-4">あなたにも地球にも優しい マザベジをチェックする</h2>
        <p className="fs-5">マザーベジタブルから生まれた、 Algae International Japanだけの特別なアイテムを揃えました。</p>
        <p className="fs-5">その選択が、あなたの健康を支えるだけでなく CO2削減や環境保護につながります。</p>
        <Link to="/shop" className="btn btn-light btn-lg">マザベジshopページはこちら</Link>
      </section>
    </div>
  );
};

export default Home;
