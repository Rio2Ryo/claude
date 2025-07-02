
import React from 'react';
import { Link } from 'react-router-dom';

const MVFactory = () => {
  return (
    <div className="container mt-5">
      <section className="hero-section text-center mb-5 p-5 bg-light rounded-3">
        <h1 className="display-4">MVファクトリー</h1>
        <p className="lead">— 太陽光に頼らず、<br />30倍の速さで育つ次世代モジュール。</p>
        <p className="fs-5">MVファクトリーは、<br />食・美容・健康に活用されるマザーベジタブルを、<br />世界最速かつ安定的に育てるために設計された、<br />完全循環型の育成モジュールです。</p>
        <p className="fs-5">太陽光に頼らない「新常識」により、<br />季節や天候に左右されず、最適な生育環境を常に維持。<br />都市部でも、山間部でも、災害地でも、<br />誰でも、どこでも、何度でも、<br />再現可能な育成環境を実現します。</p>
      </section>

      <section className="problem-section mb-5">
        <h2 className="text-center mb-4">かつて“希望”と呼ばれた<br />藻類の養殖は、<br />なぜ道を閉ざされたのか。</h2>
        <p className="fs-5 text-center">かつて、「藻」は未来の資源として世界中の研究者や企業の注目を集めました。<br />CO₂を吸収しながら育ち、食料にも燃料にもなりうるその可能性に、多くの期待が寄せられていました。</p>
        <p className="fs-5 text-center">誰もが、光を与えれば育つと信じ、<br />誰もが、太陽こそが成長の味方だと疑いませんでした。</p>
        <p className="fs-5 text-center">しかし現実には、その“未来の植物”は商業化にたどり着くことはありませんでした。</p>
      </section>

      <section className="limitations-section mb-5 bg-light p-5 rounded-3">
        <h3 className="text-center mb-4">藻の養殖が抱えていた限界</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">天候・季節による育成条件の不安定さ</h5>
                <p className="card-text">日照・気温・湿度の変化で成長速度や品質にムラが生じる</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">開放水槽やタンクでの管理の難しさ</h5>
                <p className="card-text">雑菌や他種混入、腐敗リスクが常に伴う</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">収穫サイクルが長く、人手もかかる</h5>
                <p className="card-text">清掃・採取・水質管理に常に人員が必要</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">広大な土地が必要（自然環境の破壊）</h5>
                <p className="card-text">生産効率が悪いため大量の設備を置く必要がある（弊社比の700倍の土地が必要で、製品になるのは弊社比の5%ほど）</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">多種多様な製品が作れない</h5>
                <p className="card-text">多種多様な製品に必要な、多種多様な藻の株が20種ほどに限られている</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">製造コストが高く、量産に向かない</h5>
                <p className="card-text">単価が高くなりすぎ、食品や化粧品への実用化が進まなかった</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reason-section mb-5">
        <h2 className="text-center mb-4">MVファクトリーが<br />世界で注目される理由</h2>
        <h3 className="text-center mb-4 text-muted">世界最速、最多種生産の秘訣<br />国際特許番号 WO2023234767</h3>
        <p className="fs-5 text-center">MVファクトリーが実現する「約30倍」の育成スピード。<br />その根幹にあるのは、外的環境に依存しない完全制御型の独自開発AI育成システムです。<br />2000種類の個性あるマザーベジタブルを独自AIが管理し、生産を実現。</p>
        <h4 className="text-center mt-5 mb-3">成長を阻むもの、<br />それは太陽光だった</h4>
        <p className="fs-5 text-center">「植物や藻の育成には太陽光が必要である。」<br />誰もが、それを疑うことはありませんでした。<br />しかし、強過ぎる光。夜間は届かない光。<br />天候によって左右される光。<br />太陽光は植物や藻の成長ペースを大きく狂わせていたのです。</p>
        <h4 className="text-center mt-5 mb-3">MOTHER VEGETABLESの声を聞き、<br />優しい光を当てる</h4>
        <p className="fs-5 text-center">そこで私たちは、AIが光をコントロールし、「マザーベジタブルが”光を欲しい”という信号を発した時のみ、光を当てる」という独自の技術を作り出しました。</p>
        <p className="fs-5 text-center">その結果、かつての藻の養殖技術の30倍の速さで、多種多様なマザーベジタブルを製品レベルまで育てることを可能にしたのです。</p>
        <p className="fs-5 text-center">この育成技術は、国際特許「WO2023234767」として保護されており、再現性・汎用性・安全性を備えたグローバル対応型の次世代育成基盤としてすでに実用化されています。</p>
      </section>

      <section className="innovation-section mb-5 bg-light p-5 rounded-3">
        <h2 className="text-center mb-4">MVファクトリーの革新</h2>
        <p className="fs-5 text-center">MVファクトリーは、これらのすべての課題を根本から見直し、<br />次世代の育成インフラとして誕生しました。</p>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>MVファクトリー</th>
                <th>従来の藻養殖</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>育成環境</td><td>〇完全閉鎖型・人工光制御</td><td>✕開放型・天候依存</td></tr>
              <tr><td>光源</td><td>〇LRD＋環境制御技術</td><td>✕太陽光のみ</td></tr>
              <tr><td>育成スピード</td><td>◯約30倍の速度で成長</td><td>✕遅い（週〜月）</td></tr>
              <tr><td>水質管理</td><td>◯密閉循環で常に清浄</td><td>✕腐敗・雑菌混入リスク</td></tr>
              <tr><td>人件費</td><td>◯AIによる自動制御・省人化運用</td><td>✕高コスト（常時管理）</td></tr>
              <tr><td>展開可能エリア1</td><td>◯ビルや学校など屋内でも可能</td><td>✕限定（温暖地域中心）</td></tr>
              <tr><td>展開可能エリア2</td><td>◯都市・山間・僻地・被災地も可</td><td>✕広い太陽の光の当たる場所が必要</td></tr>
              <tr><td>商業化の実現性</td><td>◯実用レベルで稼働中</td><td>✕低（試験・研究段階）</td></tr>
              <tr><td>取り扱い種類</td><td>◯2,000種類</td><td>✕数種類〜数十種類</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="location-section mb-5">
        <h2 className="text-center mb-4">設置箇所を選ばない<br />MVファクトリー</h2>
        <p className="fs-5 text-center">MVファクトリーは都市の屋上でも、山間部でも、被災地でも機能する再現型モジュール。<br />しかも、天然芝の約700倍ものCO₂を吸収し、空気をきれいにします。</p>
        <h3 className="text-center mb-4">設置可能な場所の例</h3>
        <ul className="list-unstyled text-center row">
          <li className="col-md-4 col-lg-2 mb-3">学校</li>
          <li className="col-md-4 col-lg-2 mb-3">ビル屋上</li>
          <li className="col-md-4 col-lg-2 mb-3">被災地や物流が<br />途絶えたエリア</li>
          <li className="col-md-4 col-lg-2 mb-3">地下シェルター</li>
          <li className="col-md-4 col-lg-2 mb-3">耕作放棄地や廃校</li>
          <li className="col-md-4 col-lg-2 mb-3">水上、砂漠、極寒地域など、通常の農業が不可能な場所</li>
        </ul>
        <p className="fs-5 text-center">「育たない場所」を「育つ場所」に。<br />それがMVファクトリーの力です。</p>
      </section>

      <section className="projects-section mb-5 bg-light p-5 rounded-3">
        <h2 className="text-center mb-4">Algae International Japanが推進する<br />国内外の<br />連携プロジェクト</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">【導入実績１】<br />水産庁の承認、伊豆の河津港に設置</h3>
                <p className="card-text">2025年4月4日、「海業の推進に取り組む地区」として認められた静岡県河津町の下河津漁港に、MVファクトリーが建設されることが決定しました。（河津町＝伊豆の踊り子の舞台となり、河津桜が有名）</p>
                <p className="card-text">MVファクトリーで育てられる様々なタイプのマザーベジタブルが、人々の食や、海水温が上がり餌が枯渇してしまった港に栄養を与えます。</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">【導入実績２】<br />マレーシア政府との共同事業<br />東京ドーム40個分の土地で<br />MVファクトリーの建設がスタート</h3>
                <p className="card-text">2025年3月より、マレーシア政府と共同し、MVファクトリーの建設がスタート。約200ヘクタール、東京ドーム40個分の広さの土地で開発が進み、人口増加による食料問題や、経済成長による環境汚染問題を抱えるマレーシアにとって希望の光となっている。</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">【技術提供】<br />マレーシアのマラヤ大学、<br />シンガポールのシンガポール大学、<br />イギリスのノッティンガム大学へ提供</h3>
                <p className="card-text">MVファクトリーやMother Vegetablesに関する研究と実用化において、Algae International Japanグループは世界的な学術機関との連携を進めています。</p>
                <ul className="list-unstyled">
                  <li>マレーシア　マラヤ大学（University of Malaya）</li>
                  <li>シンガポール　シンガポール大学（National University of Singapore）</li>
                  <li>イギリス　ノッティンガム大学（University of Nottingham）</li>
                </ul>
                <p className="card-text">この学術機関に対して私たちは育成技術の提供と素材応用の知見を技術支援という形で行っています。</p>
                <p className="card-text">この連携により、３つの大学ではMother Vegetablesを活用した新素材の開発、医療・食品分野への応用研究が進められ、アジア・欧州を中心とした国際的な研究・展開ネットワークの基盤となりつつあります。</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">【業務提携】<br />国内旅行業界最大手 JTB総研と業務提携</h3>
                <p className="card-text">Algae International Japanグループ（子会社：全国姉妹漁協推進協議会株式会社）は、JTB総合研究所と業務提携を結び、観光×環境×食をテーマにした新しい循環型ツーリズムの構築に取り組んでいます。</p>
                <p className="card-text">この連携では、MVファクトリーによる育成体験を取り入れた、新しい日本のサステナブルツーリズムや体験教育プログラムの共同開発を進行中。<br />未来の食や健康への関心が高まる中で、「見る」「知る」「育てる」を通じて学べる旅の新しい形を提案しています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="next-step-section mb-5">
        <h2 className="text-center mb-4">NEXT STEP</h2>
        <h3 className="text-center mb-4 text-muted">実現間近な未来の姿</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">一家に一台のMVファクトリーへ</h4>
                <p className="card-text">MVファクトリーは、今後「一家に一台の時代」を見据えています。</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>自宅でオーガニックな食を育てられる</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>日常的にCO₂を吸収しながら健康を手に入れる</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>災害時や物流停止時にも、食の安全を自ら確保</li>
                </ul>
                <p className="card-text">分散型の育成が進めば進むほど、地球も人も健やかに循環していく未来が現実になります。</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">MVファクトリーが解決する課題</h4>
                <p className="card-text">MVファクトリーはマザーベジタブルを育成するだけの装置ではありません。</p>
                <p className="card-text">「食と健康と地球の安心」を誰もが得られる未来を、構造から創っていくプロジェクトです。</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i><strong>食料問題の解決</strong><br />→ 地域に依存せず、どこでも育てられる。飢餓と浪費の両方を減らします。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i><strong>食料自給率の向上</strong><br />→ 未来の農業は「どこで作るか」ではなく「誰でも育てられる」へ。</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i><strong>国民皆保険“食”の実現</strong><br />→ 医療と同じように、「健康を支える食」が全員に保障される社会へ。</li>
                </ul>
                <p className="card-text">MVファクトリーはそのインフラになります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section text-center mb-5 p-5 bg-primary text-white rounded-3">
        <h2 className="mb-4">MVファクトリー それは<br />あなたが“育てる”ことができる<br />一生続くライフインフラ</h2>
        <p className="fs-5">約2,000種類の個性あるマザーベジタブルの中から、<br />目的に応じて最適なものを選び抜き、<br />食品や美容原料、飼料、肥料など、さまざまなかたちに展開しています。<br />それらを世界最速かつ安定的に育てる仕組みについてはこちら。</p>
        <Link to="/sustainable-vision" className="btn btn-light btn-lg">Sustainable Vision</Link>
      </section>
    </div>
  );
};

export default MVFactory;
