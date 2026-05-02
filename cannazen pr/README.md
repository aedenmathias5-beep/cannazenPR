# CannaZen

Une plateforme e-commerce monorepo TypeScript/Node.js avec API REST, base de données, et clients React.

## Structure du projet

```
lib/
├── api-client-react/    # Client React pour l'API
├── api-spec/            # Spécification OpenAPI
├── api-zod/             # Validation avec Zod
└── db/                  # Schema Drizzle ORM

scripts/                 # Scripts d'administration
```

## Technologies

- **Runtime**: Node.js
- **Package Manager**: pnpm
- **Langage**: TypeScript
- **ORM**: Drizzle
- **API**: OpenAPI / Zod
- **Validation**: Zod

## Installation

```bash
# Installer les dépendances
pnpm install

# Compiler TypeScript
pnpm run typecheck

# Builder le projet
pnpm run build
```

## Configuration

Pour configurer les services externes (paiement, email, etc.), consultez [SETUP.md](./SETUP.md).

### Variables d'environnement

Créez un fichier `.env` basé sur `.env.example` (voir SETUP.md pour les détails).

## Développement

```bash
# Vérifier les types
pnpm run typecheck

# Builder tout
pnpm run build
```

## License

MIT
