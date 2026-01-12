import { useState } from 'react'
import './App.css'
import News from './components/News'
import PowerSites from './components/PowerSites'
import PowerTools from './components/PowerTools'

type Tab = 'news' | 'power-sites' | 'power-tools'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('news')

  return (
    <div className="app">
      <header className="header">
        <h1>🤖 AI Today</h1>
        <p className="subtitle">Your daily AI news, tools, and resources</p>
      </header>

      <nav className="tabs">
        <button
          className={`tab ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          📰 News
        </button>
        <button
          className={`tab ${activeTab === 'power-sites' ? 'active' : ''}`}
          onClick={() => setActiveTab('power-sites')}
        >
          🌐 Power Sites
        </button>
        <button
          className={`tab ${activeTab === 'power-tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('power-tools')}
        >
          🛠️ Power Tools
        </button>
      </nav>

      <main className="content">
        {activeTab === 'news' && <News />}
        {activeTab === 'power-sites' && <PowerSites />}
        {activeTab === 'power-tools' && <PowerTools />}
      </main>

      <footer className="footer">
        <p>Updated daily • Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
