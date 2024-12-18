## Apis

### GET - http://localhost:3000/api/v1/videos/search [work for both GET and SEARCH]

#### PARAMS

- **page** - the page number we what(**default 1**)
- **pageSize** - define size of each page(**default 10**)
- **sortBy** - represent the table field on which we want to sort(**default publishedAt**)
- **search(optional)** - If passed will only return items which matchs search input, otherwise will return all items in paginated format.

#### RESPONSE

- **hasNext** : Boolean
- **hasPrev** : Boolean
- **data** : List of Items


NOTE: - 
1. ENV FILE IS KET BLANK ON PURPOSE AND ALL THE KEYS HAVE BEEN REMOVED. DOCKER SUPPORT HAS ALSO BEEN ADDED. 
2. Youtube API KEYS CAN BE ADDED IN FORM OF "KEY1||KEY2||KEY3", thus it takes care of the key exhaustation scenerio
