# Warp

## Push Smart Contracts to Public Repository

Update deploy branch with just frontEnd directory from master
```bash
git checkout master
git pull
git subtree split --prefix Smart-Contracts -b contracts
git checkout contracts
git remote set-url --push origin https://github.com/warpfinance/Warp-Contracts.git
git push
```

Pushes to [here](https://github.com/warpfinance/Warp-Contracts)
