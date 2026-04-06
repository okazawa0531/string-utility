# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# 依存パッケージのインストール
npm install

# ビルド（TypeScript → dist/）
npm run build

# テスト
npm test

# 特定のテストを実行
npx jest --testPathPattern=string_utils

# Lint
npm run lint
```

## Architecture

```
src/
  string_utils.ts   # すべてのユーティリティ関数の実装
  string_utils.test.ts  # 各関数のユニットテスト
  index.ts          # 公開エクスポートのエントリーポイント
REFERENCE.md        # 関数リファレンス（日本語）
```

- すべてのユーティリティ関数は `src/string_utils.ts` に実装し、`src/index.ts` から再エクスポートする構成。
- コーディングスタイルは [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html) に準拠。
- 関数を追加した場合は `src/index.ts` のエクスポートと `REFERENCE.md` も合わせて更新する。
