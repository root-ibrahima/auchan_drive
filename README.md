Auchan Drive - Projet Web
# Auchan Drive - Projet de Simulation

Un projet de simulation de site de commande en ligne pour Auchan Drive, développé avec Next.js, Prisma, et une base de données PostgreSQL. Ce projet inclut une authentification par JWT, des fonctionnalités de panier, et un tableau de bord utilisateur.

## Prérequis

- **Node.js** (version recommandée : ≥ 16.x)
- **PostgreSQL** (version recommandée : ≥ 13.x)
- **npm** (ou yarn, selon votre préférence)
- **Prisma** (client installé via npm/yarn)

## Installation

### Cloner le projet :

```bash
git clone <url-du-repository>
cd auchan_drive
```

### Installer les dépendances :

```bash
npm install
```

### Configurer l'environnement :

Créez un fichier `.env` à la racine du projet et ajoutez-y les variables d'environnement nécessaires pour la connexion à PostgreSQL et la sécurité JWT.

```plaintext
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/drive"
JWT_SECRET="votre_secret_pour_le_jwt"
```

Remplacez `<user>`, `<password>`, et `drive` par vos informations de base de données PostgreSQL. Note : Assurez-vous de garder `JWT_SECRET` secret.

## Configuration de PostgreSQL

### Démarrer PostgreSQL :

```bash
sudo service postgresql start
```

### Créer la base de données (si elle n’existe pas encore) :

Accédez à PostgreSQL :

```bash
sudo -u postgres psql
```

Ensuite, exécutez la commande SQL suivante pour créer la base de données :

```sql
CREATE DATABASE drive;
```

### Attribuer les permissions à l’utilisateur PostgreSQL :

```sql
GRANT ALL PRIVILEGES ON DATABASE drive TO <user>;
```

## Initialisation de Prisma

### Initialiser le schéma Prisma (après avoir configuré `DATABASE_URL` dans le fichier `.env`) :

```bash
npx prisma migrate dev --name init
```

### Générer le client Prisma pour interagir avec la base de données :

```bash
npx prisma generate
```

### Visualiser le schéma dans Prisma Studio (facultatif, pour explorer la base de données) :

```bash
npx prisma studio
```

## Lancement de l'application

### Démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible à [http://localhost:3000](http://localhost:3000).

### Utiliser l'application :

- **Inscription** : Allez sur `/signup` pour créer un compte.
- **Connexion** : Allez sur `/login` pour vous connecter et recevoir un token d’authentification.
- **Tableau de bord** : Accédez au tableau de bord `/dashboard` (seulement si connecté).
- **Produits et Panier** : Explorer les fonctionnalités de produits et de panier disponibles.

## Routes API principales

- **Inscription** : `POST /api/signup` - Crée un nouvel utilisateur avec un mot de passe haché.
- **Connexion** : `POST /api/login` - Connecte un utilisateur, génère un JWT stocké dans un cookie.
- **Vérification de l'authentification** : `GET /api/check-auth` - Vérifie si l'utilisateur est authentifié en fonction du cookie.

## Commandes utiles

### Migrer la base de données (après toute modification du schéma Prisma) :

```bash
npx prisma migrate dev --name <nom-de-la-migration>
```

### Générer le client Prisma (nécessaire après les migrations) :

```bash
npx prisma generate
```

### Démarrer Prisma Studio (pour explorer visuellement les données) :

```bash
npx prisma studio
```

## Technologies utilisées

- **Next.js** : Framework React pour la création de l’interface utilisateur.
- **Tailwind CSS** : Framework CSS pour un design réactif et élégant.
- **Prisma** : ORM pour la gestion de la base de données PostgreSQL.
- **PostgreSQL** : Base de données relationnelle pour stocker les informations utilisateur et produit.
- **bcrypt** : Pour hacher les mots de passe.
- **jsonwebtoken (JWT)** : Pour l’authentification sécurisée des utilisateurs.

## Notes

- Assurez-vous de redémarrer PostgreSQL après chaque modification de configuration importante.
- Pour la sécurité, évitez de versionner le fichier `.env`.

## Contact

Pour toute question ou amélioration, n'hésitez pas à me contacter.