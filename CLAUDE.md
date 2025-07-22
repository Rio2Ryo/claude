# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Conversation Guidelines

- 日本語での会話を優先してください
- コードのコメントは英語で記述してください

## Repository Overview

This repository contains multiple React-based web projects for Japanese companies, primarily focused on sustainable/algae products. The main projects are:

1. **algae-international-japan/** - Main AIJ website (React + Bootstrap)
2. **aij_web/** - Alternative AIJ website with mixed React/static HTML architecture
3. **terraplus-clone/** - Terra Plus website clone with animations (React + GSAP)

## Common Development Commands

All React projects use Create React App. From within each project directory:

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start

# Build for production (outputs to ./build)
npm run build

# Run tests
npm test

# Run tests in watch mode
npm test -- --watchAll
```

## Architecture Patterns

### React Project Structure
```
project-name/
├── src/
│   ├── components/    # Reusable components
│   ├── pages/        # Page components
│   ├── styles/       # CSS files
│   ├── App.js        # Main app component
│   └── index.js      # Entry point
├── public/           # Static assets
└── build/           # Production build (generated)
```

### Key Architectural Decisions

1. **Routing**: All projects use React Router DOM for client-side routing
2. **Styling**: CSS files in src/styles, some projects use Bootstrap
3. **Language Support**: Multi-language switching implemented in some projects (Japanese/English)
4. **Build Tool**: Create React App without ejection
5. **Deployment**: Built with relative paths (homepage: "./") for flexible deployment

## Current Issues to Be Aware Of

Based on documentation in aij_web/:

1. **Image Display Problems**: Images not loading properly from URLs
2. **Navigation Issues**: Some links non-functional or incorrect
3. **Language Switching**: Implementation incomplete or broken
4. **Mixed Architecture**: aij_web contains both React SPA and static HTML files
5. **Missing Content**: Some pages showing as unavailable (404)

## Project-Specific Notes

### algae-international-japan
- Uses Bootstrap 5.3.3 for styling
- Clean React implementation
- Currently being modified (git status shows changes)

### aij_web
- Contains extensive documentation about site issues
- Mixed React and static HTML architecture
- Has analysis documents about dotpb.jp migration

### terraplus-clone
- Heavy animation focus using GSAP
- Uses Locomotive Scroll for smooth scrolling
- Complex animation sequences in components

## Development Guidelines

1. **Component Creation**: Follow existing patterns in components/ folder
2. **Routing**: Add new routes in App.js using React Router
3. **Testing**: Place test files next to components with .test.js extension
4. **Building**: Always test production builds locally before deployment
5. **Git**: Current branch is main, changes are uncommitted

## Development Philosophy

### Testing Approach
- テストファイルは実装と同じディレクトリに配置 (.test.js)
- 新機能実装時は、まずテストケースの作成を検討
- React Testing Libraryを使用したコンポーネントテスト

### Code Quality
- ESLintの警告は修正してからコミット
- コンポーネントは再利用性を考慮して設計
- 不要なconsole.logは削除

## Important Files to Review

- `package.json` - Dependencies and scripts
- `src/App.js` - Main routing configuration
- `src/index.js` - Application entry point
- Project-specific documentation in aij_web/*.md files