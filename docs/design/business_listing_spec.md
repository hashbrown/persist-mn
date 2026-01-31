
# Business Model

Each Business listing is a YAML-style doc.
[Business Schema](../../src/content/config.ts) 


## Displayed fields

The following fields are used as part of the UI component

``` 
displayName: 
category:
address:
phone:
justification: 
websiteUrl: 
websiteImageUrl:
googleMapsUrl:
```

Data Fields
```
placesId:
placesName:
city:
state:
zipCode:
primaryType:
types:
```

# Data

## Google Places APIs
The business listings are currently sourced using Google Places.

### Detail API

[Full example api response](../resources/api_examples/places_detail_api_response.json)

This data is used for the business listing:

```
"name": string
"id": string
"types": [string]
"primaryType": string
"displayName.text": string
"nationalPhoneNumber": string
"shortFormattedAddress": string
"location.latitude": decimal
"location.longitude": decimal
"editorialSummary": string
"googleMapsUri": string
"websiteUri": string   
"photos[0].name" : string 
```

### Photo API

[Full example api response](../resources/api_examples/places_photo_api_response.json)

"photoUri": string



## Business Object Mapping

This is codified in the [add-business script](../../scripts/add-business.js)

`Business Field Name: API Response Field`


displayName: displayName
category: mapped from(types, primaryType)
address: shortFormattedAddress
phone: nationalPhoneNumber
city: postalAddress.locality
state: postalAddress.administrativeArea
zipCode: postalAddress.postalCode
justification: (user provided)
website: websiteUri
websiteImageUrl: photoUri
googleMapsUrl: googleMapsUri
summary: editorialSummary
placesName: name
placesId: id
primaryType: primaryType
types: types