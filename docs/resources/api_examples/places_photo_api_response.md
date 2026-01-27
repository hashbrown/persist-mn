
# Place Photo API 

**Api Docs**
https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places.photos/getMedia

PLACES_PHOTO_NAME=photos[0].name from Detail response.

https://places.googleapis.com/v1/[PLACES_PHOTO_NAME]/media?params

```bash
curl \
  'https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN3twHGqIh8aJ_igh4RCwizWxzt3rUY_rNuO1imWDKi4aqcbgfuk8XGNvgJGzs7pFfdA9WhlW6dfosNbYGjO9XFSlqVFRg6fcYs4BNd0oDYYo2B72z3d--wBqVf5RdmPGsgdV3L7o4AWMfk47i_xsdbpA2PpX64Q3xq4US1aFDJmqutoCVYy17xQFx0c_xeZsY1V1Bir9eJ6JPsT6Z4cdiqnl8pkfJs5WXwd6W0NDorhKwee32uNLdMjJvOGZEyFU1in9v3V2-8DheOyiLv3UzKL85iun1LE6UH8CZZmNITKZXCVREdbn6hIVEnpx9wnxeybCOrnmkKuMY9R3Ws6DL6mW93Gxnxve6GTtjV2Ow7FeCmhVcbrsQOXl1vbVUNeQ14rEcx73YXok5ExOigYB3iC1E2p4DhoECz7rv7KDFftSMY/media?maxHeightPx=200&maxWidthPx=200&skipHttpRedirect=true' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed

```

```json
{
  "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN3twHGqIh8aJ_igh4RCwizWxzt3rUY_rNuO1imWDKi4aqcbgfuk8XGNvgJGzs7pFfdA9WhlW6dfosNbYGjO9XFSlqVFRg6fcYs4BNd0oDYYo2B72z3d--wBqVf5RdmPGsgdV3L7o4AWMfk47i_xsdbpA2PpX64Q3xq4US1aFDJmqutoCVYy17xQFx0c_xeZsY1V1Bir9eJ6JPsT6Z4cdiqnl8pkfJs5WXwd6W0NDorhKwee32uNLdMjJvOGZEyFU1in9v3V2-8DheOyiLv3UzKL85iun1LE6UH8CZZmNITKZXCVREdbn6hIVEnpx9wnxeybCOrnmkKuMY9R3Ws6DL6mW93Gxnxve6GTtjV2Ow7FeCmhVcbrsQOXl1vbVUNeQ14rEcx73YXok5ExOigYB3iC1E2p4DhoECz7rv7KDFftSMY/media",
  "photoUri": "https://lh3.googleusercontent.com/place-photos/AL8-SNFEeLwctqThxYdPpKVLRvtl8r0QyIHDyO4-U7zDUQQg6bHCUVWB8tMqdlIZfOPeXoRqzYaqtcy18_YblIKQ9E_M04lBa4CKrDtxHzbVBjehhtSwEW9ZfQc9AXeNEtYVUocc9Xrd_2DTu0bYYg=s4800-w200-h200"
}
```
  