# AlphaPilot AI 🚀

### AI-Powered Crypto Market Intelligence, Risk Analysis & Trade Execution

**Research smarter. Analyze risk. Trade with confidence.**

AlphaPilot AI is an AI-powered cryptocurrency market intelligence and trading assistant designed to transform complex financial market data into actionable insights.

The platform combines real-time market intelligence, explainable AI-powered trading signals, portfolio risk assessment, and user-approved trade execution into a single, intuitive dashboard.

Built for the **SoSoValue WaveHack Buildathon**, AlphaPilot AI integrates SoSoValue's financial data ecosystem with AI-driven analysis and planned SoDEX trading functionality.

> **Project Status:** Under active development. Market analysis, AI signals, portfolio management, and trading integrations are being developed incrementally. AI-generated insights do not guarantee profitable trades.

---

## 🌟 Project Overview

Cryptocurrency traders often rely on multiple platforms to monitor prices, analyze market trends, research digital assets, assess portfolio risks, and execute trades.

AlphaPilot AI aims to simplify this fragmented workflow.

Instead of requiring users to switch between different research platforms and trading terminals, AlphaPilot AI brings the entire decision-making process into one application.

The platform is designed around five core principles:

1. **Discover** — Identify potential market opportunities using data-driven research.
2. **Analyze** — Evaluate market conditions using technical indicators and AI.
3. **Explain** — Provide understandable explanations for trading signals.
4. **Protect** — Assess risk before any trading decision.
5. **Execute** — Prepare transactions for user review and explicit authorization.

### Our Vision

To make sophisticated cryptocurrency research, AI-assisted market analysis, and responsible trading tools more accessible through a transparent, intelligent financial platform.

### Our Mission

To empower cryptocurrency traders with reliable market intelligence, explainable AI recommendations, independent risk assessment, and streamlined trading workflows.

---

## ✨ Core Features

### 📊 1. Market Intelligence Dashboard

Monitor cryptocurrency markets through a unified analytical interface.

**Planned capabilities:**

- Cryptocurrency price monitoring
- Price and volume changes
- Market capitalization and asset statistics
- Market momentum indicators
- Historical price charts
- Financial news and market narratives
- SoSoValue market intelligence integration
- Watchlists and asset discovery

### 🤖 2. AI Trading Signal Assistant

An AI-powered assistant designed to interpret market conditions and explain potential trading opportunities.

**Planned capabilities:**

- BUY, SELL, and WAIT assessments
- Market trend classification
- Technical indicator analysis
- AI-generated explanations
- Supporting market evidence
- Signal confidence indicators
- Historical signal records
- Market risk observations

Signal confidence values represent analytical heuristics unless independently calibrated against historical outcomes. They are not guaranteed probabilities of success.

### 🛡️ 3. Intelligent Risk Management

A dedicated risk engine evaluates proposed trading actions before execution.

**Planned capabilities:**

- Position-size calculations
- Volatility assessment
- Portfolio concentration analysis
- Exposure monitoring
- Potential loss estimation
- Risk-based trading restrictions
- Configurable risk preferences
- Portfolio drawdown analysis

The risk engine operates independently from AI-generated trading explanations.

### 💹 4. Trading Terminal

A streamlined interface for reviewing and managing cryptocurrency trading decisions.

**Planned capabilities:**

- Trading pair selection
- Interactive market charts
- Market and limit-order previews
- Estimated trading costs
- Order confirmation workflows
- Transaction status tracking
- Paper trading
- SoDEX integration, subject to API access and supported operations

**Security principle:** AlphaPilot AI must never execute live trades without explicit user authorization.

### 💼 5. Portfolio Analytics

Monitor and analyze cryptocurrency portfolios through interactive visualizations.

**Planned capabilities:**

- Portfolio balance overview
- Asset allocation
- Profit and loss analytics
- Position monitoring
- Performance charts
- Exposure analysis
- Trading history
- Risk metrics

### 🔔 6. Alerts and Market Monitoring

Stay informed about significant developments.

**Planned capabilities:**

- Price movement alerts
- Market volatility notifications
- New signal notifications
- Portfolio risk alerts
- Watchlist monitoring
- News-driven market observations

---

## 🛠️ Technology Stack

AlphaPilot AI uses a hybrid TypeScript and Python architecture.

| Category             | Technologies                             |
| -------------------- | ---------------------------------------- |
| Frontend             | Next.js, React, TypeScript               |
| Styling              | Tailwind CSS, shadcn/ui, Base UI         |
| Design               | Nova Preset, Geist, Lucide Icons         |
| State Management     | Zustand, TanStack Query                  |
| Forms and Validation | React Hook Form, Zod                     |
| HTTP Client          | Axios                                    |
| Charts               | TradingView Lightweight Charts, Recharts |
| Animation            | Framer Motion                            |
| Backend              | Python, FastAPI                          |
| AI                   | OpenAI API                               |
| Market Intelligence  | SoSoValue API                            |
| Trading Integration  | SoDEX API                                |
| Blockchain           | Wagmi, Viem                              |
| Database             | PostgreSQL, Supabase                     |
| Financial Analytics  | Pandas, NumPy, TA                        |
| Backend Validation   | Pydantic                                 |
| Scheduling           | APScheduler                              |
| Testing              | Pytest, Vitest, Playwright               |
| Frontend Hosting     | Vercel                                   |
| Backend Hosting      | Railway                                  |
| Database Hosting     | Supabase                                 |

Some technologies represent planned integrations and may not yet be configured in the repository.

---

## 🏗️ System Architecture

The application follows a modular, API-driven architecture.

```
                   AlphaPilot AI
                         |
               Next.js Frontend
                         |
                 FastAPI Backend
                         |
        +----------------+----------------+
        |                |                |
   Market Data       AI Analysis      Trading
      Engine            Engine         Engine
        |                |                |
   SoSoValue API     OpenAI API       SoDEX API
        |                |                |
        +----------------+----------------+
                         |
                  Risk Engine
                         |
                User Confirmation
                         |
                Trading Execution
                  or Simulation
                         |
                 PostgreSQL DB
```

### Architectural Principles

- Separation of frontend, backend, and financial logic
- Modular feature-based development
- Server-side handling of confidential API credentials
- Independent risk validation
- Structured AI responses
- Explicit user-controlled execution
- Traceable trading decisions
- Reliable error handling
- Reusable integration services

---

## 📁 Project Structure

```
alphapilot/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   ├── markets/
│   │   │   ├── signals/
│   │   │   ├── trading/
│   │   │   ├── portfolio/
│   │   │   ├── risk/
│   │   │   └── wallet/
│   │   ├── hooks/
│   │   ├── lib/
│   │   │   ├── api/
│   │   │   └── utils/
│   │   └── types/
│   ├── package.json
│   └── .env.local
│
├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── integrations/
│   │   ├── engines/
│   │   ├── models/
│   │   └── main.py
│   ├── tests/
│   └── requirements.txt
│
├── docs/
├── .gitignore
└── README.md
```

This represents the target project structure. Individual folders and services will be added as development progresses.

---

## ⚙️ Getting Started

### Prerequisites

Before installation, ensure the following are available:

- Node.js — a current LTS version supported by your Next.js release
- npm
- Python 3.11 or later
- Git
- Visual Studio Code or another development environment
- Supabase project, when enabling persistent data
- OpenAI API key, when enabling AI functionality
- SoSoValue API access, when enabling live market intelligence

SoDEX credentials or authorization may also be required for trading functionality.

### 1. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/alphapilot.git
cd alphapilot
```

Replace `YOUR_USERNAME` with the repository owner's GitHub username.

### 2. Install Frontend Dependencies

```
cd frontend
npm install
```

### 3. Configure Frontend Environment Variables

Create a `.env.local` file inside `frontend`:

```
NEXT_PUBLIC_API_URL=http://localhost:8000

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
```

Only expose public configuration through `NEXT_PUBLIC_` variables.

### 4. Start the Frontend

```
npm run dev
```

Access the development application at:

[http://localhost:3000](http://localhost:3000)

### 5. Install Backend Dependencies

Open another terminal and navigate to the backend directory:

```
cd backend
```

Create a Python virtual environment:

```
python -m venv .venv
```

Activate it on Windows PowerShell:

```
.\.venv\Scripts\Activate.ps1
```

On macOS or Linux:

```
source .venv/bin/activate
```

Install the required dependencies:

```
python -m pip install -r requirements.txt
```

### 6. Configure Backend Environment Variables

Create `backend/.env`:

```
OPENAI_API_KEY=

SOSOVALUE_API_KEY=

SODEX_API_KEY=
SODEX_API_SECRET=

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
```

SoDEX credential names are placeholders until the required authentication method is confirmed against the current API documentation.

Never commit actual credentials to Git.

### 7. Start the Backend

```
python -m uvicorn app.main:app --reload --port 8000
```

Backend URL:

[http://localhost:8000](http://localhost:8000)

Interactive API documentation:

[http://localhost:8000/docs](http://localhost:8000/docs)

Health endpoint, once implemented:

[http://localhost:8000/health](http://localhost:8000/health)

---

## 🔌 External Integrations

### SoSoValue API

SoSoValue provides financial intelligence and cryptocurrency market information.

AlphaPilot AI is designed to use supported SoSoValue datasets to power market research, asset analysis, news intelligence, and trading insights.

Documentation:

[https://sosovalue.gitbook.io/soso-value-api-doc](https://sosovalue.gitbook.io/soso-value-api-doc)

### SoDEX API

SoDEX integration is planned for trading-related capabilities, including compatible market data, order previews, and authenticated execution workflows.

Actual functionality depends on the available API endpoints, permission requirements, and supported environments.

Website:

[https://sodex.com](https://sodex.com)

### OpenAI API

The OpenAI API will power explainable market analysis and structured research responses.

AI output will be combined with deterministic financial calculations rather than used as the sole authority for execution decisions.

Documentation:

[https://platform.openai.com/docs](https://platform.openai.com/docs)

### Supabase

Supabase will provide PostgreSQL-backed persistence and optional authentication infrastructure.

Website:

[https://supabase.com](https://supabase.com)

---

## 🔐 Security and Responsible Trading

AlphaPilot AI is designed with a security-first approach.

### Security Measures

- API secrets stored server-side
- Environment variables excluded from version control
- Input validation and API authentication
- Risk checks before order submission
- Explicit approval for every live trade
- Trading amount restrictions
- Protection against stale market data
- Safe handling of external API errors
- Trading decision audit logs
- No server-side custody of user wallet private keys

### Responsible AI

AlphaPilot AI treats AI-generated market observations as decision-support information.

The platform does not promise profitable trading outcomes or guaranteed market predictions.

### Financial Disclaimer

**AlphaPilot AI is a financial research and decision-support tool, not a licensed investment adviser.**

Cryptocurrency investments involve significant market risk and potential financial loss.

AI-generated trading signals, risk scores, and market commentary are informational and should not be interpreted as personalized financial advice.

Users remain responsible for reviewing and authorizing their own trading decisions.

---

## 🧭 Development Roadmap

### Phase 1 — Application Foundation

- Initialize Next.js frontend
- Configure Tailwind CSS and shadcn/ui
- Implement the Nova design system
- Create dashboard layout and navigation
- Initialize FastAPI backend
- Configure environment variables
- Establish frontend/backend communication

### Phase 2 — Market Intelligence

- Integrate SoSoValue API
- Implement market data adapters
- Build market overview dashboard
- Add candlestick charts
- Implement asset search
- Add market news and watchlists

### Phase 3 — AI Trading Signals

- Integrate OpenAI API
- Implement technical indicator calculations
- Generate structured market assessments
- Build signal explanation interfaces
- Store signal history
- Add evidence and timestamps

### Phase 4 — Risk Management

- Implement position sizing
- Build portfolio risk analysis
- Add volatility assessment
- Introduce configurable risk limits
- Implement risk validation tests

### Phase 5 — Trading Integration

- Implement paper-trading workflow
- Connect supported SoDEX interfaces
- Build order preview panel
- Implement explicit trade confirmation
- Track order execution status
- Add order history

### Phase 6 — Production & Submission

- Add automated testing
- Complete responsive design
- Configure production database
- Deploy frontend
- Deploy backend
- Prepare live product demonstration
- Publish project documentation
- Record demonstration video
- Complete buildathon submission

Checklist items should be updated to reflect actual repository progress.

---

## 🏆 SoSoValue WaveHack Buildathon

AlphaPilot AI is being developed for the **SoSoValue WaveHack Buildathon**, under the theme:

**Build Your One-Person On-Chain Finance Business with SoSoValue.**

The project explores how AI-powered financial intelligence can support an independently operated on-chain financial technology product.

### Buildathon Alignment

| Evaluation Area | AlphaPilot AI Approach                                 |
| --------------- | ------------------------------------------------------ |
| User Value      | Unified crypto research and trading workflow           |
| Functionality   | Working market intelligence and trade-preview pipeline |
| Product Logic   | Transparent AI reasoning and independent risk checks   |
| API Integration | SoSoValue market data and planned SoDEX integration    |
| User Experience | Responsive, accessible financial dashboard             |

### Submission Deliverables

The intended submission package includes:

- Public GitHub repository
- Working application demo
- Project overview
- Installation and configuration instructions
- Technical architecture
- API integration explanation
- Development changelog
- Demonstration video
- Team information

All submitted claims should accurately reflect implemented functionality.

---

## 🧪 Testing

The project will use automated testing to verify critical functionality.

### Frontend

- Component testing
- User interaction testing
- Dashboard rendering
- Form validation
- Trading confirmation workflows

### Backend

- API endpoint tests
- Market data normalization tests
- Signal calculation tests
- Risk engine tests
- Trading validation tests
- External API failure handling

Example backend test command:

```
python -m pytest
```

Frontend test commands will be documented once the test runner and scripts have been configured.

---

## 🤝 Contributing

Contributions, bug reports, and improvement suggestions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Add relevant tests.
5. Submit a pull request describing the changes.

Suggested branch naming:

```
feature/market-dashboard
feature/ai-signals
feature/risk-engine
feature/sodex-integration
fix/api-error-handling
```

Please avoid submitting API credentials, personal trading data, or private wallet information.

---

## 📄 License

A license has not yet been selected.

Until a license is explicitly added, the repository should not be assumed to permit unrestricted reuse or redistribution.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [shadcn/ui](https://ui.shadcn.com)
- [SoSoValue API Documentation](https://sosovalue.gitbook.io/soso-value-api-doc)
- [SoDEX](https://sodex.com)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Wagmi Documentation](https://wagmi.sh)
- [Viem Documentation](https://viem.sh)

---

## 🚀 The Future of AlphaPilot AI

AlphaPilot AI aims to evolve into an intelligent financial operating system for cryptocurrency market research and responsible trading.

Potential future capabilities include multi-asset research agents, advanced portfolio optimization, strategy backtesting, customizable market alerts, and deeper on-chain analytics.

The long-term objective is to combine the analytical strengths of artificial intelligence with transparent financial data and secure user-controlled execution.

**AlphaPilot AI — Turning market intelligence into informed action.**

*Built for the SoSoValue WaveHack Buildathon.*
