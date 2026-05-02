# Guide de Contribution

Merci d'être intéressé par la contribution à CannaZen! 

## Préparation de l'environnement

### Prérequis
- Node.js 18+
- pnpm 8+

### Installation

```bash
# Installer les dépendances
pnpm install

# Vérifier l'installation
pnpm run typecheck
```

## Processus de contribution

1. **Fork** le repository
2. **Créer une branche** pour ta feature (`git checkout -b feature/amazing-feature`)
3. **Faire les changements** en respectant le style du code
4. **Tester** (`pnpm run typecheck`)
5. **Commit** avec un message clair
6. **Push** vers ta branche
7. **Ouvrir une Pull Request**

## Style du code

- Utiliser TypeScript strict
- Formater avec Prettier (`pnpm run format` si disponible)
- Vérifier les types avec `pnpm run typecheck`

## Structure monorepo

Ce projet utilise pnpm workspaces:

```
lib/
├── api-spec/         # Spécification OpenAPI
├── api-zod/          # Types et validation
├── api-client-react/ # Client React
└── db/               # Schema ORM
```

Pour des modifications multi-packages, tester avec `pnpm run build`.

## Signaler un bug

Créer une issue GitHub en détaillant:
- Contexte et étapes pour reproduire
- Comportement attendu vs actuel
- Environment (OS, versions)

## Questions?

Consultez [SETUP.md](./SETUP.md) pour la configuration des services externes.
