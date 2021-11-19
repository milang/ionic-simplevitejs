Simple Ionic 6 + ViteJS + Jest app
==================================

This branch contains a simple React application that uses ViteJS template, Ionic 6.0.0 (RC3), and Jest.

Running Jest in this branch fails:

```sh
git checkout jest-ionic5
yarn run test
# => ... Jest failed to parse a file...
```

See branch `jest-ionic5` for what happens when Ionic is downgraded to 5.9.1 -- Jest starts succeeding (with no other changes).
