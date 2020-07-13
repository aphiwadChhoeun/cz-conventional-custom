# cz-conventional-custom

## Quickstart

### Installation

```bash
npm install --save aphiwadChhoeun/cz-conventional-custom#master
```

and then add the following to package.json:

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-cbsi"
    }
  }
}
```

now when you're ready to commit, run:
```git
git add .
npm run commit
```