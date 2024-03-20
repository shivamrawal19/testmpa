This project is a part of the question posted on StackOverflow, please have a look at full question here: 


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
