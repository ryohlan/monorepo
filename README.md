# React monorepo

yarn workspace を使ってmonorepo化。
yarn workspaceはsymlinkを使ってローカルモジュールを読み込むが、react-nativeのmetroはsymlinkに対応していないのでhaul ( https://github.com/callstack/haul ) を使ってバンドルしている。

- core
		コンポーネントとかStateとか共通で使うもの
	 SSRはNext.jsに任せるが、ルーティングはreact-navigationのWebを使う
		styled-componentsとreact-native, react-native-webを使ってコンポーネントを共通化
- web
		next.jsを使ったSSRアプリケーション
		ルーティングをreact-navigationに任せるのでnext.js必須では無いが、初期設定の楽さと_document, _app, getInitalPropsなどの使いやすさ、無いより自分が慣れてる。
- mobile
		react-nativeを使ったネイティブアプリケーション
		metroではなくhaul
    
    
