# GitHub Setup Checklist

## ✅ Fichiers préparés

- [x] `.gitignore` — mis à jour avec `.agents/`, `.config/`, `.env*`
- [x] `README.md` — créé avec documentation de base
- [x] `.env.example` — créé comme template de configuration
- [x] `SETUP.md` — documentation de configuration existante

## Avant de pousser vers GitHub

1. **Vérifier les secrets**
   - [ ] Aucun `.env` commité (doit être dans `.gitignore`)
   - [ ] Aucune clé API visible dans les fichiers source
   - [ ] Aucun token d'accès en dur

2. **Nettoyer les fichiers locaux**
   ```bash
   # Vérifier les fichiers non-tracés qui pourraient être sensibles
   git status
   
   # Nettoyer les caches locaux (ne seront pas committés)
   rm -rf .cache .local .config .agents
   ```

3. **Initialiser le repo Git** (si pas déjà fait)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cannazen.git
   git push -u origin main
   ```

4. **Configurer GitHub**
   - [ ] Ajouter une description et topics au repo
   - [ ] Configurer les paramètres de branche (main protégée si besoin)
   - [ ] Ajouter les collaborateurs

5. **Documentation**
   - [ ] Mettre à jour le README.md avec plus de détails si nécessaire
   - [ ] Ajouter des instructions de contribution
   - [ ] Documenter les commandes de développement importantes

## Commandes rapides

```bash
# Vérifier le status avant de pousser
git status

# Voir les fichiers dans .gitignore
git check-ignore -v *
```
