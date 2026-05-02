import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <Head>
        <title>CannaZen - Plateforme E-commerce</title>
        <meta name="description" content="Plateforme e-commerce TypeScript/Node.js" />
      </Head>

      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2563eb',
          marginBottom: '1rem'
        }}>
          🌿 CannaZen
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '2rem'
        }}>
          Plateforme e-commerce TypeScript/Node.js - Monorepo de bibliothèques
        </p>
      </header>

      <div style={{
        display: 'grid',
        gap: '1.5rem',
        margin: '2rem 0'
      }}>
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          background: '#f9fafb'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            📚 lib/api-spec
          </h3>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Spécifications OpenAPI pour l'API REST
          </p>
        </div>

        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          background: '#f9fafb'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            🔧 lib/api-zod
          </h3>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Validation et types TypeScript générés avec Zod
          </p>
        </div>

        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          background: '#f9fafb'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            ⚛️ lib/api-client-react
          </h3>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Client React pour l'API avec hooks et composants
          </p>
        </div>

        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          background: '#f9fafb'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            🗄️ lib/db
          </h3>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Schema de base de données avec Drizzle ORM
          </p>
        </div>

        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          background: '#f9fafb'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>
            🛠️ scripts
          </h3>
          <p style={{ margin: 0, color: '#6b7280' }}>
            Scripts d'administration et utilitaires
          </p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a
          href="https://github.com/aedenmathias5-beep/cannazenPR"
          style={{
            display: 'inline-block',
            margin: '0 1rem',
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            transition: 'background 0.2s'
          }}
        >
          📖 Documentation GitHub
        </a>
        <a
          href="https://github.com/aedenmathias5-beep/cannazenPR/blob/main/README.md"
          style={{
            display: 'inline-block',
            margin: '0 1rem',
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            transition: 'background 0.2s'
          }}
        >
          🚀 Commencer
        </a>
      </div>

      <footer style={{
        marginTop: '4rem',
        textAlign: 'center',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        <p>Déployé avec ❤️ sur Vercel</p>
      </footer>
    </div>
  )
}

export default Home