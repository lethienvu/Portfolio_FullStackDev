import bestEmp2024 from '../assets/bestEmployee/bestEmp2024.jpeg';
import bestEmpBanner from '../assets/bestEmployee/bestEmp_Banner.jpeg';

const ja = {
  // Navbar
  nav: {
    home: "ホーム",
    experience: "経歴",
    technical: "技術力",
    projects: "製品とソリューション",
    contact: "連絡先",
    hire: "vCardを保存",
  },

  // Footer
  footer: {
    built: "React + Viteで構築されています。",
    aiNote: "Lê Thiên VũによってAI（Claude / Gemini）の支援を受けて開発されました。"
  },

  // Clients & Products
  clientsProducts: {
    title: 'クライアント',
    subtitle: '信頼されたパートナー',
    clients: '主なクライアント',
    products: '開発された製品',
  },

  // Hero
  hero: {
    badge: "#OpenToWork",
    role: "Fullstack Software Engineer - Technical Implementation Leader",
    roleSubtitle: "Implementation & Technical Leader · User Interface/User Experience (UI/UX) Design · Frontend Developer · Backend Developer · Business Analyst · Enterprise Resource Planning (ERP) Consultant",
    desc: "約<strong>3年間</strong>の経験を持つ<strong>フルスタックエンジニアおよび技術導入リーダー</strong>として、私は高度なプログラミング能力と直接的なプロジェクト導入の経験というユニークな組み合わせを持っています。これまで、<strong>14,000人以上のユーザー</strong>にサービスを提供する<strong>10社以上の大企業</strong>向けに、人事（HR）システムを管理および導入して成功を収めてきました。プロジェクトのライフサイクル全体を網羅する包括的な考え方と、リソースを最適化するために<strong>マルチエージェントAI</strong>をワークフローに深く統合する能力により、常にプロジェクトの効率を最大限に引き出します。私は、持続可能な価値と優れたソフトウェアソリューションを共に創造するために、長期的なコミットメント（3〜5年）で文化的に適合する企業を探しています。",
    stats: {
      exp: "3年以上の経験",
      users: "14,000+ ユーザー",
      faster: "AIにより200%高速化",
    },
    cta: {
      projects: "プロジェクトを見る",
      contact: "vCardを保存",
    },
    card: {
      title: "フルスタック開発者 & テックリード",
      contactBtn: "vCardを保存",
    },
  },

  // Experience
  experience: {
    sectionLabel: "職歴",
    title: "キャリアタイムライン",
    subtitle: "VIET TIN SOFTWAREでのプロジェクト管理・導入リーダー、およびソフトウェア開発・システムアーキテクチャ。<strong>14,000人以上</strong>のエンドユーザーにサービスを提供する<strong>10社以上</strong>の大企業クライアント向けに、エンドツーエンドのHRエコシステムを提供しました。",
    clientsLabel: "主要クライアント",
    jobs: [
      {
        period: "06/2023 – 現在",
        role: "プロジェクト管理 & 導入リーダー",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        companyDesc: "数万人の従業員にサービスを提供するParadise HRエコシステムの開発企業。",
        current: true,
        highlights: [
          "エンドツーエンドの導入: <strong>10社以上の大企業クライアント</strong>（Lotte ~3,000名、Nidec ~4,000名、Detmold ~3,000名、Tripod ~4,000名など）向けのParadise HRソフトウェアのフルライフサイクル導入を調整しました。合計で<strong>14,000人以上</strong>のエンドユーザーにサービスを提供するシステムの管理に成功しました。",
          "ビジネスから技術への要件定義: <strong>150以上の複雑な人事ビジネスルール</strong>（コアHR、勤怠管理、給与計算、社会保険、従業員セルフサービス、トレーニング、KPI評価、採用など）を正確な技術仕様に変換し、要件のギャップを<strong>20〜30％</strong>効果的に削減しました。",
          "プロジェクトのガバナンスとデリバリー: リソースの割り当てを最適化し、<strong>90％のプロジェクト成功率</strong>を維持しました。初期予算の<strong>±5％</strong>以内に厳密に収めながら、複雑なモジュールを一貫して<strong>15〜20日</strong>（標準の20〜25日を上回る）で納品しました。",
          "品質保証とクライアントとの関係: 給与計算のピーク期間中に<strong>90〜95％</strong>のシステムの安定性を達成し、クライアントが手動の管理ワークフローを最大<strong>50％</strong>削減できるように支援しました。これは、<strong>100％のクライアント定着率</strong>に直接貢献しました。",
        ],
        kpis: [
          { value: "14,000+", label: "エンドユーザー" },
          { value: "90%+", label: "成功率" },
          { value: "100%", label: "クライアント定着率" },
        ],
        tags: ["Vanilla JavaScript", "SPA Framework", "SQL Server", "Virtual Scrolling", "Java", "PWA", "UI/UX", "Design System", "Business Analysis", "Agile/Scrum"],
      },
      {
        period: "2024",
        role: "年間最優秀従業員 2024",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: ["大企業パートナー向けのParadise HRの成功裡の導入と、製品エコシステム全体の品質向上に対する多大な貢献により、2024年の年間最優秀従業員として表彰されました。"],
        kpis: [],
        tags: ["Employee of the Year", "2024", "Award"],
        images: [bestEmp2024, bestEmpBanner],
      },
      {
        period: "08/2023 – 06/2024",
        role: "ソフトウェア開発 & システムアーキテクチャ",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: [
          "カスタムSPAフレームワークの開発: Vanilla JavaScriptを使用して、独自のシングルページアプリケーション（SPA）フレームワークを構築しました。重い依存関係を排除し、1秒未満の初期読み込み時間と<strong>バンドルサイズの40％削減</strong>を達成しました。",
          "高性能なUIエンジニアリング: 最小限のメモリフットプリントで<strong>10,000以上のノードを60fpsでスムーズに</strong>レンダリングできる複雑なコンポーネント（仮想スクロール、再帰的ツリービュー）を設計しました。",
          "フルスタックエコシステムのオーナーシップ: Paradise HRエコシステムと「Vào Ca」モバイルウェブアプリの開発を主導しました。同時リクエストの多いシフト管理ロジックを最適化し、数千回の毎日のチェックインにおいて<strong>100％のデータ整合性</strong>を確保しました。",
          "データベースのアーキテクチャと最適化: 何百万もの監査ログと大規模な人事データセットを管理するための堅牢なSQL Serverスキーマを設計しました。T-SQLクエリとストアドプロシージャを最適化し、複雑なレポートの生成時間を<strong>数分から数秒</strong>へと劇的に短縮しました。",
        ],
        kpis: [],
        tags: ["Vanilla JavaScript", "SQL Server", "Performance Optimization", "Design System", "PWA", "Java"],
      },
      {
        period: "06/2023 – 08/2023",
        role: "インターン ソフトウェアエンジニア",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: ["エンタープライズシステムアーキテクチャとソフトウェア開発ライフサイクルを学びました。", "Paradise HRエコシステムのコア機能の開発とバグの修正を支援しました。"],
        kpis: [],
        tags: ["JavaScript", "Java", "SQL", "HTML/CSS"],
      },
      {
        period: "06/2019 – 11/2028",
        role: "ソフトウェアエンジニアリング学生",
        company: "サイゴン大学 (SGU)",
        companyDesc: "ソフトウェアエンジニアリング学士",
        current: false,
        highlights: ["コンピュータサイエンスの基礎、データ構造、アルゴリズムを習得しました。", "ウェブ、モバイル、分散システムの専門プロジェクトを完了しました。"],
        kpis: [],
        tags: ["Computer Science", "Software Engineering", "Algorithms"],
      },
    ],
  },

  // Tech Deep-Dive
  tech: {
    sectionLabel: "エンジニアリングの深さ",
    title: "技術的な詳細",
    subtitle: "エンタープライズ規模の実際の運用環境に適用された詳細な手法とアーキテクチャ。",
    cards: [
      {
        icon: "frontend",
        title: "フロントエンド開発",
        desc: "Vanilla JavaScriptを使用して独自のシングルページアプリケーション（SPA）フレームワークを開発し、1秒未満の初期読み込み時間と40％のバンドルサイズ削減を達成しました。<strong>10,000以上</strong>のノードを<strong>60fps</strong>でスムーズに処理するための仮想スクロールを設計しました。",
        skills: ["Vanilla JavaScript", "React", "SPA Architecture", "Virtual Scrolling", "State Management"],
        logos: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        ],
        metrics: [
          { value: "60fps", label: "パフォーマンス" },
          { value: "-40%", label: "バンドルサイズ" },
          { value: "10,000+", label: "DOMノード" },
        ],
      },
      {
        icon: "backend",
        title: "バックエンド開発",
        desc: "数百万のレコードを含む監査ログテーブルのためにSQL Serverを最適化しました（パーティションテーブル、カバリングインデックス）。<strong>100％</strong>のデータ整合性を保証するRESTful APIと複雑なビジネスロジックを設計しました。",
        skills: ["Java", "SQL Server", "REST API", "Database Optimization", "High Concurrency"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"],
        metrics: [
          { value: "95%", label: "クエリの高速化" },
          { value: "1,000,000+", label: "監査行" },
          { value: "100%", label: "データの整合性" },
        ],
      },
      {
        icon: "uiux",
        title: "ユーザーインターフェース/ユーザーエクスペリエンス（UI/UX）デザイン",
        desc: "複雑な企業資源計画（ERP）システム向けにユーザーエクスペリエンスを最適化するモダンなインターフェースを設計しました。使いやすさ、論理的なワークフロー、およびモバイルウェブ用のプログレッシブウェブアプリ（PWA）の標準に重点を置いています。",
        skills: ["Figma", "User Flow", "Responsive Design", "Wireframing", "PWA"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"],
        metrics: [
          { value: "100%", label: "レスポンシブ" },
          { value: "PWA", label: "オフラインモード" },
          { value: "3+", label: "主要システム" },
        ],
      },
      {
        icon: "techlead",
        title: "テクニカルリーダーシップ & プロジェクト管理",
        desc: "技術チームを率いて、<strong>10社以上</strong>の大企業（<strong>14,000以上</strong>のユーザー）向けにParadise HRエコシステムを導入しました。複雑なビジネスルールを技術仕様に変換し、予定より<strong>15〜20％</strong>早く納品しました。",
        skills: ["Agile/Scrum", "System Architecture", "Requirement Analysis", "Team Leadership"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg"],
        metrics: [
          { value: "14,000+", label: "エンドユーザー" },
          { value: "+20%", label: "より早い納品" },
          { value: "10+", label: "多国籍企業" },
        ],
      },
      {
        icon: "ai",
        title: "AI統合 & パフォーマンス最適化",
        desc: "深いAIの統合を活用して開発ワークフローを最適化しています。LLMとAI駆動ツールを使用して開発プロセスを自動化し、生産性を<strong>200％</strong>向上させ、技術的なエラーを最小限に抑えています。",
        skills: ["AI Integration", "Agent Skills", "Agent Henes", "Prompt Engineering", "Workflow Automation", "Claude/Gemini API"],
        logos: [
          'https://cdn.simpleicons.org/googlegemini',
          'https://cdn.simpleicons.org/githubcopilot'
        ],
        metrics: [
          { value: "200%", label: "生産性向上" },
          { value: "-30%", label: "開発時間" },
          { value: "AI-Native", label: "マインドセット" },
        ],
      },
    ],
    demo: {
      title: "ライブデモ — 仮想スクロール従業員リスト",
      desc: "常にわずか<strong>約20個</strong>のDOMノードでレンダリングされた10,000人の従業員。スクロールしてパフォーマンスを観察してください — DOMノード数は一定に保たれます。",
      badge: "10,000件のレコード · ライブ",
    },
    table: {
      id: "従業員ID",
      name: "氏名",
      department: "部署",
      status: "ステータス",
      joined: "入社日",
      rowsOf: "行",
      of: "/",
      domNodes: "DOMノード",
      rerenders: "再レンダリング",
      statusLabels: { active: "在籍", inactive: "退職", leave: "休職中" },
    },
  },

  // Projects
  projects: {
    sectionLabel: "パートナーと製品",
    title: "クライアントと製品",
    subtitle: "導入されたクライアント企業と開発されたソフトウェアエコシステムのリスト。",
    clientTitle: "導入クライアント",
    productTitle: "開発製品",
    items: [
      {
        featured: true,
        label: "エンタープライズ人事管理プラットフォーム",
        title: "Paradise HR",
        emoji: "🏢",
        bgColor: "linear-gradient(135deg, #dbeafe, #ede9fe)",
        desc: "<strong>14,000以上</strong>のユーザーにサービスを提供する10社以上の多国籍企業向けの包括的な人事管理システム：ロッテ、日本電産アドバンスドモータ、Tripod Vietnam、Detmold Packaging、Haiphong Steel Flower。給与計算、コアHR、勤怠管理、シフトスケジューリング、社会保険、およびKPIレポートをカバーしています。",
        bullets: [
          "Vanilla JavaScriptの独自のシングルページアプリケーション（SPA）フレームワーク — 1秒未満のロード、40％小さいバンドル",
          "安定した<strong>60fps</strong>での<strong>10,000以上</strong>の従業員ノードの仮想スクロール",
          "SQL Serverの最適化：パーティションテーブル、カバリングインデックス — 1秒未満のクエリ",
          "<strong>15〜20日</strong>（標準は<strong>20〜25日</strong>）でモジュールを納品、<strong>100％</strong>のクライアント定着率",
        ],
        tags: ["Vanilla JavaScript", "SPA Framework", "SQL Server", "Java", "PWA", "UI/UX"],
      },
      {
        featured: false,
        label: "モバイルウェブアプリケーション",
        title: "Vào Ca",
        emoji: "📱",
        bgColor: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
        desc: "従業員がシフトのチェックイン、スケジュールの確認、残業の追跡を行うためのモバイルウェブアプリケーション。同時リクエストの処理に最適化されており、多数の従業員が同時にアクセスしても<strong>100％</strong>のデータ整合性を確保します。",
        bullets: ["プログレッシブウェブアプリ（PWA） — オフラインファーストのIndexedDB同期を備えたネイティブアプリのようにインストール可能", "高同時実行シフトロジック — <strong>100％</strong>のデータ整合性を保証", "今後のシフトのためのプッシュ通知"],
        tags: ["PWA", "IndexedDB", "Service Worker", "Push API"],
      },
      {
        featured: false,
        label: "分析ダッシュボード",
        title: "人事分析",
        emoji: "📊",
        bgColor: "linear-gradient(135deg, #fef3c7, #fde68a)",
        desc: "リアルタイムの人事分析ダッシュボード：離職率、部門のパフォーマンス、残業代、四半期の人員予測。手動のワークフローを自動化し、管理処理時間を最大<strong>50％</strong>削減しました。",
        bullets: ["最適化されたチャートのレンダリング — パフォーマンスのためにCanvasコンテキストを再利用", "XLSストリーミングによるExcelレポートのエクスポート", "自動化されたワークフロー — 手動処理時間の<strong>50％</strong>削減"],
        tags: ["Canvas API", "Chart.js", "Excel Export", "REST API"],
      },
      {
        featured: false,
        label: "監査 & コンプライアンス",
        title: "監査ログシステム",
        emoji: "🔍",
        bgColor: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
        desc: "全文検索、アクター/アクション/エンティティのフィルタリング、およびタイムラインビューを備えた大規模な監査ログシステム。エンタープライズのコンプライアンス要件を満たすために、何百万ものレコード用に設計された高パフォーマンスのクエリを備えたSQL Serverスキーマ。",
        bullets: ["SQL Serverの月次パーティションテーブル — <strong>5,000,000行以上</strong>で<strong>200ms</strong>未満のクエリ", "カーソルベースのページネーションによる無限スクロール", "コンプライアンス文書用のPDF監査レポートのエクスポート"],
        tags: ["SQL Server", "Partitioning", "Cursor Pagination", "PDF Export"],
      },
    ],
  },

  // Product Images
  productImages: {
    sectionLabel: "製品",
    title: "開発された製品の画像",
    subtitle: "構築および導入された実際のシステムとアプリケーションを紹介する画像のセレクション。",
  },

  // Contact
  contact: {
    sectionLabel: "お問い合わせ",
    title: "連絡先",
    subtitle: "複雑なビジネスロジックと高パフォーマンスの技術アーキテクチャを結びつけるリーダーをお探しなら、ぜひつながって、一緒に業務の卓越性を推進しましょう。",
    formTitle: "メッセージを送信",
    fields: {
      name: "氏名",
      namePlaceholder: "山田 太郎",
      email: "メールアドレス",
      emailPlaceholder: "email@company.com",
      message: "メッセージ",
      messagePlaceholder: "協力の機会について話し合いたいのですが...",
      submit: "メッセージを送信",
    },
    success: "✅ ありがとうございます！24時間以内にご返信いたします。",
  },
};

export default ja;
