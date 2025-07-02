
import React from 'react';
import { Link } from 'react-router-dom';

const MotherVegetables = () => {
  return (
    <div className="container mt-5">
      <section className="main-section text-center mb-5 p-5 bg-light rounded-3">
        <h1 className="display-4">MOTHER VEGETABLES</h1>
        <h2 className="lead">— それが育つほど、あなたも地球も満たされる。</h2>
        <p className="fs-5">約30億年に渡り姿を保ち続けてきた、「地球のはじまりの植物」</p>
        <p className="fs-5">——それが、マザーベジタブル（通称：マザベジ） 。</p>
        <p className="fs-5">私たちは、その中でも用途に応じて約2,000種類のタイプを選別・培養し、食・美容・環境・医療・工業（生物や地球にノーダメージの製品）など多分野に展開可能な素材として育てています。</p>
        <p className="fs-5">マザーベジタブルは、光合成によってCO₂を吸収しながら成長し、化学合成や農薬に頼らずとも、純粋で栄養価の高い恵みを次々に生み出します。</p>
        <p className="fs-5">パウダー・オイル・エキス・濾材・バイオマスとして、姿を変え、人と動植物、そして地球そのものに貢献できる。</p>
        <p className="fs-5">それが、マザーベジタブル。「地球のはじまりの植物」が、あなたと地球を育みます。</p>
      </section>

      <section className="usage-section mb-5">
        <h2 className="text-center mb-4">世界最速で育つMOTHER VEGETABLESの活用方法</h2>
        <h3 className="text-center mb-4 text-muted">— お金があっても食べ物が買えない時代への提案</h3>
        <p className="fs-5 text-center">マザーベジタブルは、用途に応じて加工・抽出され、“食”や“美”、そして“医”の領域にまで応用されていく、自由な素材です。ここではその一部をご紹介します。</p>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">食品へと育つマザーベジタブル</h3>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>毎日の食卓に、オーガニックな恵みを。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>グルテンフリー＆高タンパク食品に育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>スムージーやパンケーキミックス、ヘルシーな焼き菓子に使用</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>ナチュラルな天然着色料に育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>米国で禁止された人工着色料の代替となる、天然着色料に</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>ビーガン・ベジタリアンにも対応の栄養食に育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>鉄分やカルシウム、ビタミンB群などを補う素材としてスープやバーに配合</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>妊婦さんや子どもにも安全なパーフェクト栄養食に育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>無添加・非アレルゲンの栄養源として安全性が高いと評価</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">化粧品や医薬品へと育つマザーベジタブル</h3>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>肌にも、髪にも、そして内側からも。オーガニックケアの未来へ。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>化粧品に多用される多種にわたる植物性オイルの原料が育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>持続可能性を意識するスキンケアブランドでの導入が進む</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>地球環境破壊防止におけるEU規制に対応できる代替成分の原料が育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>EUで使用禁止されはじめた化粧品原料や医薬品原料の代替品の生成が可能</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>世界初の超高純度オーガニックシリカに育つ（医薬品原料規格、医薬部外品原料規格の生成が可能）</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>肌の弾力回復・髪の強化などに貢献、ナチュラルエイジングケアとして高評価</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">動植物向け肥料や飼料に育つマザーベジタブル</h3>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>地球とともに、生態系も育てる。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>ペット向け栄養補助素材へと育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>犬や猫の腸内フローラを整えるサプリメント原料として活用。便臭・口臭・皮膚状態の改善、シニア期の健康維持にも。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>家畜、水産魚貝類向け飼料へと育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>豚・鶏・魚・貝などの餌に配合することで、消化吸収効率や免疫力を高め、健康に成長する効果が期待される。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>オーガニック肥料へと育つ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>微生物を活性化させる天然有機素材として、農地への還元が可能。土壌を傷めず、連作障害の軽減にも寄与。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>海洋生態系の回復支援</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>磯焼けが進んだ沿岸部に投入することで、海藻の再生や魚の餌資源として機能。生態系の循環を助け、漁業資源の再構築にもつながる。</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">地球にノーダメージ工業製品に育つマザーベジタブル</h3>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>全てをゼロに。CO2・公害・人体汚染も全てゼロ。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>CO2ゼロ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>通常、生産過程で発生するCO2を、逆に生産過程でCO2を吸収。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>公害ゼロ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>マザーベジタブル由来の工業製品を使えば公害リスクもゼロに。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>人体汚染ゼロ</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>マザーベジタブル由来の工業製品なら人体や動物の体内汚染もゼロに。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>製造時のエネルギーゼロ（一次、二次エネルギーゼロ）</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>製造に石油やガソリンなどに頼らない、一次、二次エネルギーをゼロに。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>地球にノーダメージ工業製品な例</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>半導体、塗料、ガラス製品、着色料、ゴム製品、太陽光パネルなどの原料をノーダメージ工業製品に</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="safety-section mb-5 p-5 bg-light rounded-3">
        <h2 className="text-center mb-4">高栄養価だけを謳うのはだれでも簡単。</h2>
        <h2 className="text-center mb-4">マザーベジタブルは、安全性と環境保護も実現。</h2>
        <p className="fs-5 text-center">高栄養価の食品や高純度の物を作るためには、農薬を使用したり、薬品を使用して洗浄や化学的に抽出するなどの方法で作られてきました。そのため、「高栄養価」と引き換えに、薬品残りや不純物残りが発生するという問題がありました。</p>
        <p className="fs-5 text-center">一方で、マザーベジタブルは完全室内養殖で農薬なども一切使用しないからこそ、高栄養価でありながら不純物がほとんど入らない新しい恵みを作り出すことが可能になりました。</p>
        <p className="fs-5 text-center">さらには、マザーベジタブルが育つ過程で多くのCO2を吸収するので、マザーベジタブルを選ぶことが、地球環境保護の意思表示にもつながります。</p>
      </section>

      <section className="definition-section mb-5">
        <h2 className="text-center mb-4">MOTHER VEGETABLESの定義</h2>
        <p className="fs-5 text-center">以下の条件を満したものだけが「マザーベジタブル」としてあなたの元に届きます。</p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title text-center">養殖方法と成分の条件</h3>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>単一成分を強調せず、植物全体のシナジーを尊重した構成</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>農薬などを使用せず、人体や動物の体内汚染をしない</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>施設に微細プラスチックや金属が混ざらない</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>太陽光によって死滅した不純物などが混ざらない</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>完全室内で育てられる（開放型、オープンボンドではない）</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title text-center">地球環境側面の条件</h3>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>完成した製品を使用する際に 環境に負荷を与えない（ノーダメージ製品）</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>土壌汚染をしない設備</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>養殖時に一次、二次エネルギーを使用しない（石油、ガソリン等未使用）</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>育てるとカーボンマイナスを実現できる効率性（通常の10倍〜70倍の速さで育つなども含む）</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>育てる際に環境負荷がかからない</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="fs-5 text-center">作れば作るほど、環境を守ることに繋がり、人体汚染や不純物が混ざらないものをマザーベジタブルと呼びます。</p>
      </section>

      <section className="selection-section text-center mb-5 p-5 bg-primary text-white rounded-3">
        <h2 className="mb-4">約2,000種類の個性を見極めて選び抜く</h2>
        <p className="fs-5">約2,000種類の個性あるマザーベジタブルの中から、目的に応じて最適なものを選び抜き、食品や美容原料、飼料、肥料など、さまざまなかたちに展開しています。それらを世界最速かつ安定的に育てる仕組みについてはこちら。</p>
        <Link to="/mv-factory" className="btn btn-light btn-lg">MVファクトリーについて</Link>
      </section>
    </div>
  );
};

export default MotherVegetables;
