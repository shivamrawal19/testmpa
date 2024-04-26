This project is a part of the question posted on StackOverflow, please have a look at full question here: https://stackoverflow.com/questions/78192074/combination-of-latest-versions-of-vite-vue-vitejs-plugin-vue-and-vite-plugin


## Steps to reproduce:
- choose correct package.json & package-lock.json ( see below )
- run `npm install`
- run `npm run build`
- see dist/homepage.html
homepage.html does not include built asset URLs in new package-json files,
but working correctly with old ones.


## Explaination:

The old package.json, which I was using before, was building the homepage.html correctly. ( including asset URLs )

You can have a look at old package.json & package-lock.json and try it by using these 2 files:
- package-json-versions/old_but_working_package-lock.json
- package-json-versions/old_but_working_package.json

but the packages had vulnerabilities as checked with `npm audit`. 
So I must have to update them. Which lead me to new package.json & packate-lock.json, which are currently in the root of the project, but also here:
- package-json-versions/new_but_faulty_package-lock.json
- package-json-versions/new_but_faulty_package.json


## Hints

From the discussion here: https://github.com/emosheeep/vite-plugin-virtual-mpa/issues/68

Now there is a working package.json & package-lock.json which are still using old versions of packages, but have no vulnerability shown in `npm audit`.
( changes: vite version is changed from 5.0.10 to 5.0.13 )
- package-json-versions/old_v2_but_working_package-lock.json
- package-json-versions/old_v2_but_working_package.json
