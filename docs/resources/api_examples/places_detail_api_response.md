
# Place Details API 

**Api Docs**
https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/get


FIELD_MASK: name,id,types,primaryType,displayName,shortFormattedAddress,nationalPhoneNumber,postalAddress,location,
googleMapsUri,websiteUri,photos

```bash
curl \
  'https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?fields=name%2Cid%2Ctypes%2CprimaryType%2CdisplayName%2CshortFormattedAddress%2CnationalPhoneNumber%2Clocation%2CgoogleMapsUri%2CwebsiteUri%2Cphotos' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed

```

## Field-specific Response
```json
{
  "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw",
  "id": "ChIJj61dQgK6j4AR4GeTYWZsKWw",
  "types": [
    "corporate_office",
    "point_of_interest",
    "establishment"
  ],
  "nationalPhoneNumber": "(650) 253-0000",
  "location": {
    "latitude": 37.4220541,
    "longitude": -122.08532419999999
  },
  "googleMapsUri": "https://maps.google.com/?cid=7793879817120868320&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA",
  "websiteUri": "https://about.google/locations/?region=north-america",
  "displayName": {
    "text": "Googleplex",
    "languageCode": "en"
  },
  "primaryType": "corporate_office",
  "shortFormattedAddress": "1600 Amphitheatre Pkwy, Mountain View",
  "photos": [
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN0kAo92yjP_wg-OopR40BZqigZZPjKhGMT79y-2p7HPbI8wIXWt86nSMSuxL8xGfZHtrk1ksDTagkjWZUVhNA7S4CW99BeR-EnXys7Y32dDKzUAuC8VGTEnHa4yTowsftc7mvthSgqFZyxjcAxHbIIWMw_lfmHQxvFt-wTXzfGHrdmXEyi5CszVqRh7YEYJQA1U9kJ5qt0l0UoluLrdXrzqbQj6RTJ9wlJHaxcCiZ7YWDwzwjlVl4EKNMCMrWXmxuNcnQ0SYz-A4HcT_kpGs8kfp_pjhF4zNjSrIPwqM32T4DQb230S-dlsMlsZRasjRRyO5ydZDKg9uGiJ7e9Wm4e-A3HALSlMKAscWLqMloFAVqZVYH-iE2M6LBu5vJaV4G2nHGyNEEWvwgcBqhH2UX3ZdrQPX8_P2sw0JuJdMe78oKE",
      "widthPx": 4032,
      "heightPx": 3024,
      "authorAttributions": [
        {
          "displayName": "周雋Jean Chow",
          "uri": "https://maps.google.com/maps/contrib/115966502285988585651",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUHx2VmwFABKfbRFp3SjujkqaOrVxn6krxZdXr61TKVQJJZQ04V=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICs693WrQE&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICs693WrQE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN23MPWknDueJEtMIb1Sh7KZ5RBFAGP1vrq2PkhIOhpSnl7oFxgfb66KkTNuPbQz4QZA5i88IVJ9S3aa5m72ZBqlqZ_FNzVaMEPtrWrQdqEC0EfJF8YEaIFvBsLpxgN8Zbvg-ra4i5FkRmhAY6PQGD443--vA21mEM-EsV1o76_iZbVw2SZABnHI-v1_CdarSxezss4LerY2lO5xtgk6KTHX6UySows5c9Ajb55k701Ui1dw6oV5eJc46-tLUf-NShCvkSsCaI9VZun20OENpVHuF5tjmsFuPYpHxhu3wGDC84DEJZkcH8ljqydh2F4B_DX8T-HuWFS8D1N3gMgWr78GYl4IrhRfRYLJWl1wvWEO7dIskgbal3k60IurcJy2t_2RZA3U0xMHEaycy-AJkJIVUUgJ7aukc5oMOJwK0WgZiGzU7spUWGOwulsVrg",
      "widthPx": 800,
      "heightPx": 662,
      "authorAttributions": [
        {
          "displayName": "Alamine Hadrati",
          "uri": "https://maps.google.com/maps/contrib/107180963885482222151",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWoOjdvQFWiYTzpPVVdHoHq4GAz43bluHXDM1TRjopFmg1ykZo=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhBaQEnT7ncwm5M0EEZ7PyUM&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhBaQEnT7ncwm5M0EEZ7PyUM!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN08UNZ5TyicPw64rn6AUgZbj2t-SqXNoOF4Ql0dtyrBAnP9-w61eh_ZDSxZzL7rywhomPDWU1cgAu2acODk9OZClOREoY_e07_4bJsgjaC-s-CSvTyaB83cT9Ksj_2zy21lNUync39uWjRsDllZZilWOuM1q_eZHSDoD-d1Xgzp1GOGn45DrDt5JW_9WbKp2dIQf44Jl29MFuAVHyMq4MACrr-VO6sSvlMcQiWFUd4_p7kEkdz4w_Vgtau5yt4MLVLkkGtA3xt_jd01EeDQi_Wz_d6oy9uq1cPf86rU0kUv50Ecfql3wkRBSY0vha70ecuJOCLns_Zy_Da6f844UtES79KOrcd4XaUNfZkOn31F-HEoBw1QY3ADsj0nYhvZe8jVt09nzG2o4SIGO5rx8bY2MEuiuoPnEow-e26zF8YxBA",
      "widthPx": 4032,
      "heightPx": 3024,
      "authorAttributions": [
        {
          "displayName": "Fábio Celeri",
          "uri": "https://maps.google.com/maps/contrib/113885422569269654235",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUDVWrwEk_IuxXBhsxGbdKnbaT1hgiU40ka83wBc-wI8s45ZCV-Gg=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIC4nO6AJA&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIC4nO6AJA!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN16joNyoD0c_Yp7WexkVNlqH-WI6L8HF7_6wxfGAw353eMNGBUSGl0s-P3JizACbf5BOwwMzKbnnV2bipRjAzJ8gINzt3USSXv2kPcfkG31NNXfHDeE7VnqbmlWnPRH8do4ER7qupHD3fen3LsMfXcg4mftMrozikphfIvdsDZ1LpCTGH68OZVWlDaE-Q6T4T62y_s1KNFbvKdPVgCZjFSdVc9NPVMWPawBE8AYlT0H4KeuwyYHtdA1X5UiFcEbsX3NzFVIMWubVYJDdLHgh_bgRCXH05W5pmyZRkxTFnsYtMkohlxKkIcc1P7xbR4LgNcoHWCpBVau-dQSEts-vu38wUlrAdUuF-caDRlXmjdbnhK3jBw6owj8qBciL83AJt7y1fz5klaYjmS8ev3UF58rV-z2ONt_DGOIdDI4Wduo2Zks",
      "widthPx": 1731,
      "heightPx": 1154,
      "authorAttributions": [
        {
          "displayName": "Klugtscheisser",
          "uri": "https://maps.google.com/maps/contrib/117855073372519923016",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjU6PT3ABCHridyZr865fsoEw3547yYuOh6F5bb4ob5n1G3oEL9_=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDu6ruipAE&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDu6ruipAE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN1oYC2mESE7q_t-zW1R6NPtZqiDMLN0xMAb1qaG-wFI28PyK3_hu60vbrBHujEsnr0o91Phxl7ntO_ZPzxFY_WJGZd9BQBo-OuADUj2AxDBhbzphk2-ApDG82aLT6E-MuqLxknxtuiRRNaeg4HZXXtEpflgiWnEXd8icUJ9oesmZFXn-U7lWRUuQXF3aRDRBEG9nktuVcL5Ph2qR2s8MxfeVdvw3S48fAcGexwj62P58o_WUYAzT6MCTxUmseRPKYA140kx7gIialoGkBPLMVpRit4RALs03Uo-4EKZI0ytHspYtM2-1SS6mGyKH2CCge7_ijacfYsLrFQ6pkPDSxMxvCiHW_uE3wzXAybMNGLyxs8o-qsL7t6aB_kcrOgkPJV23w3Sv0ycUqm3gy3pA2Yj-VqFJafNJeYT_McGMBP4ZPBX",
      "widthPx": 4080,
      "heightPx": 3072,
      "authorAttributions": [
        {
          "displayName": "Avtandil Kikabidze",
          "uri": "https://maps.google.com/maps/contrib/117557971212981255860",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWHikd4T1gcBVL2xaXmWCekoa8mW4C7gSBbT4E54uJwdHWZ-hcYYg=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICx9JrwvQE&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICx9JrwvQE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN2QY-jATGQ6FWW1LA8faRymoI1sNfKzyNkCMH4w_mQmf0OH_6EempqkI2OEzuQAmAimH0yZnGMp4ztA4ThnNqpIGO8NSPVCCe7ZAst8PtOf9ZsBNNG96DxbDr8FPJelQu2k5dxhBdEPxxluLJG4_EFNWKOGNtgzk6JEYoeVgFPRdonvW5zL_3dJcU6Eu7Fyxtf2awkQYqenLeRTLiZh8qaJ8uyXEznXluI4KH8pZA0lvv1phmeyNHSViQPvJ32s4BbkmQOMtDqt2B3xM0CdTTGvLhcuyAgEGuUeLy50Z4nYgRJH4VqQKa0b3w9-9Fvk1Ie54zXnqeWt60jwYwFh9tOqSdZ27TMKUDbzS8c94D46fK6PCl934xALJJt3IYw0I5rSBspVY-HVtCUqkP4-_xshzXuGMFTjbOv5hpIegxdWECB4",
      "widthPx": 4032,
      "heightPx": 3024,
      "authorAttributions": [
        {
          "displayName": "Marek Filipek",
          "uri": "https://maps.google.com/maps/contrib/106535685814659529559",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjV-KXX8TmN-a0uiJQm71P6DWcnJN0nAzt0DyMPlSsPocmcsrz0Tsw=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICBjt_e_gE&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICBjt_e_gE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN1k25bS4wXyD1XDZnB_BbzBXv-MuCqlmButRjLo_X2v1DYc8BDuzGRev5eHbLYa8qfq6dF0jnokYTtTzhu2cymdpWhE71IdB5hiWn282ute5_6SOWEcU7YsXc3M14uL98uVxy9WEajd2OMmDJ25zSNFc3DGvj8nvRPqK4HVzNbiSOAHjgD8R_oII5TyVD-2X7vWwYAzCQxgVLSMc_MnpoNUiFLcdXlPk7Wi51CkKdg-mtyjknu20yxboG6CKgJNshh1Z7JG0HpLlMjIifvKx9nL7FjCGP79HJoQndl0kvXzKNerml2YXMX8M_88liYe1DfDWAAijkInyyXP2dWPoDHzSgbZRdOWkKzuvHq2LrtIA8wIKCTuuaAKAxMw1b2jj2pfA-29N3e3rktlis2JAa93qdeIjxFECYWjcTbheHmFdNRJ",
      "widthPx": 4032,
      "heightPx": 3024,
      "authorAttributions": [
        {
          "displayName": "Jota ypunto",
          "uri": "https://maps.google.com/maps/contrib/111560452835833490678",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjXD5fdTdbu8FxzJ0pRcR08tfS2uAwfv36GxOdxNMm67MUIFL_I7aw=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICkoOq30AE&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICkoOq30AE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN3YGVGooxJR9dWnSZvM3Gw7_EbQdWb9Lv96-VvW5TsILLLBCnZctPbZMDl9-hcOL6KEw8vYjXwEzpgSoITVnh3G8whrq0oAc2CkehYWi3XJ7tH38Trk5VZi3U9VsQrRjvEQn0JIV86a55LTl8-3Rx_dXF7nT_ov7WtwUPwa_n3q97fooxNOKXlG0dPJCSGHdEtbve4qDi3hc18EJ_ArViv0pb_Z2CIYT0iHJ-ztdOsDuJGlA60A6f6wYdwWDLumvh0-rFE_rmwiCZBajk10gs4Z66OpySQ8dEV6-3KTvAz_oh3cPc5PQbQn_2TG6uQHrAdTPI3WiirJk56ldpVPeUGNuU4I6oyhOz23xn6VQ0JDpoTEjYPsLb8nlJXZlC7FWYKtn7xArMJlWxURKVLAmFSwkOkguEwbdsl44H_xd2Yr2A",
      "widthPx": 4032,
      "heightPx": 3024,
      "authorAttributions": [
        {
          "displayName": "Sheetal R Cvn",
          "uri": "https://maps.google.com/maps/contrib/107191996766333635743",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjU6wGGiwkVpKWrErKU9ylF-rlTXeIcLW11Xsj7Fv24t6Z4fq_h7kQ=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICUiobibg&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICUiobibg!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN3QLrkNcdsrq8SNN53OrRON9BGyg2IYsi0vH4P0H0qXtJg4EOaxTszG_deWoJml8CUKkjXESHyFshOQQge5Z_dcjy4wMXfkX6q__xa8_rcSQSXLJA0geiR6gV4Xf_yxb_QZe2aYyW7lsK0-NXEzto_sfnOlWagjBa1WmG9qKOF4ZaOHIJ_4BvR3pwn8B4ykzFFhLQm9D9Bs08NgNridhAM4NsShBLrk6wOH9sCrfpfDIDt8EDTfA7pnWY7eUNXCttxy8N64xDh1-8_PFpFMPeubXBF7YwQHWzo4JeXy_V2AaDyUpxIF6YKanKsEB_HVV_u4SgEiODFwHcERU54VTmCBAIhwFNT9TEGTs3sjxTYv-rjcuGGkgXFS5Oxop8PzVzVGrniRSDtLDGsqIv_PcuMf_H-VUSgSjasmhZ30a5xnAg",
      "widthPx": 4032,
      "heightPx": 3024,
      "authorAttributions": [
        {
          "displayName": "Ishwor Bhusal",
          "uri": "https://maps.google.com/maps/contrib/108184535434220105394",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVNcqmLhOx7UQC3_i-VMbZjXpCxIinFrcZM2FdbMupjXpvK5vWx6A=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgID45JDsVg&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgID45JDsVg!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    },
    {
      "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN0Xmf3DTC01kFaqHaEF19H51cfRjYMtEEfAljx2Etn9dkTE_Dy0ULhbctc4g_7ggrojHkWe_mEHv9ZtaoUV0abnCjGavFhrj-iNhxYH5CBgGwdFKKObLDVhnBrsL-f6sIypQ4BPPZhAcaBb3fjiJxtP2C8W-iahJn9HcibJYoPkAc1WldRNWRPhPJ3T3MofjFONhlXHb_lHZWecQlXlQx0tXXgaag5V2Spy0oShE5ByPhVnYIGVsHRBl3rqGSPj3Jn7A3DLWQqdRX7Yn16g1tsfD8XLnlp_D-Yvs4Q4ZtMuu_QIaL75-2To5lR4-sda5y_1eZ5BACQ1cAWqZX9OWgzpJEOBVswTWKJEfSqk3oRVZpqIOKRB4NhOnPN2hbqvGTa7Zz69zvdDVOM3xDZmN8mAjHqdtGFIVQpR1dWEImbThA",
      "widthPx": 4032,
      "heightPx": 3024,
      "authorAttributions": [
        {
          "displayName": "Chun Chang",
          "uri": "https://maps.google.com/maps/contrib/101655476550937710681",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVhWLdsXoDVpt6XfQwvjFTc5N2FIrJHZjXOuvLI85mcykvEb54NtQ=s100-p-k-no-mo"
        }
      ],
      "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICuo8HuRA&hl=en-US",
      "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICuo8HuRA!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
    }
  ],
  "postalAddress": {
    "regionCode": "US",
    "languageCode": "en-US",
    "postalCode": "94043-1351",
    "administrativeArea": "California",
    "locality": "Mountain View",
    "addressLines": [
      "1600 Amphitheatre Pkwy"
    ]
  }
}
```


## Full Response
```json
{
    "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw",
    "id": "ChIJj61dQgK6j4AR4GeTYWZsKWw",
    "types": [
      "corporate_office",
      "point_of_interest",
      "establishment"
    ],
    "nationalPhoneNumber": "(650) 253-0000",
    "internationalPhoneNumber": "+1 650-253-0000",
    "formattedAddress": "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
    "addressComponents": [
      {
        "longText": "1600",
        "shortText": "1600",
        "types": [
          "street_number"
        ],
        "languageCode": "en-US"
      },
      {
        "longText": "Amphitheatre Parkway",
        "shortText": "Amphitheatre Pkwy",
        "types": [
          "route"
        ],
        "languageCode": "en"
      },
      {
        "longText": "Mountain View",
        "shortText": "Mountain View",
        "types": [
          "locality",
          "political"
        ],
        "languageCode": "en"
      },
      {
        "longText": "Santa Clara County",
        "shortText": "Santa Clara County",
        "types": [
          "administrative_area_level_2",
          "political"
        ],
        "languageCode": "en"
      },
      {
        "longText": "California",
        "shortText": "CA",
        "types": [
          "administrative_area_level_1",
          "political"
        ],
        "languageCode": "en"
      },
      {
        "longText": "United States",
        "shortText": "US",
        "types": [
          "country",
          "political"
        ],
        "languageCode": "en"
      },
      {
        "longText": "94043",
        "shortText": "94043",
        "types": [
          "postal_code"
        ],
        "languageCode": "en-US"
      },
      {
        "longText": "1351",
        "shortText": "1351",
        "types": [
          "postal_code_suffix"
        ],
        "languageCode": "en-US"
      }
    ],
    "plusCode": {
      "globalCode": "849VCWC7+RV",
      "compoundCode": "CWC7+RV Mountain View, CA, USA"
    },
    "location": {
      "latitude": 37.4220541,
      "longitude": -122.08532419999999
    },
    "viewport": {
      "low": {
        "latitude": 37.4206894697085,
        "longitude": -122.08559193029149
      },
      "high": {
        "latitude": 37.4233874302915,
        "longitude": -122.08289396970851
      }
    },
    "rating": 4.2,
    "googleMapsUri": "https://maps.google.com/?cid=7793879817120868320&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA",
    "websiteUri": "https://about.google/locations/?region=north-america",
    "regularOpeningHours": {
      "openNow": true,
      "periods": [
        {
          "open": {
            "day": 1,
            "hour": 8,
            "minute": 0
          },
          "close": {
            "day": 1,
            "hour": 17,
            "minute": 0
          }
        },
        {
          "open": {
            "day": 2,
            "hour": 8,
            "minute": 0
          },
          "close": {
            "day": 2,
            "hour": 17,
            "minute": 0
          }
        },
        {
          "open": {
            "day": 3,
            "hour": 8,
            "minute": 0
          },
          "close": {
            "day": 3,
            "hour": 17,
            "minute": 0
          }
        },
        {
          "open": {
            "day": 4,
            "hour": 8,
            "minute": 0
          },
          "close": {
            "day": 4,
            "hour": 17,
            "minute": 0
          }
        },
        {
          "open": {
            "day": 5,
            "hour": 8,
            "minute": 0
          },
          "close": {
            "day": 5,
            "hour": 17,
            "minute": 0
          }
        }
      ],
      "weekdayDescriptions": [
        "Monday: 8:00 AM – 5:00 PM",
        "Tuesday: 8:00 AM – 5:00 PM",
        "Wednesday: 8:00 AM – 5:00 PM",
        "Thursday: 8:00 AM – 5:00 PM",
        "Friday: 8:00 AM – 5:00 PM",
        "Saturday: Closed",
        "Sunday: Closed"
      ],
      "nextCloseTime": "2026-01-27T01:00:00Z"
    },
    "utcOffsetMinutes": -480,
    "adrFormatAddress": "\u003cspan class=\"street-address\"\u003e1600 Amphitheatre Pkwy\u003c/span\u003e, \u003cspan class=\"locality\"\u003eMountain View\u003c/span\u003e, \u003cspan class=\"region\"\u003eCA\u003c/span\u003e \u003cspan class=\"postal-code\"\u003e94043-1351\u003c/span\u003e, \u003cspan class=\"country-name\"\u003eUSA\u003c/span\u003e",
    "businessStatus": "OPERATIONAL",
    "userRatingCount": 9606,
    "iconMaskBaseUri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    "iconBackgroundColor": "#7B9EB0",
    "displayName": {
      "text": "Googleplex",
      "languageCode": "en"
    },
    "primaryTypeDisplayName": {
      "text": "Corporate Office",
      "languageCode": "en-US"
    },
    "currentOpeningHours": {
      "openNow": true,
      "periods": [
        {
          "open": {
            "day": 1,
            "hour": 8,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 26
            }
          },
          "close": {
            "day": 1,
            "hour": 17,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 26
            }
          }
        },
        {
          "open": {
            "day": 2,
            "hour": 8,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 27
            }
          },
          "close": {
            "day": 2,
            "hour": 17,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 27
            }
          }
        },
        {
          "open": {
            "day": 3,
            "hour": 8,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 28
            }
          },
          "close": {
            "day": 3,
            "hour": 17,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 28
            }
          }
        },
        {
          "open": {
            "day": 4,
            "hour": 8,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 29
            }
          },
          "close": {
            "day": 4,
            "hour": 17,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 29
            }
          }
        },
        {
          "open": {
            "day": 5,
            "hour": 8,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 30
            }
          },
          "close": {
            "day": 5,
            "hour": 17,
            "minute": 0,
            "date": {
              "year": 2026,
              "month": 1,
              "day": 30
            }
          }
        }
      ],
      "weekdayDescriptions": [
        "Monday: 8:00 AM – 5:00 PM",
        "Tuesday: 8:00 AM – 5:00 PM",
        "Wednesday: 8:00 AM – 5:00 PM",
        "Thursday: 8:00 AM – 5:00 PM",
        "Friday: 8:00 AM – 5:00 PM",
        "Saturday: Closed",
        "Sunday: Closed"
      ],
      "nextCloseTime": "2026-01-27T01:00:00Z"
    },
    "primaryType": "corporate_office",
    "shortFormattedAddress": "1600 Amphitheatre Pkwy, Mountain View",
    "editorialSummary": {
      "text": "The global headquarters of Google, this campus encompasses offices, green space & recreation areas.",
      "languageCode": "en"
    },
    "reviews": [
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/reviews/Ci9DQUlRQUNvZENodHljRjlvT2xkMGJIVkNkRmxRT0RobVozSjFXRmRUVTBwVmJIYxAB",
        "relativePublishTimeDescription": "4 weeks ago",
        "rating": 1,
        "text": {
          "text": "In my opinion Google Maps is not a reliable source for information about a business. Here is my reasoning.  I tried to get a false review removed and then not hearing back for weeks I tried appealing using the tools provided just to get a denial with no explanation except it doesn’t violate the guidelines but in reality the false review obviously did as I pointed out using the information from the guidelines.  It is disheartening and it is  disappointing that Google does not adhere to the guidelines they've established. At this point, my trust in Google's reliability has diminished. It's unsettling that such an apparent discrepancy like this is not being removed when it clearly should be, exists. They say that they take it seriously but do they really?  I have a glass company that was attacked by someone I have never done business with and provided a false off topic one line review saying they don’t come to your location. Has anyone ever encountered a glass company that doesn't offer on-site services? That would be akin to a lawn care, plumbing, or electrical service that doesn't visit customers. We are, after all, a service-oriented business. We clearly indicate our service area on Google Maps. While it may be challenging to demonstrate that we weren't contacted, we can easily prove that we travel to our clients' locations. It would be impossible for us to install a shower door at your residence without actually going there. Similarly, our emergency board-up service would be ineffective if we advised customers to bring their storefronts to us after an accident.  It will not allow me to appeal it again and replying back may help if people read the reply.  A single 1 star review by someone who may or may not have contacted us leaving inaccurate information is a recipe for disaster considering it easily could have been a competitor or someone who has a personal problem with me or a employee.  I wish Google would take matters seriously like they say they do.  I would give Google 1 star review for posting false information in the guidelines, the response time, and the lack of information in the reply they sent to me.",
          "languageCode": "en"
        },
        "originalText": {
          "text": "In my opinion Google Maps is not a reliable source for information about a business. Here is my reasoning.  I tried to get a false review removed and then not hearing back for weeks I tried appealing using the tools provided just to get a denial with no explanation except it doesn’t violate the guidelines but in reality the false review obviously did as I pointed out using the information from the guidelines.  It is disheartening and it is  disappointing that Google does not adhere to the guidelines they've established. At this point, my trust in Google's reliability has diminished. It's unsettling that such an apparent discrepancy like this is not being removed when it clearly should be, exists. They say that they take it seriously but do they really?  I have a glass company that was attacked by someone I have never done business with and provided a false off topic one line review saying they don’t come to your location. Has anyone ever encountered a glass company that doesn't offer on-site services? That would be akin to a lawn care, plumbing, or electrical service that doesn't visit customers. We are, after all, a service-oriented business. We clearly indicate our service area on Google Maps. While it may be challenging to demonstrate that we weren't contacted, we can easily prove that we travel to our clients' locations. It would be impossible for us to install a shower door at your residence without actually going there. Similarly, our emergency board-up service would be ineffective if we advised customers to bring their storefronts to us after an accident.  It will not allow me to appeal it again and replying back may help if people read the reply.  A single 1 star review by someone who may or may not have contacted us leaving inaccurate information is a recipe for disaster considering it easily could have been a competitor or someone who has a personal problem with me or a employee.  I wish Google would take matters seriously like they say they do.  I would give Google 1 star review for posting false information in the guidelines, the response time, and the lack of information in the reply they sent to me.",
          "languageCode": "en"
        },
        "authorAttribution": {
          "displayName": "Mitch Calvert",
          "uri": "https://www.google.com/maps/contrib/116061047146815614953/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWENDNs_jIaa3lukKkMZabYuCwJIIVrm5B3Gcj1jR-yJle0-arQ=s128-c0x00000000-cc-rp-mo-ba4"
        },
        "publishTime": "2025-12-28T14:16:49.243262336Z",
        "flagContentUri": "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2xkMGJIVkNkRmxRT0RobVozSjFXRmRUVTBwVmJIYxAB&d=17924085&t=1",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xkMGJIVkNkRmxRT0RobVozSjFXRmRUVTBwVmJIYxAB!2m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/reviews/Ci9DQUlRQUNvZENodHljRjlvT2xwTWNsWmZVbmc1TUcxUGVWWXhVV0Y1UlZOcVJYYxAB",
        "relativePublishTimeDescription": "4 months ago",
        "rating": 5,
        "text": {
          "text": "Both photos below were taken on the new Google 10 Pro just minutes apart and unedited (except for the white dot in the middle of the first one) to depict the location of the second picture. The first picture with no zoom and the second with full zoom of the house a mile away. Best cell phone camera I have seen to date!!!!!!",
          "languageCode": "en"
        },
        "originalText": {
          "text": "Both photos below were taken on the new Google 10 Pro just minutes apart and unedited (except for the white dot in the middle of the first one) to depict the location of the second picture. The first picture with no zoom and the second with full zoom of the house a mile away. Best cell phone camera I have seen to date!!!!!!",
          "languageCode": "en"
        },
        "authorAttribution": {
          "displayName": "Roger Hall",
          "uri": "https://www.google.com/maps/contrib/106568860865951283765/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLJal5AbVgav0EKeWlM9XhDl3B37JuMOJ5iE6mPx55arbjVqA=s128-c0x00000000-cc-rp-mo-ba2"
        },
        "publishTime": "2025-09-13T18:40:51.331007295Z",
        "flagContentUri": "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2xwTWNsWmZVbmc1TUcxUGVWWXhVV0Y1UlZOcVJYYxAB&d=17924085&t=1",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xwTWNsWmZVbmc1TUcxUGVWWXhVV0Y1UlZOcVJYYxAB!2m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/reviews/Ci9DQUlRQUNvZENodHljRjlvT2pabldHTjRVR05JT0dWd2VHWnFRbkozWDNZM05WRRAB",
        "relativePublishTimeDescription": "a month ago",
        "rating": 5,
        "text": {
          "text": "Participate in Google Play events, always love the points system and rewards. Biggest reward I've gotten was 1000 points which is like $10 (was ecstatic) Participated in the 6th year anniversary event and won. I completely forgot I chose a prize from a raffle. This cup is solid and awesome and made my day 😅",
          "languageCode": "en"
        },
        "originalText": {
          "text": "Participate in Google Play events, always love the points system and rewards. Biggest reward I've gotten was 1000 points which is like $10 (was ecstatic) Participated in the 6th year anniversary event and won. I completely forgot I chose a prize from a raffle. This cup is solid and awesome and made my day 😅",
          "languageCode": "en"
        },
        "authorAttribution": {
          "displayName": "William Bell",
          "uri": "https://www.google.com/maps/contrib/102611828288422711426/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocIlhOoJhaNDofX28OX8N2TTqwLiM-cXP2qRfDPC1cnQNruXGQ=s128-c0x00000000-cc-rp-mo-ba3"
        },
        "publishTime": "2025-12-04T18:33:51.565024407Z",
        "flagContentUri": "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2pabldHTjRVR05JT0dWd2VHWnFRbkozWDNZM05WRRAB&d=17924085&t=1",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pabldHTjRVR05JT0dWd2VHWnFRbkozWDNZM05WRRAB!2m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/reviews/Ci9DQUlRQUNvZENodHljRjlvT21RNWVEQmpOa2xWYUcxQmFtdE5MWEJwVDJaS1MyYxAB",
        "relativePublishTimeDescription": "a month ago",
        "rating": 1,
        "text": {
          "text": "IF I could leave a -10 review I would not hesitate.  I despise the way Google allows reviews of businesses. Years ago someone clearly violated the policy and left a review on my business (back when there was a policy that one had to have been AT the business to leave a review). Then that policy conveniently changed....now it doesn't matter if someone has been there or not. Anyone can leave a review and people can leave fake reviews....Google doesn't care as long as there is activity. And trying to get help is like pulling teeth....well, actually more difficult.  I wish there was another way for business to be ranked but sadly we are all beholden to Google. YELP is actually worse so dont get me started with them. The only positive thing is that in the Google community there are actual people trying to help. I have no idea if they are Google employees or volunteers. 🤷\u200d♀️  and Google ads are pretty much worthless as well . Pay to play all day long. Hopefully I dont sound too bitter 😬",
          "languageCode": "en"
        },
        "originalText": {
          "text": "IF I could leave a -10 review I would not hesitate.  I despise the way Google allows reviews of businesses. Years ago someone clearly violated the policy and left a review on my business (back when there was a policy that one had to have been AT the business to leave a review). Then that policy conveniently changed....now it doesn't matter if someone has been there or not. Anyone can leave a review and people can leave fake reviews....Google doesn't care as long as there is activity. And trying to get help is like pulling teeth....well, actually more difficult.  I wish there was another way for business to be ranked but sadly we are all beholden to Google. YELP is actually worse so dont get me started with them. The only positive thing is that in the Google community there are actual people trying to help. I have no idea if they are Google employees or volunteers. 🤷\u200d♀️  and Google ads are pretty much worthless as well . Pay to play all day long. Hopefully I dont sound too bitter 😬",
          "languageCode": "en"
        },
        "authorAttribution": {
          "displayName": "Amber Allen (SurgeonDiva)",
          "uri": "https://www.google.com/maps/contrib/100073279580671925082/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVFEI9UgV-OibAcrw-5ZrZhsmYdRhfyk-ZM81UDtJzCaambSeoypw=s128-c0x00000000-cc-rp-mo-ba3"
        },
        "publishTime": "2025-12-07T22:12:40.451765911Z",
        "flagContentUri": "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT21RNWVEQmpOa2xWYUcxQmFtdE5MWEJwVDJaS1MyYxAB&d=17924085&t=1",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT21RNWVEQmpOa2xWYUcxQmFtdE5MWEJwVDJaS1MyYxAB!2m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/reviews/Ci9DQUlRQUNvZENodHljRjlvT2t4RUxXZE5SVTVvTVZCNWRGTnhjbDg1ZDBwc1lsRRAB",
        "relativePublishTimeDescription": "3 months ago",
        "rating": 3,
        "text": {
          "text": "Visiting Google Headquarters in California was a wonderful experience! The campus is beautifully designed, clean, and full of creative energy. The atmosphere reflects innovation and teamwork, with friendly staff and an inspiring environment. It’s fascinating to see how technology and creativity come together here—definitely worth a visit if you get the chance!",
          "languageCode": "en"
        },
        "originalText": {
          "text": "Visiting Google Headquarters in California was a wonderful experience! The campus is beautifully designed, clean, and full of creative energy. The atmosphere reflects innovation and teamwork, with friendly staff and an inspiring environment. It’s fascinating to see how technology and creativity come together here—definitely worth a visit if you get the chance!",
          "languageCode": "en"
        },
        "authorAttribution": {
          "displayName": "Ali Alizadeh",
          "uri": "https://www.google.com/maps/contrib/103964089538037033988/reviews",
          "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocK9I43ZGiaxfWCN4DENWs1r1KejWi4Jk52aX-s6SdzQ8oUGjjTM=s128-c0x00000000-cc-rp-mo-ba4"
        },
        "publishTime": "2025-10-15T19:20:14.281414329Z",
        "flagContentUri": "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2t4RUxXZE5SVTVvTVZCNWRGTnhjbDg1ZDBwc1lsRRAB&d=17924085&t=1",
        "googleMapsUri": "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2t4RUxXZE5SVTVvTVZCNWRGTnhjbDg1ZDBwc1lsRRAB!2m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      }
    ],
    "photos": [
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN3twHGqIh8aJ_igh4RCwizWxzt3rUY_rNuO1imWDKi4aqcbgfuk8XGNvgJGzs7pFfdA9WhlW6dfosNbYGjO9XFSlqVFRg6fcYs4BNd0oDYYo2B72z3d--wBqVf5RdmPGsgdV3L7o4AWMfk47i_xsdbpA2PpX64Q3xq4US1aFDJmqutoCVYy17xQFx0c_xeZsY1V1Bir9eJ6JPsT6Z4cdiqnl8pkfJs5WXwd6W0NDorhKwee32uNLdMjJvOGZEyFU1in9v3V2-8DheOyiLv3UzKL85iun1LE6UH8CZZmNITKZXCVREdbn6hIVEnpx9wnxeybCOrnmkKuMY9R3Ws6DL6mW93Gxnxve6GTtjV2Ow7FeCmhVcbrsQOXl1vbVUNeQ14rEcx73YXok5ExOigYB3iC1E2p4DhoECz7rv7KDFftSMY",
        "widthPx": 4032,
        "heightPx": 3024,
        "authorAttributions": [
          {
            "displayName": "周雋Jean Chow",
            "uri": "https://maps.google.com/maps/contrib/115966502285988585651",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUHx2VmwFABKfbRFp3SjujkqaOrVxn6krxZdXr61TKVQJJZQ04V=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICs693WrQE&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICs693WrQE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN2_fw_3qWz7IYT8zsOitMApM4SOEmGDodQT55d3-c8qaOJVyUpKokvRagex0xfp6UFir2brqrVU7cwaiZfDHlOKdmN3T-vzV1ZOzqZwddD6W3oOVwgTHDv5-VggN1y08Two6xiYHJpjQtjz7hNQymGTCUljoU4LEbV73RN6I-NH_0n0wrU4URRCYoZyz6j95-G2PyGIGbhqcWRoJfDPZrWSv8Ww2V1H1egxgjYwcXEhhvsl2Op0s4vbhzwNJKCxzQl50EvpYYCx1w_DF8hzk75dvXx3slil5wP89ZI8KvCnth5WgC4ygarplFZbE2dH7rb8l8WMnBMf8ILQfjPAR5n6v2ydSxajMjkLuuCA85TB6HROZhlaWsK7SBI7SxiwYlW-4RmC5ggg1w4sMh-eBEgnLYdIW-EruJFM_YDeNMcIGgxJO9yXZbQR4fxZFg",
        "widthPx": 800,
        "heightPx": 662,
        "authorAttributions": [
          {
            "displayName": "Alamine Hadrati",
            "uri": "https://maps.google.com/maps/contrib/107180963885482222151",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWoOjdvQFWiYTzpPVVdHoHq4GAz43bluHXDM1TRjopFmg1ykZo=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhBaQEnT7ncwm5M0EEZ7PyUM&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhBaQEnT7ncwm5M0EEZ7PyUM!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN2pdAz88H-Z-O1p4l1ZeVe1wPEVBfSyLTG85w0468-3cysJW-YSQCCRlO1QvvVzMUi-MdSzgvKr1WQwxwprXL9QVP4V008yXkz8sn19mrZup1zh-lZ3lB1g5O4eAQyA4ye-OXK6p9xn_T3QEmYcoMI474-8hDmr-lhRY_cpWR35AwU2P6zwsR2DnNkVybnva_EA8HX3ajtB2MdsIfADPuSmAfjNlb-OlW7zr3ijMbBcZhhalP7b8IUBXVQ2at416Xl79prLIYppCsJ7WBLUqo3ieTK8r-rw9DwbExdjm7YKeUgbT1BfZPjrZsjyR73h1HV5wthf9WVQid5Qp_6Y_9E3u87IbUjYAEdMkOW9WzcBKuNt4qWPFKhfzPmM2ioz4iKPzwpLl_0LwRUJ_cYQhnPkywNnNqucLknQNKwqGwKcTA",
        "widthPx": 4032,
        "heightPx": 3024,
        "authorAttributions": [
          {
            "displayName": "Fábio Celeri",
            "uri": "https://maps.google.com/maps/contrib/113885422569269654235",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUDVWrwEk_IuxXBhsxGbdKnbaT1hgiU40ka83wBc-wI8s45ZCV-Gg=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIC4nO6AJA&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIC4nO6AJA!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN2XPSQRj78ZN6skHDVqhKfw3EJIKlqqLiXtQbkzrvEzey-99veGDZTMQF0ONq4jEwXmX4Mz0SJugHiP4S0iM-CinHwip9201kIJEqSogPhudS-ejB2IU8CsPss_3o530SCclJQi3RgOWJJd7I95aSRgBV59iiFWFTD20wj8z5wpFLG08VQAblivQPWAQMqJ6vwOIzz6ILtc7CCPC6snA0K5ODZyvULbokKCYnp1x4zTCAXHKt7e1YfCQtmB4PsX-hrbth8YdLRxHf6m4FXOpajAiJ0lnfGPYYj4dxlmGioOYEUxFOyUKCWwjD90WS1CC1jRWivOaw-P4mAjA_yMPaquEc3zIjgFqIE-jNwiZlTKoYh0MHeHWlakt4VdryiE-w6qDo9l4bcDN6vE-l31RQqt2heVRw8hurvPs4c-21VsjcnZ",
        "widthPx": 1731,
        "heightPx": 1154,
        "authorAttributions": [
          {
            "displayName": "Klugtscheisser",
            "uri": "https://maps.google.com/maps/contrib/117855073372519923016",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjU6PT3ABCHridyZr865fsoEw3547yYuOh6F5bb4ob5n1G3oEL9_=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDu6ruipAE&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDu6ruipAE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN0J-sx7t1WNiAyamrcmnc1mNCPu554GNH6OrjwuijJj6HypouSnJpueQa5PcglYKMfVCq5kXOSAHd1kg3TvWjKxq8HCOj6tCU2reweI1RBwiTASVhT-N0Iv2C7LoQTDyvqGGzaSud13fpctW7JPmY_65IHS-o8r-YU6-dFfic5CdiEimeFUEIKnxQ8ZAZ6Q8EwFdONU3HsUryP3QOdMe_Y3GCFq9AbgFIvgNv7u1OXyZLZHRbx8-qMtLJ7Q5Z7hbb-rEMCe3zWd3AXK8pP85Eaty9i1Fgc6hkUjxOg-RAN9rOPJTtVUHwUvfOeqq2rUXRW_qTpCTmPahNTKJpWjaNz9WawK6bsjDGSQdxnCkujvwDri5TECG3bRJztVyEKuPw8qqH3ydRTNdh0xIFBc8p7jVyUC6Igfw0Cd-ORDF3HClxqj",
        "widthPx": 4080,
        "heightPx": 3072,
        "authorAttributions": [
          {
            "displayName": "Avtandil Kikabidze",
            "uri": "https://maps.google.com/maps/contrib/117557971212981255860",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWHikd4T1gcBVL2xaXmWCekoa8mW4C7gSBbT4E54uJwdHWZ-hcYYg=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICx9JrwvQE&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICx9JrwvQE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN2Rv3HuhekVOcHkyWaBj5JTV2yYGDgTMIG_6NptigCIMMst6F2jHZina7_azAhr8UgGWF-gtQmE1Wy4GgYSAWt8NjNbMR9Ndrxub-rdWCRKco-dFuH_zkb8Tw-wzFTG5LNiTzCazhyTkQlYEYhlLH_BPIOW3GDFhEBfVWUa6w6oXtQNH0LYOJ2JdQ_deFzVAnIpz4x8wq4EmbsOWbQPyN3yAPhtHc7eOK61rlqX4q7Hln-vttZ5b8R-Iv-MuwXz56m7xk3Cx16iU_v-dA45f6tvlUI68Ju96T7zCxq5alc6e1392E429mjlaZkPZLbNmgY-GdmlBP1gfTgk_1MZuKRhc0vVwLK2015IejLLupPWMB0sfj1H5iyRJ0Gtbko4GtuM9I0VvQeYdvb2cLXTG2AQRroL8u4vDPHMaHHBjCy2FRp5",
        "widthPx": 4032,
        "heightPx": 3024,
        "authorAttributions": [
          {
            "displayName": "Marek Filipek",
            "uri": "https://maps.google.com/maps/contrib/106535685814659529559",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjV-KXX8TmN-a0uiJQm71P6DWcnJN0nAzt0DyMPlSsPocmcsrz0Tsw=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICBjt_e_gE&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICBjt_e_gE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN3gh6jAhljh13CD6ZkI0CKcQJBeh7JWMYDDkg0NdLUIp7i8re4e05D1uh59Qq3cVNGvIeaPdBkc4rj2FuMkE8sRE6woUVVy0UZrrKcp7LIrQ2ddVQpypYcGwMlVwgP1P4HNvwLDJ1aXfkESOBWZrw45NdjOVOQeLio1DBRfDamuXLzMyRFR_8j4AmDj5FleoOE7b-N96-5BqGLsqCDLkLZ_WBucl2FHNAtiJgyfo5ji89oLrqWi6CRQEKK9rcmYWvSpl_knn-EtEwiyb1FB1chEIWwIwGQ-ttJeZOrs_ghlLZJhnOO3I8stRRVW7tx14dwQWD8Elp1KF-xTFvZzG1FVeoLLCXGe58Qfuh_LCOz6faHWdIsGLfKr1cPHLnbHh-Ss8AMkbS2tZsMAFlAzrmGAqU58UcRKR47hK4K26jDu9g7s",
        "widthPx": 4032,
        "heightPx": 3024,
        "authorAttributions": [
          {
            "displayName": "Jota ypunto",
            "uri": "https://maps.google.com/maps/contrib/111560452835833490678",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjXD5fdTdbu8FxzJ0pRcR08tfS2uAwfv36GxOdxNMm67MUIFL_I7aw=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICkoOq30AE&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICkoOq30AE!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN1c5mfCveOpn6BTR51B-RvgKrtKmfzUAH-eK2vk9Eg7C6CQPz2t1JfryFH5na9TqmuYWFKjKa4906FP_py7nd2E2JSv8zEquNWktCFUU4wbhMBN_FH2R7tUDTHfDKx1E1DYl140_NCnS2Yhr4uNTBL0lX8yThsBUSxw6yaVg9K6rOq7vvCVUgimrbdsfizXKCiXp3kM7jFSdeZqMEuDUOz_qvPURTKszKe7uSPzGgvRTGhfxO_q8c5x3YFl72CqfKZnpcTATAN1QzQ8Ev78FC0VqT1eHes7jZWFDOPFrFlw7Bk0x1gKVmc7OZr_OQMESEjn3dQpipIpyvh2dSbOQY--l0MgPXf71mqF4Xuzff8jt8SSDarFrPlteFrWNx9BBRvMVw9t_SUfgroN5IflsLmrA7071CZy-IS9rjZVut7hKQ",
        "widthPx": 4032,
        "heightPx": 3024,
        "authorAttributions": [
          {
            "displayName": "Sheetal R Cvn",
            "uri": "https://maps.google.com/maps/contrib/107191996766333635743",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjU6wGGiwkVpKWrErKU9ylF-rlTXeIcLW11Xsj7Fv24t6Z4fq_h7kQ=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICUiobibg&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICUiobibg!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN3G9cAWuyyGzVnh7xSRNZmEju6-rIZ81yBwaT_aqn-r_Lql6Hcv-2vwJKdLQQI6k9WXwGcGz4eANNdqdGsYvHZKGm4bW7hoXWT9zxkXjPA_QFjeXBjRj6TkX22cr-E_IXDSqm5pFwPNGYXl9StoqE1OuwpzouFd078BLZNHHwPsJxwtscf1RKOWEvFnRsmQ-FZI2GJZe9Sg6yqBA6GwReQeILUt_1kQAqH8MqepzcEWww7g2NX8-ld9PJqu5JlFU2ua_jDRaOAHIQeS93IyCg3azA11k2O1hglkmEI-WMvt6OofRlUi3adsGpoUhoW1_eb92NyZ7v9hCUf8waP6Z_eQcxyeyCJgay8Q4r_qH1NLvPELpKqR-3uVZYtbeNhoFKGlzryq9NJ_2qKi_OG63lOl4R_qtnVQn5H71P41rm2wxw",
        "widthPx": 4032,
        "heightPx": 3024,
        "authorAttributions": [
          {
            "displayName": "Ishwor Bhusal",
            "uri": "https://maps.google.com/maps/contrib/108184535434220105394",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVNcqmLhOx7UQC3_i-VMbZjXpCxIinFrcZM2FdbMupjXpvK5vWx6A=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgID45JDsVg&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgID45JDsVg!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      },
      {
        "name": "places/ChIJj61dQgK6j4AR4GeTYWZsKWw/photos/AcnlKN2guN6ETlLWunb_9H7POc5HEbCOHfzt1SW_WVc18rfwdchfsxkVjxjtekbiQ0WqmVT0shpTC88h3JUIZ2ZprBvOBxiiFGAtJTYZZSiX4EHrM-2wMqfk0NuuTY3P5i7bMFhb1_9K95Zw0m3Wq3y3YkFh21N4JsLQvCVDcTZqAHdVFj-ccwRXhEb5meWPS81_B8LWHKdEtBWHWKNeffCVcBLQHgpWQIBfWr_Xia-uF4Nq6PL4X0Eke_TZJBl03MZWxwT-EqzjGv88wCyGiGMrmBObzUWyDdGnYJZac2_3CcbaY8mfYoU7MYMD4bHMelZuYDKZYsHI5dhU5aYworY3etKLGKM03HR3WQsGO87fndbway42r4Vh45RmVhGP-XkRTtwdCNVggRw3YICRsLsqwRaraKXpE-Ahx3KFe9v-pH0ZNQ",
        "widthPx": 4032,
        "heightPx": 3024,
        "authorAttributions": [
          {
            "displayName": "Chun Chang",
            "uri": "https://maps.google.com/maps/contrib/101655476550937710681",
            "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVhWLdsXoDVpt6XfQwvjFTc5N2FIrJHZjXOuvLI85mcykvEb54NtQ=s100-p-k-no-mo"
          }
        ],
        "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICuo8HuRA&hl=en-US",
        "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICuo8HuRA!2e10!4m2!3m1!1s0x808fba02425dad8f:0x6c296c66619367e0"
      }
    ],
    "accessibilityOptions": {
      "wheelchairAccessibleParking": true,
      "wheelchairAccessibleEntrance": true
    },
    "pureServiceAreaBusiness": false,
    "addressDescriptor": {
      "landmarks": [
        {
          "name": "places/ChIJN8KDNnq7j4AR18Xh9LVB4c4",
          "placeId": "ChIJN8KDNnq7j4AR18Xh9LVB4c4",
          "displayName": {
            "text": "Google B43",
            "languageCode": "en"
          },
          "types": [
            "establishment",
            "point_of_interest"
          ],
          "straightLineDistanceMeters": 124.09476,
          "travelDistanceMeters": 244.21744
        },
        {
          "name": "places/ChIJ1yjFJ1-7j4ARG_RVqFD1h7k",
          "placeId": "ChIJ1yjFJ1-7j4ARG_RVqFD1h7k",
          "displayName": {
            "text": "Google B40",
            "languageCode": "en"
          },
          "types": [
            "establishment",
            "point_of_interest"
          ],
          "straightLineDistanceMeters": 53.60039,
          "travelDistanceMeters": 314.32364
        },
        {
          "name": "places/ChIJpcZsz5K7j4AR6vGsP80OBBo",
          "placeId": "ChIJpcZsz5K7j4AR6vGsP80OBBo",
          "displayName": {
            "text": "Google B42",
            "languageCode": "en"
          },
          "types": [
            "establishment",
            "point_of_interest"
          ],
          "straightLineDistanceMeters": 27.992899,
          "travelDistanceMeters": 209.73218
        },
        {
          "name": "places/ChIJo4za6vi5j4ARMua093RgGGA",
          "placeId": "ChIJo4za6vi5j4ARMua093RgGGA",
          "displayName": {
            "text": "Charleston Park",
            "languageCode": "en"
          },
          "types": [
            "establishment",
            "park",
            "point_of_interest"
          ],
          "straightLineDistanceMeters": 296.3728,
          "travelDistanceMeters": 420.12927
        },
        {
          "name": "places/ChIJL4yruhy6j4AR2SldohThsJo",
          "placeId": "ChIJL4yruhy6j4AR2SldohThsJo",
          "displayName": {
            "text": "Google Athletic Recreation Field Park (GARField)",
            "languageCode": "en"
          },
          "types": [
            "establishment",
            "point_of_interest"
          ],
          "straightLineDistanceMeters": 312.62656,
          "travelDistanceMeters": 415.90707
        }
      ],
      "areas": [
        {
          "name": "places/ChIJF4Yf2Ry7j4AR__1AkytDyAE",
          "placeId": "ChIJF4Yf2Ry7j4AR__1AkytDyAE",
          "displayName": {
            "text": "Googleplex",
            "languageCode": "en"
          },
          "containment": "WITHIN"
        }
      ]
    },
    "googleMapsLinks": {
      "directionsUri": "https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x808fba02425dad8f:0x6c296c66619367e0!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA",
      "placeUri": "https://maps.google.com/?cid=7793879817120868320&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA",
      "writeAReviewUri": "https://www.google.com/maps/place//data=!4m3!3m2!1s0x808fba02425dad8f:0x6c296c66619367e0!12e1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA",
      "reviewsUri": "https://www.google.com/maps/place//data=!4m4!3m3!1s0x808fba02425dad8f:0x6c296c66619367e0!9m1!1b1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA",
      "photosUri": "https://www.google.com/maps/place//data=!4m3!3m2!1s0x808fba02425dad8f:0x6c296c66619367e0!10e5?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA"
    },
    "timeZone": {
      "id": "America/Los_Angeles"
    },
    "postalAddress": {
      "regionCode": "US",
      "languageCode": "en-US",
      "postalCode": "94043-1351",
      "administrativeArea": "California",
      "locality": "Mountain View",
      "addressLines": [
        "1600 Amphitheatre Pkwy"
      ]
    }
  }
```
  