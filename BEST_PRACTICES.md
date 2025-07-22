# Reactプロジェクト開発ベストプラクティス

日本企業向けReactプロジェクト開発における推奨プラクティスガイドです。

## 目次

1. [プロジェクト構成](#プロジェクト構成)
2. [コンポーネント設計](#コンポーネント設計)
3. [スタイリング](#スタイリング)
4. [ルーティング](#ルーティング)
5. [テスト戦略](#テスト戦略)
6. [パフォーマンス最適化](#パフォーマンス最適化)
7. [アニメーション](#アニメーション)
8. [開発フロー](#開発フロー)
9. [多言語対応](#多言語対応)
10. [デプロイメント](#デプロイメント)

## プロジェクト構成

### 推奨ディレクトリ構造

```
project-name/
├── src/
│   ├── components/     # 再利用可能なコンポーネント
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── common/     # 共通コンポーネント
│   ├── pages/         # ページコンポーネント
│   │   ├── Home.js
│   │   └── About.js
│   ├── styles/        # スタイルファイル
│   │   ├── components/
│   │   ├── pages/
│   │   └── globals.css
│   ├── utils/         # ユーティリティ関数
│   ├── hooks/         # カスタムフック
│   ├── context/       # Reactコンテキスト
│   ├── App.js         # メインアプリコンポーネント
│   └── index.js       # エントリーポイント
├── public/           # 静的ファイル
├── package.json
└── README.md
```

### パッケージ管理

```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.6.3",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.6.3"
  }
}
```

**ベストプラクティス:**
- 依存関係は最新の安定版を使用
- `homepage: "./"` を設定して相対パスでデプロイ対応
- 不要な依存関係は削除

## コンポーネント設計

### 関数コンポーネント

```jsx
// Good: 関数コンポーネントを使用
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* コンテンツ */}
      </div>
    </nav>
  );
};

export default Header;
```

### プロップスの型安全性

```jsx
// PropTypesまたはTypeScriptを使用
import PropTypes from 'prop-types';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>¥{price.toLocaleString()}</p>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};
```

### コンポーネント分割の指針

- **単一責任の原則**: 1つのコンポーネントは1つの責任のみ
- **再利用性**: 複数箇所で使用する場合はコンポーネント化
- **50行ルール**: 50行を超える場合は分割を検討

## スタイリング

### CSS-in-JS vs 外部CSS

#### Bootstrap使用の場合
```jsx
// Bootstrap + カスタムCSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light custom-header">
    {/* コンテンツ */}
  </nav>
);
```

#### カスタムCSS
```css
/* components/Header.css */
.custom-header {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.custom-header.compact {
  padding: 0.5rem 0;
}
```

### スタイリングのベストプラクティス

1. **BEM命名規則**を採用
```css
.header {}
.header__logo {}
.header__nav {}
.header__nav--active {}
```

2. **CSS Variables**を活用
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: 'Noto Sans JP', sans-serif;
}
```

3. **レスポンシブデザイン**
```css
/* Mobile First */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
```

## ルーティング

### React Router DOM

```jsx
// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
```

### ナビゲーション

```jsx
// Linkコンポーネントを使用
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">ホーム</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/products">製品</Link>
    </li>
  </ul>
);
```

## テスト戦略

### テストファイル配置

```
src/
├── components/
│   ├── Header.js
│   └── Header.test.js
├── pages/
│   ├── Home.js
│   └── Home.test.js
```

### コンポーネントテスト

```jsx
// Header.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  
  expect(screen.getByText('ホーム')).toBeInTheDocument();
  expect(screen.getByText('製品')).toBeInTheDocument();
});
```

### テスト実行

```bash
# テスト実行
npm test

# カバレッジ付きテスト
npm test -- --coverage

# ウォッチモード
npm test -- --watchAll
```

## パフォーマンス最適化

### React.memo

```jsx
import React, { memo } from 'react';

const ProductCard = memo(({ product }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
});
```

### useCallback と useMemo

```jsx
import React, { useCallback, useMemo } from 'react';

const ProductList = ({ products, onProductClick }) => {
  // 関数のメモ化
  const handleClick = useCallback((id) => {
    onProductClick(id);
  }, [onProductClick]);

  // 計算結果のメモ化
  const expensiveProducts = useMemo(() => {
    return products.filter(p => p.price > 10000);
  }, [products]);

  return (
    <div>
      {expensiveProducts.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};
```

### 画像最適化

```jsx
// 遅延読み込み
const LazyImage = ({ src, alt, className }) => (
  <img 
    src={src} 
    alt={alt} 
    className={className}
    loading="lazy"
    decoding="async"
  />
);
```

## アニメーション

### GSAP使用パターン

```jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    gsap.set([section, title], { opacity: 0 });

    gsap.to([section, title], {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      duration: 1,
      stagger: 0.2
    });

    // クリーンアップ
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="animated-section">
      <h2 ref={titleRef}>アニメーションタイトル</h2>
    </section>
  );
};
```

### CSS アニメーション

```css
/* CSS Transitions */
.fade-enter {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}
```

## 開発フロー

### 開発コマンド

```bash
# 依存関係インストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm start

# プロダクションビルド
npm run build

# テスト実行
npm test

# Linting（設定済みの場合）
npm run lint

# 型チェック（TypeScriptの場合）
npm run typecheck
```

### Git Workflow

```bash
# 新機能ブランチ作成
git checkout -b feature/new-feature

# 変更をステージング
git add .

# コミット
git commit -m "feat: add new product catalog component"

# プッシュ
git push origin feature/new-feature
```

### コミットメッセージ規則

```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
style: コードフォーマット
refactor: リファクタリング
test: テスト追加・修正
chore: 雑務（依存関係更新など）
```

## 多言語対応

### i18next セットアップ

```jsx
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ja: {
    translation: {
      "welcome": "ようこそ",
      "products": "製品"
    }
  },
  en: {
    translation: {
      "welcome": "Welcome",
      "products": "Products"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
```

### コンポーネントでの使用

```jsx
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ja')}>JP</button>
    </nav>
  );
};
```

## デプロイメント

### ビルド設定

```json
// package.json
{
  "homepage": "./",
  "scripts": {
    "build": "react-scripts build",
    "build:staging": "REACT_APP_ENV=staging npm run build",
    "build:production": "REACT_APP_ENV=production npm run build"
  }
}
```

### 環境変数

```javascript
// .env.local
REACT_APP_API_URL=https://api.example.com
REACT_APP_GA_ID=GA_TRACKING_ID
```

```jsx
// 使用例
const API_URL = process.env.REACT_APP_API_URL;
```

### デプロイメント前チェックリスト

- [ ] `npm run build` が正常に完了する
- [ ] テストが全て通る (`npm test`)
- [ ] Lintエラーがない (`npm run lint`)
- [ ] 本番環境での動作確認
- [ ] パフォーマンス測定
- [ ] セキュリティチェック

## コード品質管理

### ESLint 設定

```json
// .eslintrc.json
{
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "jsx-quotes": ["error", "prefer-double"]
  }
}
```

### Prettier設定

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## セキュリティベストプラクティス

### XSS対策

```jsx
// Good: Reactは自動的にエスケープ
const SafeComponent = ({ userInput }) => (
  <div>{userInput}</div>
);

// Bad: dangerouslySetInnerHTML は慎重に使用
const UnsafeComponent = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);
```

### APIキー管理

```jsx
// Good: 環境変数使用
const API_KEY = process.env.REACT_APP_API_KEY;

// Bad: ハードコーディング
const API_KEY = "sk-1234567890abcdef"; // NG
```

## まとめ

このベストプラクティスガイドに従うことで、以下のメリットが得られます：

1. **保守性の向上**: 一貫したコード構造
2. **チーム開発の効率化**: 共通の開発規約
3. **バグの削減**: テスト駆動開発とLinting
4. **パフォーマンス最適化**: 適切な最適化手法の適用
5. **セキュリティ強化**: セキュリティベストプラクティスの実装

定期的にこのガイドを見直し、最新のReactエコシステムに合わせて更新していくことが重要です。