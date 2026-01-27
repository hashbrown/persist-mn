
# Places Text Search API 

**Api Docs**
https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places/searchText


FIELD_MASK: places.name,places.id,places.types,places.primaryType,places.displayName,places.shortFormattedAddress,places.nationalPhoneNumber,places.location,places.googleMapsUri,places.websiteUri,places.photos

**Search for "Bang Brewing mpls"**

```bash
curl --request POST \
  'https://places.googleapis.com/v1/places:searchText?fields=places.name%2Cplaces.id%2Cplaces.types%2Cplaces.primaryType%2Cplaces.displayName%2Cplaces.shortFormattedAddress%2Cplaces.nationalPhoneNumber%2Cplaces.location%2Cplaces.googleMapsUri%2Cplaces.websiteUri%2Cplaces.photos' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"textQuery":"Bang Brewing Mpls"}' \
  --compressed

```
Can also add fields as a header:
`-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel' `


# Single Result - Place
```json
{
  "places": [
    {
      "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY",
      "id": "ChIJCQL2l3Yts1IRzcRk-Zh5rdY",
      "types": [
        "liquor_store",
        "event_venue",
        "pub",
        "bar",
        "store",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "location": {
        "latitude": 44.970469600000008,
        "longitude": -93.19258769999999
      },
      "googleMapsUri": "https://maps.google.com/?cid=15469153993013642445&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgBIAA",
      "websiteUri": "http://bangbrewing.com/",
      "displayName": {
        "text": "Bang Brewing Company",
        "languageCode": "en"
      },
      "primaryType": "food",
      "shortFormattedAddress": "2320 Capp Rd, St Paul",
      "photos": [
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN0cC4etXB6brgUUdOP_nJTWXrqYfMA8qRknHZ4GewgO3wzOyo_pXHL40xiDCVudym2BqwY8IZFyJK71vOxntNTAy7YWzSXj8uEWyRVl0ZtAxpNYCCwi6PwNgT9cAAV_-a9lhr9irmZzZUAH_fmtKGWdmX88PaXhqbppCEr6bJ3Db0EU2M1Vo2UuX27Q2kTwuB3jiBK6MyMy0R4BeGJjUnyWIPb9W2qw41IorFcVCVfPe48kN3MO7qbHFjTSHDlKP7UwXzsgM9fWid1AH3-6KWnz0lqpAt0VN1cl7dudSUU",
          "widthPx": 1249,
          "heightPx": 1500,
          "authorAttributions": [
            {
              "displayName": "Bang Brewing Company",
              "uri": "https://maps.google.com/maps/contrib/118329367049207079914",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocJZPr_LIXze75w3TVlEqFgFvBGbBMtmOh2L1ASzcbxtPeG4=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipP5AZlF47MhnK-CZ8rgQC515-LQK3jKQU2Uxj4&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipP5AZlF47MhnK-CZ8rgQC515-LQK3jKQU2Uxj4!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN19ZG-FbuC5c9llT75cRG2OOJfp4GCUNrorh5jAJ3BpAg375y6UU2Vu3hKKQUGEJM-xw30ijwc1ym5ZiowJYZ02W8_c_QaiDwwv-ONaHS1Ya5JxIQ5t3Rxa1qUmcotVeb7zTRp-92K942maQ63sJb_fUkk2ewuM0UBchjH8lZ85SOgHZHtq0LmeOm7xcjVYVEeiwMzxysYFU0p1fB9EV9kPU5VoezEI0iSV9Xp4pFiV99uypCLZ9vj1e_f19UB7zf2CnEOlcT47SvNzRg0yhdcNl2fEDFYJXbsMfRYQc72qQaIv6-v64kTwWiNGq5CKXthlVze-8L3qJGFRJZ26t2KVhXqaNOnBhzeEr3KIzRzqPC7HJ7_EsUMktpY0XL0BAXxe_y0wEO_57y85zHwmiYbvmjbdAdSCOtcmI-kb_sVIcg",
          "widthPx": 4800,
          "heightPx": 3199,
          "authorAttributions": [
            {
              "displayName": "Matt Wellumson",
              "uri": "https://maps.google.com/maps/contrib/111025253317439441493",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjXz5GhzSdjhSYRLOUpzQxIU8LO65-F3k3Ib_fehRQl_UzdeYRx3=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgID6mLzdSg&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgID6mLzdSg!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN3XmhXu5Fsc_pHr6ezm1fSascalIv777qR61c5eBtThigsT5fncKPXatUu54cF-CtzozC4-DF8nIZfAi7XkQxY50RbNzj9cCIh5GOJJBluplEQbrXLXYSXXuqH5h-jrTeQdG9Xi4-U9nDmqOFYLoVXVAZGjmiFlew33FpMnl8BzAgZ_N_UXe2sl4FdS3_qzmcUSAB5LcnHICohr-9tUWsOQVxxqbHAcdm8rB_DJWC8tJgqR2fHu4El0-GkVBzzYF0W-fIeLnybPL8etufqA9eIpytpJ9G-xpWbXa701W6c1OsBB-HAJ46vr9rybVy-mU1bQTUu7oS1c0J9jYtzMxoqVicMLME9FPdYV7jmdCzGxcuqu29sSukuU61Rpv0RPVqN_s3Aq_DrAY3FtOcQ9DUhkO_KfuVIiyfuc7QzcPzpb6W7P",
          "widthPx": 3840,
          "heightPx": 2160,
          "authorAttributions": [
            {
              "displayName": "Will Outlaw",
              "uri": "https://maps.google.com/maps/contrib/108784161351797329795",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUlGiyikXBqPaWbOSMN8lJG1A51FjbCRJ8_rMXit2dIgQj2do8f=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDq17703QE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDq17703QE!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN2f8VYXeKSsyCo6IMtay9nqQbbBaqleEEaxTJMOVbQBZAg1sX8ZPLFAU9lg_i9kocQXTZ7FOazbwjdBzca2f0HhDLMaHfMgDcnECJg-kBRuEq8DIlgDrxT5kQDK-Ugg4ggrOKaXB-8Bjlt4460mHCGyg5remmmQN-cz7zSS5qJKktgAdaiv9fbPRmBcD22iFCjR30Pu_uPCJFSKbw38RAOdph72lfIXavuR7wVaykCg_RJiNLh4d1h3qcRqK-PGsiIvkHAe-y43YewCZOkkHd4TgHYpgH5MPSSoP-pup5YY7ZKCvpKefQoOSXzPMwb54YBVn4RRHWhXwZERtObyn-T9a0ZuZbRJLpXXgWxksntx-3mwmEfI_oQ-i_vJcbU6Jcrb6FO_PvL5ipsooPXUQEZRkWWIqmVTGVQEY9fxVnv_Tr7F",
          "widthPx": 4800,
          "heightPx": 3600,
          "authorAttributions": [
            {
              "displayName": "Matt Wellumson",
              "uri": "https://maps.google.com/maps/contrib/111025253317439441493",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjXz5GhzSdjhSYRLOUpzQxIU8LO65-F3k3Ib_fehRQl_UzdeYRx3=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDZjpOO-AE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDZjpOO-AE!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN3uFSNQxHjay4QriHWSwBiH7tHdqkqXpSXWSisnPcihdRF0a3ae1oGSSP3PSJKfuSdLLMwBs9102enysb202KZN0gZxBh6agPXlYCftqBB35grtnikOhNepQvqmeznkK0lzq7ZHomc2Me0iqk-2mmLvcirtpPDwWtHyEpKx37hJtLB_nWP6u7WLFFUmSaS6kRypGzwaijWq3qtSEVNrOgvxm6d1w-TePe7GdLrCVODeVPvnWwE0OqW3oxeonDV1tCfifYpRH9xGSH3czVhwls6MVT0KyLdd7VVCSRS_rdo",
          "widthPx": 3024,
          "heightPx": 3024,
          "authorAttributions": [
            {
              "displayName": "Bang Brewing Company",
              "uri": "https://maps.google.com/maps/contrib/118329367049207079914",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocJZPr_LIXze75w3TVlEqFgFvBGbBMtmOh2L1ASzcbxtPeG4=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipNfUqX9Rx4Ms9N-dQir_N9FYqmAptkX4_G29Fw&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipNfUqX9Rx4Ms9N-dQir_N9FYqmAptkX4_G29Fw!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN1kdvzv0xCw_rOpA10pBa8x29sJ4I72zF0z3JIITgyuze4y7HfvpuYicqrzkflBjqzqMTHulqgm3J8RqGbESTozoXpPbRFndCtFioI2_DxHJheBZF0fMbfz_33ZQhYNvNViXE7y1H1gHEUTD04nhPkIy32HEp3hvy9jUgeQeOSWCG7SkFfYkvEs7BT_RLmy9uckpIAWNcV387aLutJqla3lmiidtutj6rM7JHm1OEW79ChMsawI6ndv6-6oLueDMF4uXuA0OnIjZ1UDHLtKyE7fXGX3US_daQeLGNdSQ6t776URFee0ONZLdNNdE_O-WwB9DjPvFDks3_3lUH-Yk3LP0ynVxoaAKOHxvu2B7S2DMea_RQNZD-Sf-jr2ZUFdFo7n3RP5ybehWEYmETi_zqbWPzu2LlK_4w8ZHbCjX5Q",
          "widthPx": 4800,
          "heightPx": 3201,
          "authorAttributions": [
            {
              "displayName": "Shawn McDermott",
              "uri": "https://maps.google.com/maps/contrib/102312430434899471176",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUrwkXmM3bOLCdRTlYGVkDXExxgUMIVt6bH5UyC5rCYAm2i9hn5Aw=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDx6NvMUw&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDx6NvMUw!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN06hOcUj4gajfygFgsFRzj4xB5zTW3xGA0HqpvE8a2M_tXurFazX5Pz5Brs1IQmpiob6yH70Ll9ivYJWSBqcnm1d8HmnHkWQmcEtkrdUeThhLnXhUOpNgQYXWpb5kDgBpf6hUcMZPC8EiSHfxiaQOgx7eBa2mZ8e-IvJlgDUEAap6m_Gb86raFfHwhiqfRh7eJ_XNJouXxhaX7iQ_fDhNWyDOzhUJGLL1G10PARrz3InQnqfjUigcou_lOJmSdjv5A-HKcgkzlbJuq167Mmz3em3qjfbbqhlkD47afIJL0",
          "widthPx": 1440,
          "heightPx": 1417,
          "authorAttributions": [
            {
              "displayName": "Bang Brewing Company",
              "uri": "https://maps.google.com/maps/contrib/118329367049207079914",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocJZPr_LIXze75w3TVlEqFgFvBGbBMtmOh2L1ASzcbxtPeG4=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipP5OvuE3cNIOlSjCN-880eI0BE4_xn4PV2wDRE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipP5OvuE3cNIOlSjCN-880eI0BE4_xn4PV2wDRE!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN2JLPPA4N0PNEtdx8E4TDXPABdSgS7c5EzjpXuSEgJ57QllCIGodHIP377r9EzL5cd-a_qejjEevrci5TvWx48cEoX7QT0y3R9PPnWfD8_Zyr3pzFmQreHNYkc8XGS4gSF36owQVwAUAUlvALeWB1dPgPwRB19F45XTNr_Y6-tO9O68Mw1B8JGVL_b_kb020We4AIfdbt3gelfP0OzJon08N3cyy0Tw4zmfG0cLBBAUP7FvDaHIVbKliw4BsD-J7Vd1GNwdAurkA7cd6FKyiZwlL-bytVEL27a9fmRhEERA3_H15GLCp_wTx1LopxcWeC9lE6iXHiMNF_c5oXhlNXfUlUfaFZXA-uEz0vyW1WI9vP_-H5TnxuqFPRkckjQg1qMHcG5EWtJ4qnQQ6NU18uIG8XFPJlxytuGRMYxsxWA",
          "widthPx": 4000,
          "heightPx": 3000,
          "authorAttributions": [
            {
              "displayName": "S K",
              "uri": "https://maps.google.com/maps/contrib/116111077687238028536",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocLQYUIO5JKSkqlgwZnNNEx6Bvm_bKwTWHIJCdC7t25Dk5lzO8M=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDrp4e9Lg&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDrp4e9Lg!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN38ZpagE9B9M1akdlZ1_AEyFkCE5Kx-5gQc4kdR2a8RHReQZE-lcHOeYS59qYJM4Vd2tj2aDxeecTAcGSe2uhXONjSrapr6VYRCpklWSjF0Rejd2GaZk0O_icUwyekhjXle03KZ69MVH1sY7_NsFVSsInE_L9hGRbuLOFEHbr2QKZ_4_YpIlsh2nfatXV90gfjrsxLzz_tTxX8OMZFI7pLQCUdtpxWONSi_VfeBCON49-xo4dpdR7ESi4kwE-y-Dk-LyThiHkdAahL8K6meQ5-1u7AxwGqSmEzniMUt7EjiKk9waGROjmR3Gsfq2ic1E8PV13-shBo5K9kTtvgBpkeMex7H6pB0Yd3KuoXeX0oUA-duJ43Bf1yrc31fgcUMwWs6eMren0iRjidUY5oQv8VEeqL70Mmyjt2Psn3BdfaTLl8W",
          "widthPx": 1200,
          "heightPx": 1600,
          "authorAttributions": [
            {
              "displayName": "T D",
              "uri": "https://maps.google.com/maps/contrib/108005448133058217025",
              "photoUri": "https://lh3.googleusercontent.com/a/ACg8ocIDyhjnXKJeiF3ixd8zBe8P0uJriSpDiSJ7dHEbRJfZDkJdOw=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICJifis6QE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICJifis6QE!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        },
        {
          "name": "places/ChIJCQL2l3Yts1IRzcRk-Zh5rdY/photos/AcnlKN17lJCIdGgcGUzc2u5-YBks2LaThVQj-jyLdp1JgGu9NAx0ow8vTSFxCMJ2s8FEKFfD3NqLtdn6BWL1jJ3g9cZfCWwFTCAGUsqwg8-6jf_7nfGKWzHl0lL36xxIwkiX2N96tKbWDXkyFMbtzIxz-dZTKrN0dJJT__dpXy_AsQtFlSONKL8SA9fODPcEmUYwy2F65gZxbWiW0Z3mXHz-LYOlf12-sfkrWx3EMu2aB9wDs0zhs2XmA8NdM86HTz1Ud3ULVT06kQITvXcBDiELAAzrYRWmBsdkfKlaMk8hQld9vzAnlaZI3SzCw-hy7a71perpwIAts7nj24XXM9P8_rEo14Hs4zMXiN3PTmQn7yx_aqSVVuTn7mfaaElrbBVRgWspOs1EPnlp2hx2OuiSTwdQeF16QxVp-NL946e8vmPC9ly5L-U7i3AcFu_kuA",
          "widthPx": 1500,
          "heightPx": 1125,
          "authorAttributions": [
            {
              "displayName": "Farrin Foss",
              "uri": "https://maps.google.com/maps/contrib/112782646844359301882",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjU7NiWA6kSNV0zdh9QT9ALWnmi8IYkj20pD2I6uTJyu0dfgIKk55Q=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhBBNLPFMqn_xq3d4oULpyOs&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhBBNLPFMqn_xq3d4oULpyOs!2e10!4m2!3m1!1s0x52b32d7697f60209:0xd6ad7998f964c4cd"
        }
      ]
    }
  ]
}
```
  
## Returns Multiple Places

**"textQuery": "Bulldog mpls"**

```json
{
  "places": [
    {
      "name": "places/ChIJObThls0ys1IRoITXyZDymBM",
      "id": "ChIJObThls0ys1IRoITXyZDymBM",
      "types": [
        "bar_and_grill",
        "american_restaurant",
        "pub",
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "nationalPhoneNumber": "(612) 872-8893",
      "location": {
        "latitude": 44.9559091,
        "longitude": -93.28772459999999
      },
      "googleMapsUri": "https://maps.google.com/?cid=1412145186856207520&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgBIAA",
      "websiteUri": "http://thebulldoguptown.com/",
      "displayName": {
        "text": "The Bulldog Uptown",
        "languageCode": "en"
      },
      "primaryType": "bar_and_grill",
      "shortFormattedAddress": "2549 Lyndale Ave S, Minneapolis",
      "photos": [
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN2zoP11eMbekI-F-rwF8lVX7RDFXOy95l9ipCocb4F8NeQJb-m36u1naXJUQ8PIvfI8g_3USKlU5oruzDRI1B7_gvA9BG7UFHoNIqtUqiNXHpw1Jsz7YJvpCVGzEC_rLzNx85jAJBIFRg4EGAc3ccUxDhXiVhR1QfKNP-0UdTdIH3VOAB4zk8z6l_0zrP98awTc14d8qS9IPx3e35Hdv0Aq4r5fjWr4qo9oyoRhMuWLieYvBTFuCT5mt7QyfaXCKlV4h7UhTBiaRMxsacbb06hg7bPesVDN4iLZcONhzgBYKzikX6nk5AZovh2jt2RZ-yx3rDwl6zPfg6ta2pD4LBT2fOECn_oqsI3wJLG1_PIf6e95CFUOYgEiFH4eku4-_gWXKhsp4KubL41HF2COXrLv8KuuEJMB2KvMtsfILs4",
          "widthPx": 2928,
          "heightPx": 2882,
          "authorAttributions": [
            {
              "displayName": "Mindy Luth",
              "uri": "https://maps.google.com/maps/contrib/108674774272479246136",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUYugiXuLbCkI8vpBof8R8Mn_9pLKsDQIpKuKem5bwxZzJgqXwxGQ=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDchMTdKA&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDchMTdKA!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN0aNokQrhJrxLLrXJg6pECD1H9Og9KAg_iBEN1IpdulM27C8KU_nHjkPEDL4iVIexXaDkCM9jED-OJWzX9yyeXR9Dt-uz3jumejXAeY4uAnhB2eMxCMB-AZrG7YFndKwYz8D5FHluyf2Zp7F7LHSO-h0kPNF7CtCV2YBXDaXTguNq59PKwcLPgD4g3QylcuUVWLdVIN1cA8wLfogLiLDNAEDuvtlGre7cQ4hBaRkDJSm94Bo54Ib8shQ2forM2sJ7MJDG6VYgHv-AVU5zDuNyUbwv6Qqb9FJ1JX3VaGhmCuDQ",
          "widthPx": 514,
          "heightPx": 387,
          "authorAttributions": [
            {
              "displayName": "The Bulldog Uptown",
              "uri": "https://maps.google.com/maps/contrib/103661019351054195942",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjV5Z4phrJ2HDxmV9PMReqm1Rgvs4aQLLFC9N122Oh38_j6A590=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipPCKO6f3UMKXhot04IT0vpwu-fAUvoNTsBa2iXV&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipPCKO6f3UMKXhot04IT0vpwu-fAUvoNTsBa2iXV!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN1Y35TZbR7P1R_qWhhj9jbFbPAPbIq8f1JIhyOjgps3RSzf7DH9a2uU5lxi_lOK3PdI3ZigyO4Ip_uNvgyhX5n2B1ImeYkMigULiVMuxWSW0MG_NMNRI3t7qQJ6ou2xRCDJPh2ybfHXE8EaYhhQOurU_NsCgVP3ar0buNPvgMc8W5wWEvOB3_fAAL4466DWVRmWmFU5EPK0qJsex5RMODJYdSccFIw5auXeqhsEsY5bc4SKHCOYu4kAKVS5HDtJjQ0aqHO5lhS-PcrhLsgqWgDNMV9tvZ_0CtK9_1UUc8rj5ivf_6nyHMghZOqaoPLcEG1YjIVyePY_yS9vOb0o9b4I2b2dUJ5Fnfq2hG7wX9cd9iDGcZ1sH3OTA3CiMIwGNd7bnTekbi_tiJCFyFItgjplfxbwv53gBXwNi8gVIinVLdg",
          "widthPx": 3024,
          "heightPx": 4032,
          "authorAttributions": [
            {
              "displayName": "Tyler Mielke",
              "uri": "https://maps.google.com/maps/contrib/113792084971760532022",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWu25lvOR7skBk5_awz2youOvv49i61vjQfn5rdOfxrH7rw0R8=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDP3La8-gE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDP3La8-gE!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN3FxKmZZHaIN6mUP8N4GY_--HbuZxyF1W4Gj2NGE239IlDHGZGeaeboAUlRhH6C8-mxNrU993BTzbu_IGGs4xMfOgSOV6DWdddkD1eQXhSOc2aBbSjfZzn9q9fFeIvl4uJcOdpLRNwfxv4vWyMl87Fg7KbeSfL3WdoUmyJWkwa-HcbWX9YSPgHYxFoPEgKRvWRtzyApk7I7BVrKSnGCGuQMXnBT6lAofas7zBFhMH7v3XqZvWujFe5WP_hmOAKQ5A6MlIeL_ZbnbnxuCNXxSMevxHwpCWlF00cMaAIDABpZi9JK01zvgmGZxCtUBpKWmApMnCkdm1TN-G-MXR5EYDSxXaSw_c7q1pBdDkfR67eQn0N_UC4LJtCtgB4AvN-fnEmz6sQ08E6t4wvQ0sv1W7pMx6ZH045xmjPDnCHJjYuX2g",
          "widthPx": 2989,
          "heightPx": 2988,
          "authorAttributions": [
            {
              "displayName": "ΛLEXΛNDER • FRΛNKKI",
              "uri": "https://maps.google.com/maps/contrib/108019317635094392738",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjXYY7O7qWPKe6fB_omPNzXeIxsIBik0C01G2sdeR0kAt03zvLFFuw=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICp8bycWg&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICp8bycWg!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN09MuePfzHU9P4dCn-PV49dAfTCu2_xxKXzto2SSfFpAEq-9ZKaDd3UQlFdLQ-IorhMyOceOh2q6-PHRzRCLIFJ19oTmZ6x-1n6URsQmrrGf3SNyPqrWT4b8ZDh3MGq68Ao2pCtECQ7NfDbDxwfNA-qwmK47ZVfEAV1atPf2ntP-RTSJ4ed8Zm6Ih-7yhEt7znOhPwJpRzZiff11dP86We4IRnqBnhky9ZAzpxnlVoL5X73ytk9Dpy1r0GfnOQv8dZ5CBvD8MlMUtBNrrswTa1xJljZCjO8Vzg_eezXvOgQdklUx57ho2qI0Gew892G9hyxwKip9lN6zTXOJyzg4hHedelKrEpDVUGk-EzqDo3RX2vVjgzGyFZrXMAFFYTfg513F2eA2or4ZUvE4dfCy6SGrZuOhRWfULVHW0DmQD8_65feXZxb3e7iKS3mTRV0",
          "widthPx": 4624,
          "heightPx": 3472,
          "authorAttributions": [
            {
              "displayName": "Abigail L Johnson",
              "uri": "https://maps.google.com/maps/contrib/104027903954631073873",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVJp_NqN-qTXyq4VxQyRMP4oqoTlq9j4tDV3MJ2JcMqlCmmSxBh=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhC5WXggtx7_700Ah6AV6i67&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhC5WXggtx7_700Ah6AV6i67!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN3mHWBG5KLquN2avwPhLn0S6yWJxLr-1WC8KFHPb6kW7fR3ctAyu4SJdosZXbCtz1iIrwRx1QPE5041qP7L2jCq21A_TUZZ8pNBsiyCcdk03qVQxxkuJEbrdGU472TVXq4BGynRo94nTLjiFLXoZsnx_2weNefn-nq0lF0Rb76TE7G-tQEMvjV6K9OPDefsFBNRhmbA_B6e01OgyRS8MpXPpRyWZu5aPWV-QfNLzFa3j3wtE-b7dBD4jcRFo7xR5yjIi8qBwfFSkbtKtn7nfPpV6N4oNDqee_2cdq_toPanxOVOqQ7862J0T8qhIYwn9aChTyMjO443Qy2V2Tz_sAPh8l4-adRwCpNjhxd651CGgQEDrYOPqgeYS30OqqtOlHawmBQOXBljnw6lUjuhxppQcGLQil5GZzX3CbYXKY3tRQ",
          "widthPx": 3024,
          "heightPx": 4032,
          "authorAttributions": [
            {
              "displayName": "S B",
              "uri": "https://maps.google.com/maps/contrib/117226718577247714798",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVmtqijp8haMROqlVtb9Zcuws2ER3uf0mPS-QuU2nhPBG6Qa6Qe=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICR-NXlcg&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICR-NXlcg!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN1wUjLgZpriDVEvQvkZZmii_8ElG91MRmKNHweo3_u7Scd9Flkast-N6-CbniZpErcEd7qQc5OzkLOIV8oXWGyyUamNEw0zLEJS9BVX0Fk61bIHGY7pcemVXz9gS1DaKQzTl8f7-bccbVB9au7tOrUgjP5Mis9DPqxHLwk5q9xZIuL80amCZBnuuMynxhXK2wPO7TLr-jgbvkZciVeKbeNb48HJEEcr_4g7izP3QBxbriLZW89yVMPpqX6vUJTzRmDsop6gcTaw6JsVZVaNLNQ08tzXRfZPACcO2XKB2qQiKaEIzdU3nJx3GkDgkO-7y69KOa5XCt7OQ5nrHfU5Pm5GW_ydYPK4V6pGtC6kUQlFHP4yJSTmr64ZPLBcLDMEl1msRVZlDGNiLL3vyxyJaACi1CSMIc930Y0ro4vDV28Ltw",
          "widthPx": 4016,
          "heightPx": 3008,
          "authorAttributions": [
            {
              "displayName": "Danelle",
              "uri": "https://maps.google.com/maps/contrib/108082599982187360130",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjVer3AETnM_ikMtM_LAaWfRXFnmIb6inh9eHilMuuSyv2MrnKrfCg=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDs4pyKIw&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDs4pyKIw!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN3aqe55yRDxmHE2R1HS6Xq9dlsS8NyTZCSFniki8Md3WE2xslKQhDLuXY9q7B5mJl5i0aB5K04bqTXWzCI5FGMXkzFP33Q4cCsAJfUNtd5s-q0TezDWNYY70WCIgYbrvr8VFUXxVukASWODlrj3Kfq3-smMSIl0u6If6I47FnJtfr5Ju2ByyBKDWJLyy0CPge2HXCBtEuI4rtHcjNosSOVU_2G8gCZnyMW4IuRebAEgcq6XGgAQL9cPFluH_vL2t1kB8Ki_mA3rKCRDqAMA2B0IjElrLt6tZJZ20yrdoeLd9SRryR7XzLnfUWlge3m6jgE_ldFBUmuxFJbavQICjixUkCWcm_2-IT9-jAeRpgiKyDXO2LzQAjeoXmIa5G0n-zA9eKKZEkTlXmk7w-Ow7GtFecPd4oRXW0BOzprpcLLrQGzS0vUgBbtUAeQInw",
          "widthPx": 3024,
          "heightPx": 4032,
          "authorAttributions": [
            {
              "displayName": "Shawna Newman",
              "uri": "https://maps.google.com/maps/contrib/106342903682981085659",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjV9lm1YL241Vs6awJTbEFntTkI-Ylz2K9o55jm1t6aWCetrSHk=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhDNFY1y6TiN3hOPf0av6Va3&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhDNFY1y6TiN3hOPf0av6Va3!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN2tCdyV_WZbn660kAhWaGUmJY2t9-Jcp-xyPhgSZwVZEEtav9vvwmKx0WuPuhf3zfvFXft-OgX1VAFLZw43BXOV68U69G0ZCo-90_eZGs-dcl8Qm0YCYBPydgH-VJyq4PRxNbjiK1fzrJN_LVJnCW9IHuhxkBCngGGxb6gcEbfWqQ2Jvyw4MzBQSTEwGK-kysFrAs6XC0sRm9xrYpdQIvRwbz_oSHrtHzWRrOJO8x_cl47RcUdBFzLydp2eSJM6pvg7fL-cuIeHbm-nVzs2L77WSAfHxY0pL1Sg5ouvxGXDerLP_-yb7Tm7A92r5_rKXFJaOVIq3aa0EgnjzgKtL524uy-_um0PAqGe9XoJq6UNS5BRZG_vR-x1PCEIv4QRiVU2oaZgL6o1IgpqH5xzMPnriQ2FnzisvnH-rn-OD3Pn3A",
          "widthPx": 4000,
          "heightPx": 3000,
          "authorAttributions": [
            {
              "displayName": "Eli Halliwell",
              "uri": "https://maps.google.com/maps/contrib/103184841335611177400",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWyUMpv66YptKwpUIL5wEri3xlVXaNRHPYFfAEtqRAbtoou7XrlDQ=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDvwIayFg&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDvwIayFg!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        },
        {
          "name": "places/ChIJObThls0ys1IRoITXyZDymBM/photos/AcnlKN1ZKVeV3Pa7XON8qj0VULk6-W73-H-ik9Ww6r6Bxa-M__TCg5ob7DSvQU3kjtipyKeTbtbydyh1P0J-zE1JkfzOfrBioc7zm2V-6yS02cxJlqRH--N9LhUyHUKU7Jbz_vmGKsK3ajK0bgXOgAZfnVMgSw1J4E0_ICXN628I8-FfRbG6KD4pWbkLtfV42SXFDGD7kyWuyb1nc6WsEa6VZAUcFi3FY94QuerLGty_mXS3z0Z_fHwXIDqXV-bhPcQ_tJwsZlWLY4nwhBqKZwD5UebBMFZhuba68sV9jKcHXjBIShdoN3GMa6sfpSUE-7ijZ60RU-1aJ18Q5EfW-w1voVNpFXdtmcCUsnSnhi-VEHrpG4QRzN3EieFY9z7FIW4qHJm4TMBkTLqOfUmyowKf5aproimWHwAxiU6HgoVMksfBcHuv",
          "widthPx": 3024,
          "heightPx": 4032,
          "authorAttributions": [
            {
              "displayName": "Micah Beverley",
              "uri": "https://maps.google.com/maps/contrib/113055998600737121033",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWqB3qMm8Hd7FdbiNa1OHnSlU9bWXxV0kGI8GqEyWLu3LHlvbcd=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgID-sqn-3AE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgID-sqn-3AE!2e10!4m2!3m1!1s0x52b332cd96e1b439:0x1398f290c9d784a0"
        }
      ]
    },
    {
      "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs",
      "id": "ChIJKzOP65Qys1IRIwASstOhIRs",
      "types": [
        "bar_and_grill",
        "american_restaurant",
        "meal_takeaway",
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "nationalPhoneNumber": "(612) 339-0638",
      "location": {
        "latitude": 44.974888199999995,
        "longitude": -93.279443
      },
      "googleMapsUri": "https://maps.google.com/?cid=1955021643853201443&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgBIAA",
      "websiteUri": "http://thebulldogdowntown.com/",
      "displayName": {
        "text": "The Bulldog Downtown",
        "languageCode": "en"
      },
      "primaryType": "bar_and_grill",
      "shortFormattedAddress": "1111 Hennepin Ave, Minneapolis",
      "photos": [
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN1Pgro2qfco-LLs9M9NAepPaA9uu6x_j-cij2iF0lgRI2mS3X4NZ0qklYJB278jLnA1CZHQm-ZW7rZdBS6uTdMrDZTTXiiIjiK8ESg4hlGLJK9nXwrIFT9iuSTn_gRATp7DtT7cDNZbFhKbkXFW5Mqmx-zVgN_IR9dV4Gs396fnbZEFBEhN30oIv2SJl-c7f8W8kLO_HMp0tgvg8ctyPrqmghMLi7_jos1m_Kt5E6uvc-u7IVPGZ_nwgiDzGle7sjojS7np4iuPpVVEQQL4HZh6qANWxy5Q0fZi6O8L1uxx7w",
          "widthPx": 4800,
          "heightPx": 2906,
          "authorAttributions": [
            {
              "displayName": "The Bulldog Downtown",
              "uri": "https://maps.google.com/maps/contrib/116773630851472381105",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWL76jTsFSqslQZNeiPoXMFm5XWzUlpw-3cCO-3DptM9E31yKU=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipNKxD5BnXU9WiRbevbJr1VDYMlYnk1Dx5SxoxNE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipNKxD5BnXU9WiRbevbJr1VDYMlYnk1Dx5SxoxNE!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN1DYEjciYxepGqJfS8Rn5VuzCBj9BX0mDhlhxOLzUWKZrtyqg3gH3AV42Ufv3n5BwORiZwJlWsJQq02fVvgHtFxbBvhmju51fRjbmLQYkYLk7Hv-zo0r7tjy5ei-jew213K-3GYoFvh96bJUPoOsPn0s8mSMD3DLjNb9Q6M8J6rCcQAph_0paZ16htkGVq7jQQRbsRblhii8TSHP1ZzWq3N86Zfd95D1l4urXOR3GB0h6Bp_T0A-98yU5vBdqAfnmm5H1fC5mCHgLXCPiTA9Jo5KXCGtc5XUbU1bcjM6in4Aw",
          "widthPx": 646,
          "heightPx": 363,
          "authorAttributions": [
            {
              "displayName": "The Bulldog Downtown",
              "uri": "https://maps.google.com/maps/contrib/116773630851472381105",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWL76jTsFSqslQZNeiPoXMFm5XWzUlpw-3cCO-3DptM9E31yKU=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipMKMiAYVfC09mzbIrtvF0FnTqLu1eaFipYtqxaX&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipMKMiAYVfC09mzbIrtvF0FnTqLu1eaFipYtqxaX!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN3fECzzcvrVz8I2HMwPmNKYG6mRm8nRIyOZlbxbfDimzNL6kUq0BoYvyWQHySmRITJ3sHc4miTR6klGMValW6O9kZvfwe3KOql97WjPMuKqlz3AoKiniTF8F_0ONo6eCH_MCVQm05DMqvpLZxlWVDpQDvYmNYxpwwDd9vCLegJAlAr3ynFkbgm2pCag9PmzV99usjwzwDTrD6WszNcX2mErNgfs2ULLW9FU3mySjeLSKalRC-1Wm1BS3xpyVAu8Puan2Ai0JAm6ACAc4-5P1uIwP_wyv7YdgLWxFg4IzNTALw",
          "widthPx": 1000,
          "heightPx": 285,
          "authorAttributions": [
            {
              "displayName": "The Bulldog Downtown",
              "uri": "https://maps.google.com/maps/contrib/116773630851472381105",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWL76jTsFSqslQZNeiPoXMFm5XWzUlpw-3cCO-3DptM9E31yKU=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipOjmYx3puoU2JXPaOJ9jF6jj1zYW8QWAJ4uU3S_&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipOjmYx3puoU2JXPaOJ9jF6jj1zYW8QWAJ4uU3S_!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN0tGHvBrQ2r9lgYPSdZSMRR8fJvnd5o0AMwdutJpAbaIUBRXsKwWx7DBkCS4q1FgUYEUkrEVtqjyXDyf-DfFND4ux0XmdsGOHsOMRCzzK2v80UnzDUIQCqouzfew4cDpznbMbojFZquxHkuDvzoJ-c1wchOij2eiQ7g_VKvfvRdACuu9JfgDjKinHNvq6SHVtGlnEQPL5icXBrx81umM2WtLepfbCgOuBPkZj391rcRhu8e55DlWS8DSJ-1AHMYwqq-aR_iHEMiex73qFjrsenlxHIXok1l9VMi48Wk_IZDAHbnnqLATefZediTRt4E0YL-CtdT3S2PAseibk0KwL81DV2r_U_K1WnNQ7n_sQXXEt2Zu2yRZTW9iUnSF_Y6jKMhsjfkWVdi8x1Ge9hTe629gThZfBcfSjkWj1O2iWkb3A",
          "widthPx": 4000,
          "heightPx": 3000,
          "authorAttributions": [
            {
              "displayName": "Donald Lee",
              "uri": "https://maps.google.com/maps/contrib/109448752893999323464",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjW5BHAtNj6gZ3C0pit-aUoJdatHt2vn4X185PDGNKjZVcbWi1hseA=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgID56r2EFA&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgID56r2EFA!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN3xejcRdieh1Iib939Ww-eUS-13b8-K-ofCB4UIrqZxxz-q8T3mRlSXJalJ5y9XfklfttpI0Awdn3Urodi_Xqgzf_QJhV5xiHSAj07dsl_ovJRiWngFTbqMInI3Rzfb4_JHL7-Cpr1raPrs8bnQv_9-5pWOOalC7_tIJs0afA7X_hU_doKpyTOugQIr_HjbuapEGckRxSpIKTCLt02eIseKfHwMq5k1Ea8RSO19UFL2uhtrv_CL0yG23uXzahvdzX74SE5QT_Y9g1QiM5GCZrsZs4SgcXDh5K8SWyINAfaU0g",
          "widthPx": 4194,
          "heightPx": 3042,
          "authorAttributions": [
            {
              "displayName": "The Bulldog Downtown",
              "uri": "https://maps.google.com/maps/contrib/116773630851472381105",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWL76jTsFSqslQZNeiPoXMFm5XWzUlpw-3cCO-3DptM9E31yKU=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipOM9VMepb-BQ5bcPZD1Xda4Pj5tnqmdUBlwf5Nu&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipOM9VMepb-BQ5bcPZD1Xda4Pj5tnqmdUBlwf5Nu!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN1pjxyM3vpxfygUihZlRvm55lyw_VshngESCTKSXESUCrmVpUyFj2ImoMJZFBmogPZ83YhBptF6N_9nv7nhZEo877xLI42X7-5efa0-t2BrXb_ojEv55tARemAQRlflIa6GuDF5LloaHnI3xjQdRDrFPt2oBp4tPvVksvaQ4T9076bQT7xlIKE-xV4Eq6UWfUEkDeXsSh4uvSuuIW4Brr_rVaTTpxFQsNbwYCnO-t7k9AQSk30kiJ_9B9MJ7AnZrT_5flCyTGAIuMkqEmGNb7jtVRlmP9F23w0kgZVWfjSeh0xm-DT3VBW22NuxkYPFilAxC3L-PVZOiWCfUMSbzjzmJEdfBG8rAXOeBO-fZoPODPyGoLygBV073AEc1DlA7IyfWCOa7hbXLmqt2yEsuHfgkLblinMNJOJiyuv_N9hfMNySHifebApw7lcxqjPi",
          "widthPx": 4080,
          "heightPx": 3072,
          "authorAttributions": [
            {
              "displayName": "Kyle Conroy",
              "uri": "https://maps.google.com/maps/contrib/109400981339147050282",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUtxT5d5WJwaE7NU5e8JMPpqkvc3_nZOMyyg16BzpGBrJ5BmF-Ngw=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhBIoIjCk3xDWAeKYso6Z7eF&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhBIoIjCk3xDWAeKYso6Z7eF!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN1Pxl1wXy2n27sJM-j99wC0qyP2aia0RvUJRXKLEsnrIB5zbECTo_QNxNcSq7uu21J4lGOWKDPOJlVBnHTw835CLHzdWCQPnarm_Ey2pb9aPJ3ACNmZAbmR-xkNzTp0zRLIkQx8LdqvPoFmhkf1KbLjAb5ziTizKu634_vuKwDh17Xl0SUyrHLe1FhOWb23EjHaKpiDnkzeVFZcpYJ30-jaDar8bcL_qQc2k3gBz62C21V8XivQ6LeLD9NARW3qfJVcC4xKz74GF8V-S1w3VRUBZTUHQ69rVcnw9K9B0BSk50NC9D_P6eFsHJdWYci_c_lmJRRD6wnWx7BwXaJO-wSpFrl8-b7HDHqiRCsDkknKYE5eS4k9IbEeCycY9VtAM8Gk-jR5vYA_KyDpDUqHYhjmTYEcFt2ccprulDQOars5hw",
          "widthPx": 4000,
          "heightPx": 1800,
          "authorAttributions": [
            {
              "displayName": "Jokermom007",
              "uri": "https://maps.google.com/maps/contrib/106796220259737851961",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjUVu_2tcV-p4b24pyDfKdp6gm_rvQgddakJCQvrTpHH2XlhkzpDVA=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgMDo1535Rg&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgMDo1535Rg!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN1Yz4RZTs76uj0fgk0htFOtxoVWaved3imV6tSM5SHhBimyb38uRNkMxSoGGwo7oCrMTi6-NovS3gEocZZMoKfWoA7osXxHjHUXeDrL005sbtt9zRRA-ATgB3W1C-b9l7gIlCrpnaGHyBNNTk5FRPcY--c-3xaOze24FxfXn6wtCxdgL_Fgbnp0ik0Tyr4aOuPCBzVT1s1xNltKMuAoXnX06I4u76spG2ALzJUceKMi1TO5DHPTm48frHoVXtSdPJuaYtUBf-gPw4D4V9LwXeyCdY7_3Xr1BDU8Lbu7EzHPeeWUu4WV272Ij6i0Gl1xrFaFfZormE227Bazn8oZ6kSNcJDJW3Wrjf6FFsEzRkW3Ob2AoXmwhg4KS3nxfNfAuWtML-pb1T0rYFkldpYABnG5Tbm6CHOLBs3v8D_4BIjmSAtq",
          "widthPx": 4032,
          "heightPx": 3024,
          "authorAttributions": [
            {
              "displayName": "Bruce Domaille",
              "uri": "https://maps.google.com/maps/contrib/102458607166421346330",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWGEzdLDEifCqJ6NLLZKgtHcyn8a21UqVChgZQl6VqMfDKlVG9Crg=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICh75zd-AE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICh75zd-AE!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN3VPaS9A_zjMLFwh1m8YHLlEcY46w-JnNpgyVNuiXxqE7HRzNsXe6v7XXmaD8S1awChk3IOtkVTFGEwl40hYiuWI0Iyc84s7Pk627OacBz1Ya9gxOGEdG4dDSr4UtSADIP7Qy8bUe61vZ7k5kxWwgePIMkngEhwxKRs4kZB6mS3XEcg6g0P5zJ1hcLBG3o7MOcA2F2cLjQtxi3Qq-OW6P8p4yNHPj-9-8CQ_lF1cCE_DtpA8mQ0xjC6sTcv54chNOxbUglUlQ_BPvRuwd2-KT88wBXMq5trJBuj_euQaVCrA861SgUT6Xo2b3zQKeRB4v3AAbbrEHaM6KZ_vYhfVSKepb4aMVu1cmfmPUpNRgU4rytQTR7q2oNva9X7PmDJIKotlCQ3_emzX9vZUHvLlz4lwmIt8zq1FxtX1uqMb42A4OQ1",
          "widthPx": 3024,
          "heightPx": 4032,
          "authorAttributions": [
            {
              "displayName": "Bruce Domaille",
              "uri": "https://maps.google.com/maps/contrib/102458607166421346330",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWGEzdLDEifCqJ6NLLZKgtHcyn8a21UqVChgZQl6VqMfDKlVG9Crg=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICh75ztgAE&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICh75ztgAE!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        },
        {
          "name": "places/ChIJKzOP65Qys1IRIwASstOhIRs/photos/AcnlKN1unWVCigxyUUOXNdDXKQ3RiTBtq2kZs6T2qN-9eAbDQExkqMhgBjfJSlFLpP692A8hQIAnwdm5-I0GQeEvJRY1b6TdX1WxaWUoZEZ-WUj4UEhMZu5uRrcVerP9n-WAq44sRMMsZ5TWhE8IEMsM5TskVBEeQzF884ZCUQNzNbAYPpljoyqqnM9tC92nxxxa-ZGoruXhedjGp66ABvdvx8WPR7jYGAxRNpH-Ril6qji8tTGvxqmqZjv04o9JbRH3POt5fwbe7QTCzfL5hC5lmnQn8eJdMv0IDAAO9eHFhl9fJsemx9rjogiiFECNk1uaEoVEyYygN8Wtz5xY3n3c-995nyrjQrxNeyQCa4DFY2QeUV7uTjtPdTuuIhab39-_9506pffxgu0BZCtJVTN1O8mhJPtrPhrMrfbmajav2HdHKsjqejXRpYxQqCm_MI4f",
          "widthPx": 4000,
          "heightPx": 3000,
          "authorAttributions": [
            {
              "displayName": "Susan Lundberg",
              "uri": "https://maps.google.com/maps/contrib/115674611937717914898",
              "photoUri": "https://lh3.googleusercontent.com/a-/ALV-UjWPNq9-rsynbJ_eVVuvAt-lCTDwX7MC4R_NMPkAzIADirDhhtdN=s100-p-k-no-mo"
            }
          ],
          "flagContentUri": "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhAGbyfQpyDFGmgGq1YABNEV&hl=en-US",
          "googleMapsUri": "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhAGbyfQpyDFGmgGq1YABNEV!2e10!4m2!3m1!1s0x52b33294eb8f332b:0x1b21a1d3b2120023"
        }
      ]
    }
  ]
}
```